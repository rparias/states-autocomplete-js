'use strict';

import express from 'express';

import routes from './routes/index';
import states from './api/states';

const app = express();

app.use('/dist', express.static('dist'));
app.set('port', 3000);

app.listen(app.get('port'));

app.use('/', routes);
app.use('/api/states', states);
