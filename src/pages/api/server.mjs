
import express from 'express';
import pkg from './systeminfo.mjs';
const { Handler } = pkg;


const app = express();
const apiEndpoint = '/systeminfo';

// Middleware para lidar com o corpo das requisições JSON
app.use(express.json());

// Rota GET para obter as informações do sistema
app.get(apiEndpoint, Handler);

// Rota POST para atualizar as informações do sistema
app.post(apiEndpoint, Handler);

// Rota para lidar com métodos HTTP não permitidos
app.use(apiEndpoint, (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

// Iniciar o servidor
/*const port = 3003;
app.listen(port, () => {
  console.log('Server is running on port 3003');
});*/


export const startLocalServer = async () => {
  try {
    const port = 3003
    await new Promise((resolve) => {
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        resolve();
      });
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor local:', error);
  }
};

//export default {startLocalServer}