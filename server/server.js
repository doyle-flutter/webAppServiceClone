// npm i -s express cors socket.io morgan mysql http

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    cors = require('cors'),
    // key = fs.readFileSync(path.join(__dirname,'./keys/private.pem')),
    // cert = fs.readFileSync(path.join(__dirname, './keys/public.pem')),
    app = express(),
    http = require('http').Server(app),
    // https = require('https').createServer({key: key, cert: cert }, app),
    io = require('socket.io')(http),
    morgan = require('morgan'),
    port = process.env.PORT || 3003,
    serverOpenHandle = () => console.log(`SERVER OPEN : ${port}`),
    dorender = require('jamessdev-do-render')(app),
    session = require('express-session'),
    sessionConfig = require('./configs/_session.js');

app.disable('x-powered-by'); 
app.listen(port,serverOpenHandle);

var Routers = {
    mainRouter : require('./routers/mainRouter.js'),
    adminRouter : require('./routers/adminRouter.js'),
    webRouter : require('./routers/webRouter.js'),
};
app.use('*', (req,res,next) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");   
    res.header("Expires", 0);
    next();
});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('views'));
app.use(session(sessionConfig));
// routers
app.use('/', Routers.mainRouter);
app.use('/admin', Routers.adminRouter);
app.use('/web', Routers.webRouter);

app.get('/favicon.ico', (req, res) => res.sendFile("/Users/doylekim/Downloads/jameshead.png"));
app.use('*', (req,res) => res.json("noPAGE"));
io.on('connect', socket => console.log("CONNECT"));
