import { createConnection } from "typeorm";

export const PORT = 7000;

export const connectToDatabase = (): Promise<void> =>  createConnection().then((connection) => {
      console.log('Connected to database successfully!', connection);
      console.log(`[server]: Server running at https://localhost:${PORT}`);
    });
