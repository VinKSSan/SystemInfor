import si from 'systeminformation';
import {updateSystemInfoJSON} from "./server"

let systemInfo = {};

export const getSystemInfo = async () => {
  await startSystemInfoUpdates();
  return systemInfo;
};

export function startSystemInfoUpdates(interval=5000) {
  setInterval(async () => {
    try {
      const cpuData = await si.cpu();
      const velRealCPU = await si.cpuCurrentSpeed();
      const memData = await si.mem();
      const diskData = await si.diskLayout();

      systemInfo = {
        velocidadeMemoriaRAM: memData.total,
        capacidadeArmazenamento: diskData[0].size,
        velocidadeProcessador: cpuData.speed,
        coresProcessador: cpuData.cores,
        velRealCPU: velRealCPU.avg,
      }; 
      await updateSystemInfoJSON(systemInfo);
      } catch(error) {
         console.error('Error while updating system info:', error);
      }  
  }, interval);
}
