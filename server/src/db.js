const pg = require("pg");

const pool = new pg.Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'myapp',
  password: 'mypwd',
  port: 5432
});

async function get(query) {
  const res = await pool.query(query);
  return res.rows;
}

async function mutate(query) {
  const res = await pool.query(query);
  return res.rowCount;
}

module.exports = {
  get,
  mutate,
};
