const fs = require('fs')

const requestHandler = (req, res) => {
    console.log(req.url);

    if(req.url === "/") {
        // Pagina inicio HTML con bulma

    } else if (req.url === "/Lab07") {
        fs.readFile('../Lab07/index.html', function(err, data){
            if (err) throw err;
            res.setHeader('Content-Type','html');
            res.write(data);
            res.end();
        })
    } else if (req.url === "---") {
        
        // Form

    } else if (req.url === "---") {
        // Alguna otra ruta

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write('<head><meta charset="UTF-8"></head>');
        res.write('<h1>Esta página no existe...</h1>');
        res.end();
    }
}

module.exports = requestHandler;
