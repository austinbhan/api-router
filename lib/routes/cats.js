const cats = [
  { color: 'orange', flavor: 'spicy' },
  { color: 'red', flavor: 'fruity'}
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
    const newCats = cats[cats.length -1];
    const updatedCat = { color: 'black', flavor: 'unlucky'}
    newCats.push(updatedCat);
    console.log('line 24', JSON.stringify(newCats));
    res.write(JSON.stringify(newCats));
    res.end();
  }, 
  delete(req, res) {
    res.statusCode = 400;
    res.send('You cannot have cats');
    res.end
  }
};
