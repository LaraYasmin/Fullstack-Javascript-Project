import transporter from '../nodemailer/nodemailerConnect.js';
import Form from '../models/form.js';
import Login from '../models/login.js';

const postUserRegister = async (req, res) => {
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

const postUserLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await Login.findOne({ where: { email, password } });

    if (!user) {
        return res.status(400).send({ error: 'Invalid email or password' });
    }
}

const getFormData = async (req, res) => {
    try {
        const response = await Form.findAll();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const postFormData = async (req, res) => {
    try {
        const { company_name, email, description, contact, responsible } = req.body;
        const data = await Form.create({ company_name, email, description, contact, responsible });
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

export { postUserRegister, postUserLogin, getFormData, postFormData };