const Pool = require ('pg').Pool
const pool = new Pool ({
    user:'postgres',
    host: 'localhost',
    database: 'dados_form',
    password: '061285',
    port: 5432,
})

const getName = (req, res) => {
    pool.query('SELECT * FROM .curriculo ORDER BY id ')
}