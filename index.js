var http = require("http");

const app = require("./src/app.js");

const PORT=6000;
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
