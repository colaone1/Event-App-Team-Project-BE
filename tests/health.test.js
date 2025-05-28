const request = require('supertest');
const app = require('../index');

describe('Health Check', () => {
  it('should return 200 OK for health check endpoint', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
  });
}); 