import { create } from '../../models/productModel.js';

export const createProduct = async (req, res) => {
    const product  = req.body;
    const result = await create(product);
    console.log(product)

    if(!result) {
            return res.status(500).json({
                error: "Erro ao criar produto"
            }) 
    }
        return res.json({
            success: "Produto criado com sucesso",
            user: result
        });
}

export default createUser;