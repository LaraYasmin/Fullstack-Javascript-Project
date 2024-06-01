import User from "../models/users.js";

export default{
    create: async (req, res) => {
        try{
            const { email_user, password, name_user } = req.body;
            
            if (!email_user || !password || !name_user){
                return res.status(400).json({ error: 'Missing fields' });
            };

            const user = await User.create({
                email_user,
                password,
                name_user
            });

            return res.json(user);
        }
        catch (err){
            return res.status(400).json({ error: 'Error creating new user' });
        }
    },
}