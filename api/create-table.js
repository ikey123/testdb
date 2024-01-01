import { Pool } from 'pg';

// 从环境变量中获取数据库连接字符串
const DATABASE_URL = process.env.DATABASE_URL;

// 创建一个连接池
const pool = new Pool({
  connectionString: DATABASE_URL
});

export default async function handler(req, res) {
  try {
    // 检查请求方法是否为 POST
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    // 执行 SQL 查询来创建表
    const result = await pool.query('CREATE TABLE IF NOT EXISTS result (id SERIAL PRIMARY KEY, name TEXT, owner TEXT)');

    // 返回结果
    res.status(200).json({ message: 'Table created', result });
  } catch (error) {
    // 如果发生错误，返回错误信息
    res.status(500).json({ error: error.message });
  }
}
