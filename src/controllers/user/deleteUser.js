import { remove } from '../../models/userModel.js';


const userById = async (req, res) => {
    const { id } = req.params;
    const user = await remove(+id) 

if(!user) {
     return res.status(404).json({success: "Usuário encontrado", user})
}
return res.json({ success: "Usuário removido com sucesso"})
}

export default userById