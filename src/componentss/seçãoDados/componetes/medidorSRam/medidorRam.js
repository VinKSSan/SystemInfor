
import BarMeterLong from "../../medidores/BarHorizonLong"


const MediRam = ({dados}) =>{

    const totalRAM = (dados.RamTotal)/1073741824
    const usedRam = (dados.ActiveRam)/1073741824

    return(
        <div className='DivRam'>
            <h4>RAM</h4>
            <div width={"100%"}>
                <BarMeterLong width={"100%"} value={usedRam} max={totalRAM}/>
            </div>
            <p >Total: {totalRAM}</p>
            <p>Em uso: {usedRam}</p>
        </div>
    )
  
}

export default MediRam;