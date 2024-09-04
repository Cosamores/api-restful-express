import { update } from '../../models/userModel.js';


 const editUser = async (req, res) => {
    const { id } = req.params;
    const produto = req.body;

    produto.id = +id;

    const result = await update(produto);

    if(!result) {
        return res.status(500).json({
            error: "Erro ao atualizar produto"
        }) 
}
    return res.json({
        success: "Produto atualizado com sucesso",
        user: result
    });
}

export default editUser