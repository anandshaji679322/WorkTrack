import request from 'supertest';
import app from '../app';


describe('GET /test/api', () => {
    it('responds with JSON containing "Hello from Express Backend!"', async () => {
      const response = await request(app).get('/test/api');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        message: 'Hello from Express Backend!'
      });
    });
  });