import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectToDatabase, PORT } from './Connection/Connection';
import ProductRouter from './Product/ProductRouter';

require('dotenv').config

// if (!process.env.PORT) {
//    process.exit(1);
// }
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/products', ProductRouter);

app.listen(PORT, () => connectToDatabase());