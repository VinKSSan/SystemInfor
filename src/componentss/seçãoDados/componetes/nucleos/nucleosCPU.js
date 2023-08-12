import React from 'react';
import BarMeter from '../../medidores/BarHorizon';
import { Nucleos } from './nucleosCpuStyles';

const ProcessadorDivs = ({data}) => {
    
    let maxAVG = 100
    let AVGperCore = data.proftPerCore
    const nucleos =  data.CpuNucleos
    console.log(nucleos)

    const divs = [];
    let curAVGpC = []
    let i
    for(i = 0; i < nucleos; i++) {
        curAVGpC.push(AVGperCore[i].load)
        divs.push(
            <div className='item' key={i}>
                <h4>Carga de trabalho do nucleo {i}</h4>
                <div>
                    <BarMeter value={curAVGpC[i]} max={maxAVG}/>
                </div>
            </div>
        );
  }

    
  

  return(
  <Nucleos>{divs}</Nucleos>
  )
};

export default ProcessadorDivs;
