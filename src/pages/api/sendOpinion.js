import nodemailer from "nodemailer";

export default async function handlerOpinion(req, res) {
  if (req.method === 'POST') {
    const { opinion , userEmail, userName } = req.body; 
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user:  process.env.E_Adress,
        pass:  process.env.E_Password, 
      },
    });

    const mailOptions = {
      from: `${userEmail}`,
      to: 'viniciuskss136@gmail.com',
      subject: 'opinião do usuário',
      text: `${userName}: ${opinion} , email deste usário: ${userEmail}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Opinião enviada com sucesso!' });
      console.log("opinião enviada")
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ error: 'Erro ao enviar a opinião. outer code' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
