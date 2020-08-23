require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/cliente', (req,res) => {
    res.json('get cliente')
});

app.post('/cliente', (req,res) => {
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }else{
        res.json({
            cliente: body
        })
    }
});

app.put('/cliente/:id', (req,res) => {
    let id = req.params.id;
    
    res.json({
        id
    })
});

app.delete('/cliente:id', (req,res) => {
    res.json('delete cliente')
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto ', process.env.PORT);
});