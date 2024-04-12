import memberService from '../services/member.service.js';
import { generateJwt } from '../utils/jwt.utils.js';

const authController = {

    login: async (req, res) => {
        const { username, password } = req.body;

        const member = await memberService.getByCredential({ username, password });

        if(!member) {
            res.status(400).json({
                message: 'Crédential invalide'
            });
            return;
        }

        const token = await generateJwt(member);

        res.status(200).json({ token });
    },

    register: async (req, res) => {
        res.sendStatus(501);
    }

};

export default authController;