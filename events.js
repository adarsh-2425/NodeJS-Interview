const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Listener
emitter.on('messageLogged', e =>{
    console.log('Listener Called');
});

//Register an event
emitter.emit('messageLogged');