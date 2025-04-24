/*
Routing:
-Manejar las solicitudes del cliente en base a ciertos criterios:
. metodo: get, post, etc.
. path/camino: recurso especifico que se usara
*/
 
const http = require('http'); // usamos un modulo que ya existe
const {artistas} = require('./artistas.js'); // traemos un modulo que creamos nosotros , por eso el ./
const PORT = 3000; // por convencion las constantes se escriben con mayuscula

const server = http.createServer((req, res) => {
    // {method} es desestructurar un objeto. en este caso, busca la propiedad method del object req 
    // y la guarda en la variable method
    const {method} = req;
    
    //console.log(`url les ${req.url}`);
    console.log(`method es ${method}`);
    
    switch (method) {
        case 'GET':
          console.log('hola soy un get modificado');
          return get(req, res);      
        default:
            console.log('no soy na');
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      }
});

function get(req, res){
    const path = req.url;
    console.log(path);

    if (path === '/')
    {
        console.log('localhost:3000')
        // por ej localhost:3000/
        return res.end("Bienvenide a mi primer Server :)");    
    }
    else if (path === '/artistas')
    {
        console.log('artistas')
        return res.end(JSON.stringify(artistas));
    } 

    res.statusCode = 404;
    console.log('No hay recurso');
    return res.end('El recurso solicitado no existe...');
}

server.listen(PORT, () => {
    console.log(`Hola, estamos escuchando en el puerto ${PORT}`);
})