const http = require('http'); 
const {artistas} = require('./artistas.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    
    const {method} = req;
    
    switch (method) {
        case 'GET':
          return get(req, res);      
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      }
});

function get(req, res){
    const path = req.url;
    console.log(path);

    if (path === '/')
    {
        return res.end("Bienvenide a mi primer Server :)");    
    }
    else if (path === '/artistas')
    {        
        return res.end(JSON.stringify(artistas));
    } 

    res.statusCode = 404;    
    return res.end('El recurso solicitado no existe...');
}

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Hola, estamos escuchando en el puerto ${PORT}`);
})