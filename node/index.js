const http = require('http');
const fs = require('fs');
require('dotenv').config();
const port = process.env.PORT || 3333;
const {createLink} = require('./links');
const url = require('url');
const arquivos = process.argv[2];

const endereco = `http://localhost:${port}/1.txt`;
const urlAtual = url.parse(endereco,true);

const server = http.createServer((req, res) =>{
   if(urlAtual.pathname === '/'){
      
        fs.readdir(arquivos, (err, files)=>{
            res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
            if(err){
                res.end('<p>não funcionou, tenta denovo!</p>');
            }else{
                files.forEach((file)=>{
                    res.write(createLink(file));
                });
                res.end();
            };
        });
    }else if(urlAtual.pathname != '/'){
           const caminhoArq = arquivos + urlAtual.pathname.slice(1);
            fs.readFile(caminhoArq,'utf8', (err, content)=>{
                if(err){
                    res.writeHead(404,{'Content-Type': 'text/plain;charset=utf-8'});
                    res.end('Arquivo não encontrado');
                }else{
                    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
                    res.write(`<a href="/">Voltar</a>`);
                    res.write(`<pre>${content}</pre>`);
                    res.end();   
                }
            });
        }
    });


server.listen(port);