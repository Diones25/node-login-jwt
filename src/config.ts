import dotenv from 'dotenv';

dotenv.config();

export default {
  port: Number(process.env.PORT) || 3000,
  auth: {
    secret: process.env.JWT_SECRET || 'secret',
    expiresIn: process.env.AUTH_EXPIRES_IN || '1d'
  }
}