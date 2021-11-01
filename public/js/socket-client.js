// Rferencia del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io();

socket.on('connect', () => {

    // console.log('Connected');
    
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''

});

socket.on('disconnect', () => {

    // console.log('Disconnected');
    
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'

});

socket.on('send-message', ( payload ) => {

    console.log( payload );

});

btnEnviar.addEventListener( 'click', () => {

    const message = txtMessage.value;
    const payload = {
        message,
        id: '12345',
        date: new Date().getTime()
    }
    
    socket.emit('send-message', payload, ( id ) => {
        console.log('From server', id);
    });

});
