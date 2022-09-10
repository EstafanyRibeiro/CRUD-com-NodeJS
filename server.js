/*O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. Integrar "view engines" para inserir dados nos templates. Definir as configurações comuns da aplicação web,
como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.*/

const express = require('express');

const app = express ();

/*const pg = require("pg");

const config = {
    host: 'db-crud.postgres.database.azure.com',
    user: 'estafanyribeiro',
    password: 'Vondy061@',
    database: 'db-crud',
    port: 5432,
    ssl: false
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
    CREATE TABLE dados_in (id serial PRIMARY KEY, name VARCHAR(60), age INTEGER, adress VARCHAR(90), email VARCHAR(40), fone INTEGER, graduacao VARCHAR (150), cursos VARCHAR (150), exp_profissional VARCHAR(150));
    INSERT INTO dados_in 
    `
}*/



app.listen(3000, function() {
    console.log('server running on port 3000')
});

app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    console.log('Respostas enviadas'),
    console.log(req.body)
})

/*app.post*/
