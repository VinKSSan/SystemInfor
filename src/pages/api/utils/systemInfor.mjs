import si from 'systeminformation'


let systemInfo = {}
let timeList = []
let loadList = []
let realSpeed = []

let conta = 0

const updateCurrentData = async ()=> { 
  const ipAdres = await si.networkInterfaces()
  const ipAddres = ipAdres[1].ip4
  const endPoint= `http://${ipAddres}:80/systeminfo`

  const time =  si.time();         
  const sysMãe=  await si.system();	
  const cpuData = await si.cpu();
  const CPULoad =  await  si.currentLoad();   

  const velRealCPU =  await si.cpuCurrentSpeed();
  const termoCPU = await si.cpuTemperature();
  const memData = await  si.mem();
  const diskData =  await si.diskLayout();
  const processes = await si.processes();

  timeList.push(time.current)
  loadList.push(CPULoad.avgLoad)
  realSpeed.push(velRealCPU.avg)	
  conta=conta+1
  Object.assign(systemInfo, {
    upTime: time.uptime,
    localTime: time.current,

     //general
    eP: endPoint, 
    syste : sysMãe ,
    listTime: timeList,
    //CPU data
    CpuArquiterura: cpuData.manufacturer,
    CpuFab: cpuData.brand,
    CpuCache: cpuData.cache,
    CpuNucleos: cpuData.cores,
    CpuVel: cpuData.speed,
    CpuSock: cpuData.socket,
    
    //RAM data
   
    swapTotal: memData.swaptotal,	 
    swapFree: memData.swapfree,
    swapUsed: memData.swapused,
    RamTotal: memData.total,
    FreRam: memData.free,
    UsedRam: memData.used,
    ActiveRam: memData.active,
          
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
    CpuTermo: termoCPU.main,  
  
    //list processes
    allNunber: processes.all,
    listProcesses: processes.list,
    cont: conta,
   
  })
  console.log('F updateCurrent exec: ', systemInfo.cont)
  return systemInfo
}

const startSystemInfoUpdates = () => { 
  return new Promise( (resolve , reject) => {
    try {
      setInterval(async () =>{        
        const sysInfo = await updateCurrentData()
        const resol = Object.keys(sysInfo).length!==0
        if(resol){
          resolve(sysInfo);
          console.log("F startUpSystem exec")
      }}, 5000)   
    } catch(error) {    reject(error)
        console.error('Error while updating system info , na função startSystemInfoUpdates:', error);
    } 
  });
}



export function getSystemInfo() {
  return new Promise((resolve , reject)=>{        
    startSystemInfoUpdates()
      .then( (sysInfo) => {
      const resolv = sysInfo.cont>=1;
      if(resolv) {
        console.log('resolvido, F getSystem exec', sysInfo.cont)
        resolve(sysInfo)}
      })
      .catch((erro)=> {
        console.error('error: objeto vazio systemmIfo ou indefi', erro)
        reject(erro)
      });
  });
 
}

/*function getSystemInfo()  {
  getSystem()
    .then((systemInfo) => {
      console.log('foi: F getSystemInfo exec', systemInfo.time);
    })
    .catch((error) => {
      console.error('Error getSystem NÃO EXECUTADO, FALA:', error);
    })
  return systemInfo 
}*/



export default systemInfo;