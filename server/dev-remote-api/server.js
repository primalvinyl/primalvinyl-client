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

//slow down api to simulate production
server.use((req, res, next) => setTimeout(next, 100));

//route calls to static assets
server.get(
    '/test-lyrics',
    (req, res) => res.sendFile(path.join(__dirname, 'public', 'test-lyrics.html'))
);

server.get(
    '/test-soundcloud',
    (req, res) => res.sendFile(path.join(__dirname, 'public', 'test-soundcloud.html'))
);

//route api calls to json server
server.use('/', jsonServer.router(path.join(__dirname, 'db.json')));

//start server
const port = process.env.PORT || 8080;
server.listen(port, () => console.log('JSON Server API is running on port %s', port));
