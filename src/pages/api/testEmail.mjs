// Importe o pacote nodemailer
import nodemailer from 'nodemailer'

// Defina a função para enviar um e-mail de teste
async function sendTestEmail() {
  // Crie o transporter do nodemailer com as mesmas configurações do `handlerOpinion.js`
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'viniciuskss136@gmail.com',
      pass: 'skvfrrqzcjzeetsl', 
    },
  });

  // Defina as opções do e-mail de teste
  const mailOptions = {
    from: 'viniciuskss136@gmail.com',
    to: 'viniciuskss136@gmail.com',
    subject: 'Teste de envio de e-mail',
    text: 'Este é um teste de envio de e-mail usando o nodemailer.',
  };

  try {
    // Envie o e-mail de teste
    await transporter.sendMail(mailOptions);
    console.log('E-mail de teste enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail de teste:', error);
  }
}

// Chame a função para enviar o e-mail de teste
sendTestEmail();
