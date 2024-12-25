const notifier = require('node-notifier');
const http = require('http');


const customMessage = 'This is your hourly reminder! Stay productive.';


function sendNotification() {
  notifier.notify({
    title: 'Hourly Notification',
    message: customMessage,
    sound: true,
  });
  console.log(`Notification sent: ${customMessage}`);
}


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Notification server is running\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
  sendNotification();

  setInterval(sendNotification, 5000); // 3600000 ms = 1 hour
});
