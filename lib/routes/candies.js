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
  post(req, res) {},
};
