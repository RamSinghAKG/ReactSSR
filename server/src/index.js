// api -> https://react-ssr-api.herokuapp.comp
import 'babel-polyfill';
import express from  'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    var store = createStore(req);
    res.send(renderer(req, store));
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
