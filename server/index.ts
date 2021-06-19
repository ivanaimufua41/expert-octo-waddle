import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";
import { Product } from './Data/ProductData/ProductDTO';
import ProductRouter from './Data/ProductData/ProductRouter';
const app = express();
const main = express();

// main.use(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = 8000;

app.use('/api/products', ProductRouter);

app.listen(PORT, () => {
  createConnection({
      type: "mssql",
      port: 1433,
      host: "ecommercerumi.database.windows.net",
      username: "ivanaimufua41@gmail.com@ecommercerumi",
      password: "24Kingswood@",
      database: "Ecommerce-Test",
      entities: [Product],
    }).then(() => {
      console.log('Connected to database successfully!');
      console.log(`[server]: Server running at https://localhost:${PORT}`);
    });
});