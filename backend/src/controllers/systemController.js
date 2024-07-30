import jwt from 'jsonwebtoken';
import db from '../connectDB/mysqlConnect.js';
import transporter from '../nodemailer/nodemailerConnect.js';

const { User } = db.models;

const registerUser = async (req, res) => {
    const { email_user, password, name_user } = req.body;
    const verification_code = Math.floor(1000 + Math.random() * 9000).toString();

    const user = await User.create({
        email_user,
        password,
        name_user,
        verification_code
    });

    await transporter.sendMail({
        from: 'MarkedUP <' + process.env.MAIL_USER + '>',
        to: email_user,
        subject: 'Verification code',
        html: 'Your verification code is: ' + verification_code + '.' + ' Do not share it with anyone.'
    });

    res.send('Verification code sent to ' + email_user);
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
        return res.status(400).send({ error: 'Invalid email or password' });
    }

    if (user.isVerified) {
        return res.json()
    }

}

export { registerUser, loginUser }