Como enviar e-mail através do NodeJS?

Primeiro criamos o nosso primeiro arquivo, ele vai ser nosso servidor (server.js):

Instalamos o modúlo smtp-server (npm install smtp-server). Este módulo fica responsável pela implementação do protocolo
SMTP, sendo assim podemos focar na lógica do nosso projeto.
O construtor SMTPServer pode aceitar muitos parâmetros, você acessar a documentação no seguinte link:
https://nodemailer.com/about/

Usamos o disableCommands: ["STARTTLS", "AUTH"], essa opção faz que 
desabilitamos o suporte e autentificação do TLS (Transport Layer Security).
Mas isso em uma ambiente real não é recomendado, no caso devemos habilitar usando a opção:
secure: true.

Especificamos também o "logger: true", que permite o registro do nosso servidor SMTP.

Para iniciar chamamos a função listen() no objeto. 
A listen pode ser seguida passando uma porta e também uma função de retorno.

Nossa primeira parte está configurada, agora precisamos criar nosso arquivo, send.js:

Instalamos o nodemailer (npm install nodemailer), 

