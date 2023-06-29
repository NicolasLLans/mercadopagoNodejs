import { config } from 'dotenv'
config();

export const PORT = 3000;

export const HOST = `http://localhost:${PORT}`

export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_TOKEN