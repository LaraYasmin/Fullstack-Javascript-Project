import code_v from "../models/code_v.js";

export default {
    update: async (req, res) => {
        try {
            const { id, expiration, code, is_used } = req.body;
            
            if (is_used === true) {
                return res.status(400).json({ error: 'Code already used' });
            }

            const codeV = await code_v.update({ expiration, code, is_used }, { where: { id } });

            return res.json(codeV);
        } catch (err) {
            return res.status(400).json({ error: 'Error to use code' });
        }
    },
}