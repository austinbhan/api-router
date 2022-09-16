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
        const newSauce = {sauce: 'brown', color: 'brown'}
        sauces.push(newSauce);
        res.write(JSON.stringify(sauces));
        res.end();
    },
    put(req, res) {
        const popped = sauces.pop()
        sauces.push({ sauce: 'squid ink', color: 'black' })
        res.write(JSON.stringify(sauces));
        res.end();
    },
    delete(req, res) {
        res.statusCode = 400;
        res.write('You cannot have sauces');
        res.end();
    }
}