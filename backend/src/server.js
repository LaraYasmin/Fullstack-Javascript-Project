import express from 'express';
import sequelize from './connectors/sequelize.js';
import users_h from './handlers/users_h.js';
import forms_h from './handlers/forms_h.js';
import config from './config.js';
import code_vh from './handlers/code_vh.js';


(async () => {
    // Initi DB
    await sequelize.sync();

    const app = express();
    app.use(express.json());

    app.get('/', (req, res) => res.json({ status: 'ok' }));
    app.post('/register', users_h.create);
    app.post('/forms', forms_h.create);
    app.put('/code_v', code_vh.update);

    app.listen(config.port, () => console.info(`Server running on port ${config.port}`));
})();