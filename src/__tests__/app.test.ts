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
    const result = await request(app).get('/');
    expect(result.status).toBe(200);
  });
});

describe('Test /resize route', () => {
  it('Request to /resize should return staus 404 for an unknown file', async () => {
    const result = await request(app)
      .get('/resize')
      .query({
        name: 'thisisarandomfilename',
        width: 200,
        height: 200
      })
      .send();
    expect(result.status).toBe(404);
  });

  it('Request to /resize should return staus 200 for a known file', async () => {
    const result = await request(app)
      .get('/resize')
      .query({
        name: 'fjord',
        width: 200,
        height: 200
      })
      .send();
    expect(result.status).toBe(200);
  });

});
