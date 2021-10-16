import express from 'express';
import { getConnection } from "typeorm";
import { Product } from '../Entities/ProductEntity';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        let productResponseData = [] as Product[];
        const products = await getConnection().manager.getRepository(Product).find();
        if (products.length > 0) {
            productResponseData = products;
        }
        res.status(200).json(productResponseData);
    } catch(error) {
        res.status(400).send(`error something went wrong error: ${JSON.stringify(error)}`);
    }
});

router.get('/:productId', async (req, res) => {
    try {
        let product = {} as Product;
        const queriedProduct = await getConnection().manager.getRepository(Product).findOne({ where: { Id: req.params.productId }}) as Product;

        if (queriedProduct !== undefined) {
            product = { ...queriedProduct };
        }
        res.status(200).json(product)
    } catch(error) {
        res.status(400).send(`error something went wrong error: ${JSON.stringify(error)}`);
    }
})

export default router;