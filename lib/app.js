import cats from './routes/cats.js';
import candies from './routes/cats.js';
import notFound from './not-found.js';

const routes = {
  cats,
  candies,
};

export default async function (req, res) {
  const parts = req.url.split('/');
  if (parts.length && parts[1] === 'api') {
    // req.body = await bodyParser(req);
    const resourceName = parts[parts.length -1] 
    const resource = routes[resourceName];

    const route = resource[req.method.toLowerCase()];

    route(req, res);
    return;
  }

  notFound(req, res);
}
