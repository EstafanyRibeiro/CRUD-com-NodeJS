/*O Express oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. Integrar "view engines" para inserir dados nos templates. Definir as configurações comuns da aplicação web,
como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.*/

const express = require('express');

const app = express ();

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

