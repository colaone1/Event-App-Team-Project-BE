const request = require('supertest');
const app = require('../index');

describe('Health Check', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(0, () => {
      done();
    });
  });

  afterAll((done) => {
    if (server) {
      // Close all connections
      server.getConnections((err, count) => {
        if (err) {
          done(err);
          return;
        }
        
        if (count === 0) {
          server.close(done);
          return;
        }

        // Force close all connections
        server.close(() => {
          done();
        });
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