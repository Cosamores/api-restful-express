import { getAllProducts } from '../../models/productModel.js';

const listProducts = (req, res) => {
    const products = getAllProducts();
    res.json(products)
}

export default listProducts;