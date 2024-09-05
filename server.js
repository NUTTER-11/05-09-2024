const express = require('express');
const server = express();
const PORT = 8000;

server.use(express.urlencoded({extended:false}))

const userApiRoutes = require('./user/routes/userRoutes');
const userRoutes =require('./user/routes/index')


server.use('/',userRoutes);
server.use('/api',userApiRoutes);



server.listen(PORT,()=>{console.log("hello the server is started")})