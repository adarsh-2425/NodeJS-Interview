const express = require('express');

const app = express();

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listener
emitter.on('messageLogged', e =>{
    console.log('Listener Called');
});

//Register an event
emitter.emit('messageLogged');

app.get('/', (req,res)=>{
    res.send('Invalid endpoint')
});

app.get('/lol',(req,res)=>{
    res.send('lol happens');
})

app.listen(3000, e=>{
    console.log('server running on port 3000');
})