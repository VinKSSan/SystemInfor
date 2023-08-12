import {parentPort} from 'worker_threads';
import { startAll } from './startserver.mjs';
startAll()
  .then((sysInf) => {
    if(sysInf !== undefined) {
      // Envia uma mensagem intermediária para a instância principal
      parentPort.postMessage(sysInf);
    }
    parentPort.postMessage(sysInf);
  }).catch((error) => {
    console.error('Erro no worker:', error);
  });
