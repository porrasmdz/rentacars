import mysql from 'mysql2/promise';

interface Options {
  query: string,
  values?: any[]
}

const pool = mysql.createPool({
    host: 'server1.shopoly.store',
    
    user: 'ITSO_root',
    password: 'Rootroot123',
    database: 'ITSO_mydb',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  });

  export const sql = async ({query, values} : Options) => {
    const [rows] = await pool.query(query, values);
    
    return rows
  }