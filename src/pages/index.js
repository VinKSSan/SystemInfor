import { getSystemInfo } from './api/systemInfor';

function Home({ systemInfo }) { 
  return (
    <>
      <main>
        <div>
          <h1>Informações do Sistema</h1>
          <p>Número de núcleos do processador: {systemInfo.coresProcessador}</p>
          <p>Velocidade do processador: {systemInfo.velocidadeProcessador}</p>
          <p>Velocidade da memória RAM: {systemInfo.velocidadeMemoriaRAM}</p>
          <p>Capacidade de armazenamento: {systemInfo.capacidadeArmazenamento}</p>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const systemInfo = await getSystemInfo();
 
  return {
    props: {
      systemInfo,
    },
  };
}

export default Home;
