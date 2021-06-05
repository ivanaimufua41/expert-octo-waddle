import * as functions from "firebase-functions";
import * as express from "express";
import * as bodyParser from "body-parser";
import "reflect-metadata";

import {createConnection, getConnection} from "typeorm";
import {Product} from "../../Data/ProductData/ProductDTO";

const app = express();
const main = express();

main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

app.get("/products", async (req, res) => {
  try {
    const connection = await createConnection({
      "type": "mssql",
      "host": "ecommercerumi.database.windows.net",
      "username": "ivanaimufua41@gmail.com@ecommercerumi",
      "password": "24Kingswood@",
      "database": "Ecommerce-Test",
    });

    await connection.connect();
    const products = await getConnection().manager.find(Product);
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log("error");
  }
});


export const webAPI = functions.https.onRequest(main);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
