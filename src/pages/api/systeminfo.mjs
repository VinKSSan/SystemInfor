import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';


import pkg from './utils/systemInfor.mjs';
const systemInfo = pkg;



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function Handler(req, res) {
  if (req.method === 'GET') {
    try {
      
      const systeminformation = systemInfo; 
        
      const filePath = path.join(__dirname, '../../../systemInfo.json');
      
      if(Object.keys(systeminformation).length!==0) { 
         fs.writeFileSync(filePath, JSON.stringify(systeminformation, null, 2));
         const jsonData = fs.readFileSync(filePath, 'utf-8');
         const systemInf = JSON.parse(jsonData);

          res.status(200).json({systemInf});
       } else{console.error('erro: objeto vazio')}
      console.log('handler exec')
    } catch (error) {
      console.error('Error while reading systemInfo.json:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default {Handler}
