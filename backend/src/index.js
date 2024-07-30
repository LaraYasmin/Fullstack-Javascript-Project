import express from 'express';
import router from './router.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

require('dotenv').config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use('/', router);

export default {
    port: process.env.PORT,
    dbPath: process.env.DB_PATH || join(__dirname, '..', 'mysql.db'),
};