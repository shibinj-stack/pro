const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : true }));

let mongoClient;
let db;
let mongoState = 'not_configured';

async function connectMongo() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    mongoState = 'not_configured';
    return;
  }
  mongoClient = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.MONGODB_DB || 'clinicdesk');
    mongoState = 'connected';
  } catch (error) {
    mongoState = 'disconnected';
    console.error('MongoDB connection failed:', error.message);
  }
}

app.get('/health', (_req, res) => {
  const ok = mongoState === 'connected' || process.env.ALLOW_NO_DATABASE === 'true';
  res.status(ok ? 200 : 503).json({
    status: ok ? 'ok' : 'degraded',
    service: 'clinicdesk-api',
    database: mongoState,
    timestamp: new Date().toISOString()
  });
});

app.get('/api', (_req, res) => res.json({ data: { service: 'ClinicDesk API', version: '1.0.0' } }));

app.get('/api/appointments', async (_req, res) => {
  if (!db) return res.status(503).json({ error: 'Database is not configured or unavailable' });
  try {
    const items = await db.collection('appointments').find({}).limit(100).toArray();
    res.json({ data: items });
  } catch (error) {
    console.error('Appointments query failed:', error.message);
    res.status(500).json({ error: 'Unable to retrieve appointments' });
  }
});

const port = Number(process.env.PORT || 10000);
connectMongo().finally(() => {
  app.listen(port, '0.0.0.0', () => console.log(`ClinicDesk API listening on 0.0.0.0:${port}`));
});

async function shutdown() {
  if (mongoClient) await mongoClient.close().catch(() => {});
  process.exit(0);
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
