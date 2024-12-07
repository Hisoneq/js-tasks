const chatWindow = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const locationButton = document.getElementById('locationButton');

const socket = new WebSocket('wss://example.websocket.org');

socket.addEventListener('message', (event) => {
    console.log('Received from server:', event.data);
});

const sendMessage = () => {
    const message = messageInput.value;
    if (message) {
        chatWindow.innerHTML += `<div>Вы: ${message}</div>`;
        socket.send(message);
        messageInput.value = '';
    }
};

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault();
    }
});

locationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const locationLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=12/${latitude}/${longitude}`;
            chatWindow.innerHTML += `<div>Вы: <a href="${locationLink}" target="_blank">Моя гео-локация</a></div>`;
            socket.send(locationLink);
        });
    } else {
        alert('Геолокация не поддерживается вашим браузером.');
    }
});