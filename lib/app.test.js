import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('Returns 404 not found on bad cats route', async () => {
  const { text, status } = await request(app).patch('/api/v1/cats');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('Returns 404 not found on bad candies route', async () => {
  const { text, status } = await request(app).patch('/api/v1/candies');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('Returns 404 not found on bad sauces route', async () => {
  const { text, status } = await request(app).patch('/api/v1/sauces');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});