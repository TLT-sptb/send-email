const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 4321
})
transporter.sendMail(
    {
        from: "camargocarla0508@gmail.com",
        to: "weslley2106@gmail.com",
        subject: "Ola",
        text: "Ola mundo!",
    },
    (err, info) => {
        if(err){
            console.log(err);
        }
        console.log("Mensagem enviada: ", info);
    }
)