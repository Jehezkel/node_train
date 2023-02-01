const express = require('express')
const bodyParser = require('body-parser')
const app= express()
const port= 3000

const posts_routes=require('./routes/posts-routes')

app.listen(port,()=>{
    console.log('server is listening on port ',port);
});
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({extended:true})
);
app.use('/api/posts',posts_routes);
