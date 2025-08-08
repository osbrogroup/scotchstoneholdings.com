import mysql from 'mysql2/promise';
const dbConfig = { /* your db config */ };

export default async function handler(req, res) {
  const connection = await mysql.createConnection(dbConfig);
  if (req.method === 'GET') {
    const [rows] = await connection.execute('SELECT * FROM home_content LIMIT 1');
    await connection.end();
    res.status(200).json(rows[0] || {});
  } else if (req.method === 'POST') {
    const { heading, body, image_url } = req.body;
    await connection.execute(
      'UPDATE home_content SET heading=?, body=?, image_url=? WHERE id=1',
      [heading, body, image_url]
    );
    await connection.end();
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}