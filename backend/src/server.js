import express from 'express';
import config from './config.js';
import formCreate from './handlers/forms.js';

require('dotenv').config();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const db = require('./models');

const app = express();
app.use(express.json());

const { User } = db.models;

//configuring nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

//testing connection to the db
db.sequelize.sync().then(() => {
    console.log('Connection has been established successfully.');
})

app.post('/register', async (req, res) => {
    const { email_user, password, name_user } = req.body;
    const verification_code = Math.floor(1000 + Math.random() * 9000).toString();

    //creating a new instance of user
    const user = await User.create({
        email_user,
        password,
        name_user,
        verification_code
    });

    //sending email
    await transporter.sendMail({
        from: 'MarkedUP <' + process.env.MAIL_USER + '>',
        to: email_user,
        subject: 'Verification code',
        html: 'Your verification code is: ' + verification_code + '.' + ' Do not share it with anyone.'
    });

    res.send('Verification code sent to ' + email_user);
})

//This code checks if the user exists in the database with the email and the verification code, if exists == true, if not, error
app.post('/verification', async (req, res) => {
    const { email_user, verification_code } = req.body;
    const user = await User.findOne({ where: { email_user, verification_code } });

    if (user){
        user.isVerified = true;
        await user.save();

        const token = jwt.sign({ email_user }, config.secret);
        return res.json({ token });

    } else {
        return res.status(400).send({ error: 'Invalid verification code' });
    }
});

const authenticate = (req, res, next) => {
    const token = req.header('Authorization'.replace('Bearer ', ''));

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
        next();
    }
    catch (error){
        return res.status(400).send({ error: 'Failed to authenticate' });
    }
};

//authenticated
app.get('/protected' , authenticate, (req, res) => {
    res.send('Hello, you are authenticated!');
});

app.use('/', formCreate);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        return res.status(400).send({ error: 'Invalid email or password' });
    }

    if (user.isVerified) {
        return res.json()
    }

});