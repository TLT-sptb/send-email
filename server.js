const SMTPServer = require('smtp-server').SMTPServer;
const PORT = 4321;

const server = new SMTPServer({
    secure: true,
    logger: true
});


server.on("error", (error) =>{
    console.error(error);
})

server.listen(PORT, () => {
    console.log("Conectado na Porta ", PORT);
});