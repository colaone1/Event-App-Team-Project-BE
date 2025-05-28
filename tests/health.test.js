const request = require('supertest');
const app = require('../index');

describe('Health Check', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(0, () => { // Use port 0 to get a random available port
      done();
    });
  });

  afterAll((done) => {
    if (server) {
      // Set a timeout for server close
      const timeout = setTimeout(() => {
        console.error('Server close timeout');
        done();
      }, 5000);

      server.close(() => {
        clearTimeout(timeout);
        done();
      });
    } else {
      done();
    }
  });

  it('should return 200 OK for health check endpoint', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
  });
}); 