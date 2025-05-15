// db.js

// Carrega variáveis de ambiente
import 'dotenv/config';

// Importa do Neon
import { neon } from '@neondatabase/serverless';

// Exporta o cliente de conexão com o banco
export const sql = neon(process.env.DATABASE_URL);
