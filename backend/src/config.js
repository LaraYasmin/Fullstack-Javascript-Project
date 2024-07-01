import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { error } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    port: process.env.PORT || 5000,
    dbPath: process.env.DB_PATH || join(__dirname, '..', 'mysql.db'),
};