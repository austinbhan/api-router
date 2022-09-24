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
it('GET all cats', async () => {
  const { text, status } = await request(app).get('/api/v1/cats');
  expect(JSON.parse(text)).toEqual([
    { color: 'orange', flavor: 'spicy' },
    { color: 'red', flavor: 'fruity'},
    { color: 'green', flavor: 'huh'},
    { color: 'grey', flavor: 'old'}
  ]);
});
it('POST should add a cat', async () => {
  const newCat = { color: 'polka', flavor: 'weird' }
  const test = await request(app).post('/api/v1/cats').send(newCat)
  .expect(200);
});
it('PUT should update a cat', async () => {
  const otherCat = { color: 'put test', flavor: 'put test flavor' }
  await request(app).put('/api/v1/cats').send(otherCat)
  .expect(200);
}); 

it('DELETE should delete all cats', async () => {
  await request(app).delete('/api/v1/cats')
  .expect(204);
});

// // Sauces Test Suite
it('Returns 404 not found on bad sauces route', async () => {
  const { text, status } = await request(app).patch('/api/v1/sauces');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('GET all sauces', async () => {
  const { text, status } = await request(app).get('/api/v1/sauces');
  expect(JSON.parse(text)).toEqual([
    {  sauce: 'marinara', color: 'red' },
    {  sauce: 'alfredo', color: 'white' },
    {  sauce: 'vodka', color: 'orange' },
    {  sauce: 'pesto', color: 'green' }
  ]);
});
it('POST should add a sauce', async () => {
  const newSauce = { sauce: 'brown', color: 'brown' }
  const test = await request(app).post('/api/v1/sauces').send(newSauce)
  .expect(200);
});
it('PUT should update a sauce', async () => {
  const otherSauce = { color: 'put test', flavor: 'put test flavor' }
  await request(app).put('/api/v1/cats').send(otherSauce)
  .expect(200);
});
it('DELETE should delete a sauce', async () => {
  await request(app).delete('/api/v1/sauces')
  .expect(204);
})

// Candies Test Suite
it('Returns 404 not found on bad candies route', async () => {
  const { text, status } = await request(app).patch('/api/v1/candies');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
it('GET all candies', async () => {
  const { text, status } = await request(app).get('/api/v1/candies');
  expect(JSON.parse(text)).toEqual([
    { brand: 'jolly ranchers', maker: 'highlanders' },
    { brand: 'butterfinger', maker: 'ferrero' },
    { brand: '3 musketeers', maker: 'mars' },
    { brand: 'mars', maker: 'mars' }
  ]);
});
it('POST should add a sauce', async () => {
  const newCandy = { sauce: 'brown', color: 'brown' }
  const test = await request(app).post('/api/v1/candies').send(newCandy)
  .expect(200);
});
it('PUT should update a sauce', async () => {
  const otherCandy = { color: 'put test', flavor: 'put test flavor' }
  await request(app).put('/api/v1/cats').send(otherCandy)
  .expect(200);
});
it('DELETE should delete a sauce', async () => {
  await request(app).delete('/api/v1/candies')
  .expect(204);
})