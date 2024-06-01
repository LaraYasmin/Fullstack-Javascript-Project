import Form from "../models/forms.js";

export default {
    create: async (req, res) => {
        try {
            const { company_name, description, cellphone, responsible, email } = req.body;
            
            if (!company_name || !description || !cellphone || !responsible || !email) {
                return res.status(400).json({ error: 'Missing fields' });
            };

            const form = await Form.create({
                company_name,
                description,
                cellphone,
                responsible,
                email
            });

            return res.json(form);
        } catch (err) {
            return res.status(400).json({ error: 'Error sending the form information' });
        }
    }
};