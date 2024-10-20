// config/index.ts
import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

interface Config {
    PORT: number;
    DB_HOST: string;
    MONGO_PORT: number;
    DB_NAME:string;
}

export const config: Config = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    DB_HOST: process.env.DB_HOST || 'localhost',
    MONGO_PORT: parseInt(process.env.MONGO_PORT || "27017", 10),
    DB_NAME: process.env.DB_NAME || "DB_NAME"
};
