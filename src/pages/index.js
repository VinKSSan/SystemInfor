
import { Worker } from 'worker_threads';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Cabeça from '../componentss/cabeça/indexCab';
import GrafaSec from '../componentss/seçãoGrafana/grafaSec';
import Sdata from '@/componentss/seçãoDados/SDataIndex';
import SecHero from '@/componentss/seção_hero/secHeIndex';
import Folte from '../componentss/footer/foIndex';
import ArrowIndicator from '@/componentss/setinha/setaIndex';


function Home({systema}) {  



  const url =  systema.systemInf.eP
  console.log(url)
  const [isLoading, setIsLoading] = useState(true);
  const  [dados , setDados] = useState('')
  useEffect(() => {
    console.log('inicio fect')
    const fetchData = async () =>{
      try{
        const config = {
          headers: {
            'Access-Control-Allow-Headers': 'Content-Type'// Adicione outros cabeçalhos permitidos aqui, se necessário
          },
        };
        let response = await axios.get(url , config)
        let data = await response.data
        setDados(data)
        setIsLoading(false)
        console.log('feth exec')
      }catch(erro){
        console.error('erro no feth', erro)
      }
    }
    const Interval = setInterval(fetchData, 5000);
    console.log('final fet')    
    return ()=>clearInterval(Interval);
  },[])  

  if(isLoading===false){console.log(dados.systemInf.localTime)} 
  
  return ( <>
    {isLoading ? (
      <p>Loading</p>
      ) : (
      <> 
        <Cabeça data={dados.systemInf}/> 
        <ArrowIndicator/>
        <main>
          <SecHero/>
          <hr/>
          <hr/>
          <Sdata data={dados.systemInf}/>
          <hr/>
          <hr/>
          <GrafaSec data={dados.systemInf}/>
        </main>
        <Folte data={dados.systemInf}/>
        <p style={{color:"red", fontSize:"10px" , margin:"0px auto"}}><spam>Atenção:</spam> app não adaptado a telas menores de 800px de largura</p>
      </>
      )
    }
  </>);
} 

export default Home;


// Função para iniciar o servidor


async function callGetServerInBackground() {
  return new Promise((resolve, reject) => {
    const worker =  new  Worker('./src/pages/api/utils/workServer.mjs');

    worker.on('message', (sysInf) => {
      if(sysInf !== undefined) {
        console.log('work resolvido:')
        resolve(sysInf);
      }
      console.log('Resultado da função startServer: parabens, parece que deu certo')
    });

    worker.on('error', (error) => {
      console.error('Erro no worker:', error);
    });

    worker.on('exit', (code) => {
      if(code !== 0) {
        console.error(`Worker encerrou com código de saída ${code}`)
      } 
    }) 
  } )  
}


//retorno da promessa
async function promiss(){ return callGetServerInBackground()
    .then((sysInf)=>{ 
      return sysInf
  }).catch((error)=>{console.error('func worker erro', error)});
}


//função mestra
export async function getServerSideProps() {
  
  try {
  //espera pela promessa  
    const systtem = async () => {
      try {
        const sysInf = await promiss();
        console.log('work exec aqui', sysInf.systemInf.eP);
        return sysInf;
      } catch (error) {
        console.error('func worker erro', error);
        throw error; // ou retorne um valor de erro adequado, se necessário
      }
    };
    //espera da espera da promessa
    const systema =await systtem(); 
    const EP = systema.systemInf.eP
     
    
    let response = await axios.get(`${EP}`) // Função para buscar informações do sistema
    let systemInform = response.data;
    console.log('segundo serverSide', systemInform.systemInf.localTime)
  
    return {  
      props: {
        systema: systemInform, // Define como `null` caso `systemInfo` seja `undefined`
      },
      
    }  
  } catch (error) {
      // Trate o erro de forma adequada
     console.error('deu erro no props:', error);
    return {
        props: {
          systema: null, // Define como `null` caso ocorra um erro
        }
    }; 
  }
}
