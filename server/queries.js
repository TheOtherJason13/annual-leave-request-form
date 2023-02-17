const Pool = require("pg").Pool;
const pool = new Pool({
  user: "webdev",
  password: "Cl@yt0n42!",
  database: "webdev",
  table: "leave-form",
  port: 5433,
  host: "doitwebdev01.claytoncountyga.gov",
});

const newRecord = (req, res) => {
  const { first_name, last_name, email } = req.body;

  client.query(
    "INSERT INTO leave-form(first_name, last_name, email) VALUES($1, $2, $3) RETURNING *",
    [first_name, last_name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Record created with: ${res.rows[0].id}`);
    }
  );
};

module.exports = { newRecord };
