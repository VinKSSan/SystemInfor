import {ipAd, startGlobalServer} from '../server.mjs'
import { getSystemInfo } from './systemInfor.mjs';
import axios from 'axios';


const serverSide = async () => {
  try { 
    const ipAddress = ipAd 
    const response = await axios.get(`http://${ipAddress}:80/systeminfo`); // Função para buscar informações do sistema
    const systemInform = await response.data;
    console.log('F sideProps exec, get: ', `http://${ipAddress}:80/systeminfo`) 
    return systemInform
  } catch (error) {
    // Trate o erro de forma adequada
   console.error('deu erro no props aqui:', error);
  } 
}

const startServer = async () => {
  await startGlobalServer();
  const sysInf = await serverSide();
  return sysInf
};

export async function startAll() {  
  return getSystemInfo()
  .then(async () => {
    return startServer()
    .then((sysInf) => {
      console.log('eeee startServer exec');
      return sysInf
    }).catch((error)=>{
      console.error('erro server aqui, startServer do start all ', error)
    })
  })
  .catch((error) => {
    console.error('Error getSystem NÃO EXECUTADO:', error);
  })
}
/*
const SSFunção = async ()=>{
  //suponha que esses valores seja obtidos de uma api
  const A = await 2// sendo que no lugar do de 2 tem-se a consulta a api  
  const B =await 6
  const SAB = A+B
  return SAB
}

function Gfunção(){
  return new Promise((resolve) => {
    const s = 1+1
    const a = 2+2
    const Ss = s+a
    resolve(Ss)
  })
}

const SFunção = ()=>{
  const AB = 3+5
  const C = 1+2
  const SABC = AB +C
  return SABC
}

const stfunção = async ()=>{
  SFunção();
  const SABi = await SSFunção();
  return SABi 
}


function resultado() {
  return Gfunção()
  .then(() => {
    stfunção()
    .then(() => {
      console.log('exec')
    }).catch((error)=>{
      console.error(error)
    })
  })
  .catch((error) => {
    console.error( error);
  })
}*/