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
    const hi = {color: 'brown', flavor: 'tabby'}
    cats.push(hi);
    console.log('line 14', JSON.stringify(hi));
    res.write(JSON.stringify(cats));
    res.end()
  },
  // Also known as Update
  put(req, res) { 
    const popped = cats.pop()
    cats.push({ color: 'black', flavor: 'unlucky' });
    res.write(JSON.stringify(cats));
    res.end();
  }, 
  delete(req, res) {
    res.statusCode = 400;
    res.write('You cannot have cats');
    res.end();
  }
};
