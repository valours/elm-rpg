const PORT = 4000;
const jsonServer = require('json-server');

// returns an express server; 
const server = jsonServer.create();

server.use(jsonServer.defaults());

const router = jsonServer.router('./db.json');
server.use(router);

console.log(`listening at ${PORT}`);''
server.listen(PORT);


