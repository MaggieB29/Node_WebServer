const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs'); //tamos a dizer ao express que o motor para ler as paginas é o hbs

app.use(express.static(__dirname + '/public')); //isto indica à app onde é que esta a pasta dos ficheiros estaticos

//estamos a criar rotas 
app.get('/', (request, response) => {
    //response.send('<h1>Hello Express!</h1>');
    //agora vamos dizer ao server para mandar uma pagina html
    response.render('welcome.hbs', {
        title: "Welcome",
        text: "Now let me go home"
    });
});

//tem de ser acima de 1024 porque essas tao reservadas pelo sistema operativo
app.listen(3000);

app.get('/about', (request, response) => {
    response.render('welcome.hbs',{
        title: "About",
        text: "Go ask google"
    })
});

app.get('/carochao', (request, response)=>{
    var date = new Date().toString();

    response.render('carochao.hbs', {
        text: date
    });
})


