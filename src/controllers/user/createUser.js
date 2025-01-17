import { create } from '../../models/userModel.js';

export const createUser = async (req, res) => {
    const user  = req.body;
    const result = await create(user);
    console.log(user)

    if(!result) {
            return res.status(500).json({
                error: "Erro ao criar usuário"
            }) 
    }
        return res.json({
            success: "Usuário criado com sucesso",
            user: result
        });
}

export default createUser;