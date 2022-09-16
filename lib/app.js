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
    console.log('line 18', route);
    if (route == undefined) { // couldnt get out of if block
      notFound(req, res); // because the route exists, but method on that route doesnt exist
      return // return so to escape if block 
    }

    route(req, res);
    return;
  }

  notFound(req, res);
}
