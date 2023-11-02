const http = require("http");
const app = require("./app");
app.set("PORT", process.env.PORT || 3010);

const server = http.createServer(app);

server.listen(process.env.process || 3010, () => {
  console.log("server en marche");
});


