const express = require('express');
const path = require('path');

const server = express();
const port = process.env.PORT || 3000;
server.set('views', path.join(__dirname, 'public','views'));
server.set('views', 'ejs');
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));


server.post('/w', (req, res)=> {
 const hmToken = 'sBwu0kd8uGJSdE1JNqQNqyM9ayB094a6433e19-e849-4052-a7d8-c4b0c6219f06 ';
 const hmReceivedToken = req.headers['x-hotmart-hottok'];

 if(hmReceivedToken == hmToken){
    const data = req.body;
    console.log('data recieved !!', data);
    res.status(200).send('webhook received');
 }else{
    res.status(401).send('authorization token invalid');
 
 }
 });

 server.get('/', (req, res) =>{
    res.render('index');
    res.send('this is definittely working');
 });

 server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
 });