import { update } from '../../models/userModel.js';


 const editUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    user.id = +id;

    const result = await update(user);

    if(!result) {
        return res.status(500).json({
            error: "Erro ao atualizar usuário"
        }) 
}
    return res.json({
        success: "Usuário atualizado com sucesso",
        user: result
    });
}

export default editUser