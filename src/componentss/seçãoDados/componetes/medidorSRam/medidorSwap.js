
import BarMeterLong from "../../medidores/BarHorizonLong"


const MediSwap = ({dados}) =>{

    const totalSwap = (dados.swapTotal)/1073741824
    const usedSwap = (dados.swapUsed)/1073741824

    return(
        <div className='DivSwap'>
            <h4>SWAP</h4>
            <div>
                <BarMeterLong value={usedSwap} max={totalSwap}/>
            </div>
            <p>Total: {totalSwap}</p>
            <p>Em uso: {usedSwap}</p>
        </div>
    )
  
}

export default MediSwap;