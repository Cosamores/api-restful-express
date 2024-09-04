import express from 'express';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express()
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.use('/user', userRoutes);
app.use('/products', productRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})