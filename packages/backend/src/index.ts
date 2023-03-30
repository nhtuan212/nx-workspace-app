import 'dotenv/config';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';
import { route } from './routes';
import { DatabaseConnection } from './config/database';
import { ENV_EXTENSION, ENV_PORT } from './config/constants';

const app = express();
const port = ENV_PORT;

/// Static patch
app.use(express.static(path.join(__dirname, '../public')));

/// Database
DatabaseConnection;

/// Log information from server
app.use(morgan('combined'));

/// Config express-handlebars
const handlebars = create({
    extname: ENV_EXTENSION,
});

/// Template engine
app.engine(ENV_EXTENSION, handlebars.engine);
app.set('view engine', ENV_EXTENSION);
app.set('views', path.join(__dirname, 'views'));

/// Routing
route(app);

/// Render App
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
