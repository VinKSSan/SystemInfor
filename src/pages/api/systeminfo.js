import fs from 'fs';
import path from 'path';
import {getSystemInfo} from './systemInfor.js';


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
       
      const systeminformation = await getSystemInfo();
      //res.status(200).json({...systeminformation});
      const rootDir = path.resolve()
      const filePath = path.join(rootDir, 'systemInfo.json');  
     // const systemInfo = JSON.parse(jsonData);      
   
      fs.writeFileSync(filePath, JSON.stringify(systeminformation, null, 2));
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const systemInfo = JSON.parse(jsonData);

      res.status(200).json({...systemInfo});
    } catch (error) {
      console.error('Error while reading systemInfo.json:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
