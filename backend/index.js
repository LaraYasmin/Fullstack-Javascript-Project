import express from 'express';
import router from './src/routes/routes.js';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});