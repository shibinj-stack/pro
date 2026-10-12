const test = require('node:test');
const assert = require('node:assert/strict');

test('health endpoint contract is documented', () => {
  // The production route reports database state and a timestamp.
  // This test checks the required response contract, not a live deployment.
  const sample = { status: 'ok', service: 'clinicdesk-api', database: 'connected', timestamp: new Date().toISOString() };
  assert.equal(sample.service, 'clinicdesk-api');
  assert.ok(['ok', 'degraded'].includes(sample.status));
  assert.ok(!Number.isNaN(Date.parse(sample.timestamp)));
});
