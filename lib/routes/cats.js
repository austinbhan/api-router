const cats = [
  { color: 'orange', flavor: 'spicy' },
  { color: 'red', flavor: 'fruity'},
  { color: 'green', flavor: 'huh'},
  { color: 'grey', flavor: 'old'}
];

export default {
  name: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end()
  },
  post(req, res) {
    cats.push(req.body);
    res.write(JSON.stringify(cats));
    res.end()
  },
  // Also known as Update
  put(req, res) { 
    const popped = cats.pop()
    cats.push(req.body);
    res.write(JSON.stringify(cats));
    res.end();
  }, 
  delete(req, res) {
    const deleted = cats.pop();
    res.statusCode = 204;
    res.end();
  }
};
