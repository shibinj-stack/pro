const test = require('node:test');
const assert = require('node:assert/strict');
const { app } = require('../index');

async function listenOnEphemeralPort(t) {
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve, reject) => {
    server.once('listening', resolve);
    server.once('error', reject);
  });
  t.after(async () => {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  });
  return server.address().port;
}

test('GET /health serves a healthy HTTP response in demo mode', async (t) => {
  const previous = process.env.ALLOW_NO_DATABASE;
  process.env.ALLOW_NO_DATABASE = 'true';
  t.after(() => {
    if (previous === undefined) delete process.env.ALLOW_NO_DATABASE;
    else process.env.ALLOW_NO_DATABASE = previous;
  });

  const port = await listenOnEphemeralPort(t);
  const response = await fetch(`http://127.0.0.1:${port}/health`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.status, 'ok');
  assert.equal(body.service, 'clinicdesk-api');
  assert.ok(['connected', 'not_configured', 'disconnected'].includes(body.database));
  assert.ok(!Number.isNaN(Date.parse(body.timestamp)));
});

test('GET /health reports degraded status without DB or demo mode', async (t) => {
  const previous = process.env.ALLOW_NO_DATABASE;
  delete process.env.ALLOW_NO_DATABASE;
  t.after(() => {
    if (previous === undefined) delete process.env.ALLOW_NO_DATABASE;
    else process.env.ALLOW_NO_DATABASE = previous;
  });

  const port = await listenOnEphemeralPort(t);
  const response = await fetch(`http://127.0.0.1:${port}/health`);
  const body = await response.json();

  assert.equal(response.status, 503);
  assert.equal(body.status, 'degraded');
});

test('GET /api returns a data envelope', async (t) => {
  const port = await listenOnEphemeralPort(t);
  const response = await fetch(`http://127.0.0.1:${port}/api`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.data.service, 'ClinicDesk API');
  assert.equal(body.data.version, '1.0.0');
});
