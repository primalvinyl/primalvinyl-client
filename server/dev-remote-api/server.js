const path = require('path');
const jsonServer = require('json-server');
const routes = require('./routes');

//create server
const server = jsonServer.create();

//middleware
server.use(jsonServer.defaults({
    static: path.join(__dirname, 'public'),
    noCors: true
}));
server.use(jsonServer.rewriter(routes));

//routing
server.get('/test-lyrics', (req, res) => res.sendFile(
    path.join(__dirname, 'public', 'test-lyrics.html'
)));
server.use('/', jsonServer.router(path.join(__dirname, 'db.json')));

//start server
const port = process.env.PORT || 8080;
server.listen(port, () => console.log('JSON Server API is running on port %s', port));
