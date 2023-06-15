import si from 'systeminformation';


let systemInfo = {}
let timeList = []
let loadList = []
let realSpeed = []

let conta = 0


const startSystemInfoUpdates = async () => {
  return await new Promise( (resolve , reject) => {
      try {
 	      const time = si.time()         
	      const sysMãe=  si.system()	

        const cpuData = si.cpu();
        const CPULoad =  si.currentLoad()   

        const velRealCPU =  si.cpuCurrentSpeed();
        const termoCPU = si.cpuTemperature()
        const memData =  si.mem();
        const diskData = si.diskLayout();
        const processes = si.processes();
	
    	  timeList.push(time.current)
	      loadList.push(CPULoad.avgLoad)
	      realSpeed.push(velRealCPU.avg)	
        conta=conta+1
        Object.assign(systemInfo, {
          //general
	        upTime: time.uptime,
          localTime: time.current,
          syste : sysMãe ,
          listTime: timeList,
          //CPU data
	        CpuArquiterura: cpuData.manufacturer,
          CpuFab: cpuData.brand,
    	    CpuCache: cpuData.cache,
          CpuNucleos: cpuData.cores,
  	      CpuVel: cpuData.speed,
   	      CpuSock: cpuData.socket,
	        CpuTermo: termoCPU.main,
          //RAM data
          velocidadeMemoriaRAM: memData.total,
	        velFreRam: memData.free,
          velUsedRam: memData.used,
          velActiveRam: memData.active,
 	        swapTotal: memData.swaptotal,
	        swapFree: memData.swapfree,
	        swapUsed: memData.swapused,
          //SATA data
          capacidadeArmazenamento: diskData[0],
          //CPU current data         
          velRealCPU: velRealCPU.avg,
	        listLoad: loadList,
          listSpeed: realSpeed, 
	        VelCpuPerCore: velRealCPU.cores,
          LoadAVG: CPULoad.avgLoad,
          curLoad: CPULoad.currentLoad,
          proftPerCore: CPULoad.cpus ,
          cont: conta,
          //list processes
       	  allNunber: processes.all,
          listProcesses: processes.list,
        });
        resolve(systemInfo);
      } catch(error) {
          reject(error)
          console.error('Error while updating system info:', error);
      } 
  });
}



const getSystem = () => {
  return new Promise((resolve , reject)=>{        
    startSystemInfoUpdates()
      .then((SystemInfo) => {
      const resol = Object.keys(SystemInfo).length!==0;
      if(resol) {
        console.log('resolvido')
        resolve(SystemInfo)}
      })
      .catch((erro)=> {
        console.error('error: ', erro)
        reject(erro)
      });
  });
 
}
const getSystemInfo = () => {
    getSystem()
    .then((systemInfo) => {
      console.log('foi:', systemInfo.cont);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  return systemInfo 
}



export default {getSystemInfo};
