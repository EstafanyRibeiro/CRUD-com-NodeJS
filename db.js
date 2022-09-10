async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://nxipckpy:VLkKiz6-EU8RG_zfv0yFi5UFTOBjMA-f@kesavan.db.elephantsql.com/nxipckpy'
    });

async function selectCustomers(){
    const info_curriculos = await connect();
    const res = await info_curriculos.query ('SELECT * FROM info');
    return res.rows;
}
    
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}

async function insertCustomer(customer){
    const info = await connect();
    const psql = 'INSERT INTO info(name, age, adress, email, fone, graduacao, cursos, exp_profissional) VALUES (Nami, 23, eg@fds, 40028922, dorobon neko, gold);';
    const values = [customer.name, customer.age, customer.adress, customer.email, customer.fone, customer.graduacao, customer.cursos, customer.exp_profissional];
    return await info.query(psql, values);
}
