const http =  require('http');



const servidor = http.createServer(function (req, resp){


var html = "";

if(req.url == '/'){
	html = "caiu no /";
}else if(req.url == '/livros'){
	html = "caiu no /livros";
}




	resp.end(html);
}); // isto já é do node

servidor.listen(3000);






/*
passo a passo:
1 - acessar cmd, pasta onde está o arquivo server.js
2 - rodar: node server.js
3 - no browser acessar localhost:3000 (ou o numero da porta na linha 7)


*/