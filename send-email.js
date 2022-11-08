const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail', //Exemplo de DNS
    auth: {
        user: 'teste@exemplo.com',
        pass: 'mypassWord'
    }
});
const conf = {
    from: 'teste@exemplo.com',
    to: 'exemplo@teste.com', 
    subject: 'Hello World',
    html: '<p>Hello World!!</p>'
}
transporter.sendMail(conf, (error, info) => {
    if(error){
        console.log(error)
    }else{
        console.log(info)
    }
});