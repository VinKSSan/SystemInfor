import axios from 'axios';
import {startLocalServer} from './api/server.mjs'


function Home({systema}) { 
 
  if(systema){
    return (
      <>
        <main>
          <div>
            <h1>Informações do Sistema</h1>
            <p>Número de núcleos do processador:{systema.systemInfo.coresProcessador}</p>
            <p>Velocidade do processador:{systema.systemInfo.velRealCPU} </p>
            <p>Velocidade da memória RAM:{systema.systemInfo.velocidadeMemoriaRAM} </p>
          </div>
        </main>
      </>
    );
  }
} 


// Função para iniciar o servidor


export const getServerSideProps = async () => {
  try {

    const startServer = async () => {
      await startLocalServer();
    };

    startServer()
    .then(() => {
      console.log('servidor iniciado');
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    const response = await axios.get('http://localhost:3003/systeminfo'); // Função para buscar informações do sistema
    const systemInform = await response.data;
    return {
      props: {
        systema: systemInform || null, // Define como `null` caso `systemInfo` seja `undefined`
      },
    };
 } catch (error) {
    // Trate o erro de forma adequada
   console.error(error);
    return {
      props: {
        systemInform: null, // Define como `null` caso ocorra um erro
      },
    };
  }
}

export default Home;
