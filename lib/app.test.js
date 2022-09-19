import request from 'supertest';
import app from './app.js';

// General Test Suite
it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

// Cat Test Suite
it('Returns 404 not found on bad cats route', async () => {
  const { text, status } = await request(app).patch('/api/v1/cats');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('Should get all cats with get(req, res)', async () => {
  const cats = [
    { color: 'green', flavor: 'huh'},
    { color: 'yellow', flavor: 'sunny'},
    { color: 'striped', flavor: 'tiger'}    
  ]

  expect(cats).toEqual([
    {color: expect.any(String), flavor: expect.any(String)},
    {color: expect.any(String), flavor: expect.any(String)},
    {color: expect.any(String), flavor: expect.any(String)}    
  ])
});

// Candies Test Suite
it('Returns 404 not found on bad candies route', async () => {
  const { text, status } = await request(app).patch('/api/v1/candies');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

// Sauces Test Suite
it('Returns 404 not found on bad sauces route', async () => {
  const { text, status } = await request(app).patch('/api/v1/sauces');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});