import path from 'path';
import express from 'express';
import proxy from 'express-http-proxy';

import htmlMiddleware from './middleware/html';
import storeMiddleware from './middleware/store';
import renderMiddleware from './middleware/render';

const publicPath = path.join(__dirname, '/public');
const app = express();

app.use('/api', proxy('https://jsonplaceholder.typicode.com'));
app.use(express.static(publicPath));
app.use(htmlMiddleware());
app.use(storeMiddleware());
app.use(renderMiddleware());

export default app;
