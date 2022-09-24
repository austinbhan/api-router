const candies = [
  { brand: 'jolly ranchers', maker: 'highlanders' },
  { brand: 'butterfinger', maker: 'ferrero' },
  { brand: '3 musketeers', maker: 'mars' },
  { brand: 'mars', maker: 'mars' }
]

export default {
  name: 'candies',
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end()
  },
  post(req, res) {
    candies.push(req.body);
    res.write(JSON.stringify(candies));
    res.end()
  },
  put(req, res) { 
    const popped = candies.pop()
    candies.push(req.body);
    res.write(JSON.stringify(candies));
    res.end();
  }, 
  delete(req, res) {
    const deleted = candies.pop();
    res.statusCode = 204;
    res.end();
  }
};
