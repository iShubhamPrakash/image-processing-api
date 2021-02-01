import request from 'supertest';
import app from '../app';

describe('GET /test - a test api endpoint', () => {
  it("returns 'Hello world!'", async () => {
    const result = await request(app).get('/test');
    expect(result.text).toEqual('Hello world!');
  });
});

describe('Test / route', () => {
  it("Request to '/' should return staus 200", async () => {
    const result = await request(app).get('/').send();
    expect(result.status).toBe(200);
  });
});
