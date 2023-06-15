import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';


import pkg from './systemInfor.mjs';
const {getSystemInfo} = pkg;



//import {getSystemInfo} from './systemInfor.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const filePath = path.join(__dirname, '../../systemInfo.json');


async function Handler(req, res) {
  if (req.method === 'GET') {
    try {
      
      const systeminformation = await getSystemInfo(); 
      
      
      //res.status(200).json({...systeminformation});
     // const rootDir = path.resolve()
     // const filePath = path.join(rootDir, 'systemInfo.json');  
      const filePath = path.join(__dirname, '../../../systemInfo.json');
      if(Object.keys(systeminformation).length!==0) { 
         fs.writeFileSync(filePath, JSON.stringify(systeminformation, null, 2));
         const jsonData = fs.readFileSync(filePath, 'utf-8');
         const systemInfo = JSON.parse(jsonData);

          res.status(200).json({systemInfo});
       }
     // const jsonData = fs.readFileSync(filePath, 'utf-8');
     // const systemInfo = JSON.parse(jsonData);

     // res.status(200).json({systemInfo});
    } catch (error) {
      console.error('Error while reading systemInfo.json:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default {Handler}
