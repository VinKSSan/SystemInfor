import si from 'systeminformation'
import express from 'express';
import pkg from './systeminfo.mjs';
import cors from 'cors' ;


const { Handler } = pkg;


const app = express();
const apiEndpoint = '/systeminfo';



// Middleware para lidar com o corpo das requisições JSON
app.use(express.json(),cors());

// Rota GET para obter as informações do sistema
app.get(apiEndpoint, Handler);

// Rota POST para atualizar as informações do sistema
app.post(apiEndpoint, Handler);

// Rota para lidar com métodos HTTP não permitidos

app.all(apiEndpoint, (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});





const ipAdres = await si.networkInterfaces()
// Rota para obter o endereço IP do servidor "http://localhost:3001/"
async function getAndStartServer() {
  try {
    const ipAddres = ipAdres[1].ip4
    console.log({ success: true }, ipAddres);
    return ipAddres
  }catch (error) {
    console.error('Erro ao obter o endereço IP:', error , ipAdres);
    console.log({ error: 'Erro ao obter o endereço IP' });
  }
}

export const ipAd = await getAndStartServer();



export const startGlobalServer = async () => {
  try {
    const port = 80
    const ip = await getAndStartServer()
    await new Promise((resolve) => {
      app.listen(port, ip ,() => {
        console.log(`Server is running on port ${port} and ip ad ${ip}`);
        resolve();
      });
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor global:', error);
  }
};
