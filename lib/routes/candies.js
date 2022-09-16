const candies = [
  { brand: 'jolly ranchers', maker: 'highlanders' },
  { brand: 'butterfinger', maker: 'ferrero' },
  { brand: '3 musketeers', maker: 'mars' },
  { brand: 'mars', maker: 'mars' }
]

export default {
  name: 'candies',
  get(req, res) { // Candies
    res.write(JSON.stringify(candies));
    res.end()
  },
  post(req, res) {
    const newCandy = { brand: 'hersheys', maker: 'hersheys' }
    candies.push(newCandy);
    res.write(JSON.stringify(candies));
    res.end();
  },
  put(req, res) {
    const popped = candies.pop();
    candies.push({ brand: 'kiss', maker: 'hersheys' });
    res.write(JSON.stringify(candies));
    res.end();
  },
  delete(req, res) {
    res.statusCOde = 400;
    res.write('You cannot have candies');
    res.end();
  }
};
