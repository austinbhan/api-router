import request from 'supertest';
import app from './app.js';

// General Test Suite
it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

// Cat Test Suite

const cats = [
  { color: 'green', flavor: 'huh'},
  { color: 'yellow', flavor: 'sunny'},
  { color: 'striped', flavor: 'tiger'}    
]

it('Returns 404 not found on bad cats route', async () => {
  const { text, status } = await request(app).patch('/api/v1/cats');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('GET get all cats with get(req, res)', async () => {
  expect(cats).toEqual([
    {color: expect.any(String), flavor: expect.any(String)},
    {color: expect.any(String), flavor: expect.any(String)},
    {color: expect.any(String), flavor: expect.any(String)}    
  ])
});
it('POST should add a cat', async () => {
});
it('PUT should update a cat', async () => {
});
it('DELETE should delete all cats', async () => {

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
