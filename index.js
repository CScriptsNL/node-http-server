if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const http = require("http");

const host = "localhost";
const port = 3000;

const app = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/html'});
  response.write("Hello from your server");
  console.log(request.url);
  response.end();
});

app.listen(port, host, () => console.log("Server is running from " + host + " on port " + port));
