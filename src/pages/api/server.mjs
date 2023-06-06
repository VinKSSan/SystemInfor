import express from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const moduleURL = new URL(import.meta.url);
const modulePath = fileURLToPath(moduleURL);

const app = express();
const apiEndpoint = '/api/systeminfo';
const filePath = path.join(path.dirname(modulePath), 'systemInfo.json');

// Middleware para lidar com o corpo das requisições JSON

app.use(express.json());

function checkPermissions(req, res, next) {

 if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  next();
}


// Rota GET para obter as informações do sistema
app.get(apiEndpoint, checkPermissions, (req, res) => {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const systemInfo = JSON.parse(jsonData);
    res.status(200).json(systemInfo);
  } catch (error) {
    console.error('Error while reading systemInfo.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Rota POST para atualizar as informações do sistema
app.post(apiEndpoint, checkPermissions, (req, res) => {
  try {
    const systemInfo = req.body;
    fs.writeFileSync(filePath, JSON.stringify(systemInfo, null, 2));
    res.status(200).json({ message: 'System info updated successfully' });
  } catch (error) {
    console.error('Error while updating systemInfo.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Rota para lidar com métodos HTTP não permitidos
app.use(apiEndpoint, (req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
});

// Iniciar o servidor
app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
