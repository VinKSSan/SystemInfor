import {useState } from "react"


import { DataSty , SDat } from "./SDataStyles"
import  styles  from "./style.module.css"


import GaugeCPU from "./medidores/gaugeCPU"
import BarChart from "./medidores/BarGraphLoad"

import ProcessadorDivs from "./componetes/nucleos/nucleosCPU"
import TabTaf from "./componetes/tabela_tarefas/tabTaref"
import MediRam from "./componetes/medidorSRam/medidorRam"
import MediSwap from "./componetes/medidorSRam/medidorSwap"


const Sdata = ({data}) =>{

    
    

    const VCpu = data.CpuVel 

    let [maxValue , setMaxValue] = useState(VCpu + 0.2)
    let [minValue , setMinValue] = useState(VCpu)

    let listVelCpu = data.listSpeed

    listVelCpu.forEach(element => {
        if(element>maxValue){
            setMaxValue(element)
        }

        if(element<minValue){
            setMinValue(element)
        }
    });
    

    

    let currentValue = data.velRealCPU

    let sys = data
    return(
        <SDat id="DataSec"  className={styles.secData}>  
            <div className="sec">
                <div className="divBarC"> 
                    <h1>Carga de trabalho da cpu</h1>
                    <BarChart data={sys}/>
                </div>
                <DataSty>
                    <div className="Cpu">
                        <div className="cpu">
                            <span><h1>Velocidade da CPU <h1>Velocidade da CPU</h1></h1></span>
                            <GaugeCPU  minValue={minValue} maxValue={maxValue} currentValue={currentValue}/>
                        </div>
                        <div className="Nucleos">
                            <h1>Carga de trabalho por Nucleo<h1>Carga de trabalho por Nucleo</h1></h1>
                            <ProcessadorDivs data={sys}/>
                        </div>
                    </div>
                    <div className="Task" >
                        <h1>Show de Tarefas</h1>
                        <TabTaf data={sys}></TabTaf>
                    </div>
                </DataSty>
                <div className="SwRa">           
                    <MediRam width="100%" height="20rem" dados={sys}/>              
                    <MediSwap  width="100%" height="20rem" dados={sys}/>
                </div>
                <div width="100%" height="10rem" style={{color:"lime", paddingTop:"2rem", paddingBottom:"5rem"}}>{data.upTime}</div>
            </div>       
        </SDat>
    )
}

export default Sdata;