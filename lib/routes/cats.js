const cats = [
  { color: 'orange', flavor: 'spicy' }
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

  }, 
  delete(req, res) {
    res.statusCode = 400;
    res.send('You cannot have cats');
    res.end
  }
};
