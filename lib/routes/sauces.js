const sauces = [
  {  sauce: 'marinara', color: 'red' },
  {  sauce: 'alfredo', color: 'white' },
  {  sauce: 'vodka', color: 'orange' },
  {  sauce: 'pesto', color: 'green' }
];

export default {
    name: 'sauces',
    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.end();
    },
    post(req, res) {
        sauces.push(req.body);
        res.write(JSON.stringify(sauces));
        res.end();
    },
    put(req, res) {
        const popped = sauces.pop()
        sauces.push(req.body);
        res.write(JSON.stringify(sauces));
        res.end();
    },
    delete(req, res) {
        const deleted = sauces.pop();
        res.statusCode = 204;
        res.end();
    }
}