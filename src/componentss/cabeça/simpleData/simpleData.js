import { useEffect, useState} from "react";
import { Ddiv } from "./styleSim";

const SimpleData = ({data})=> {
  const [isMouseOver , setIsMouseOver] = useState(false);
  const [isFix , setIsFix] = useState(false)

  const PLim = 300

  const handlerMouserOver = () =>{
    setIsMouseOver(true);
  }
  const handlerMouserOut= ()=>{
    setIsMouseOver(false)
  }

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > PLim){
        setIsFix(true)
      }else{
        setIsFix(false)
      }
    }
    window.addEventListener('scroll' , handleScroll)
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
  })
  //SD
  const ssd = data.capacidadeArmazenamento.size

  //CPU
  let arcCPU = data.CpuArquiterura
  let fabCPU= data.CpuFab
  let AVG   = data.LoadAVG 
  let velRealCPU = data.velRealCPU
  let AVGc = data.curLoad
//RAM E SWAP
  let swapTotal = data.swapTotal


  let velActiveRam = data.velActiveRam
  let RAM = data.velocidadeMemoriaRAM  
//GERAL
  let placaFab = data.syste.manufacturer
  let placaMod = data.syste.model
  let atvidade = data.allNunber

        

  return(
    <Ddiv
      className={isFix ? 'fixed' : ''}
    >
        <div  
          onMouseOut={handlerMouserOut}
          onMouseOver={handlerMouserOver}
          className={`scrolling ${isMouseOver?'paused':''}`}  
        >
          <div className="topic" >
            <h4>fabricante placa mãe:{placaFab} </h4>
          </div>
          <div className="topic" >
            <h4>modelo placa mãe:{placaMod} </h4>
          </div>
          <div className="topic">
            <h4>numero de tarefas:{atvidade}</h4>
          </div>
          <div className="topic">
            <h4>Velocidade RAM:{RAM/1073741824}b</h4>
          </div>
          <div className="topic">
            <h4>RAM em atvidade:{velActiveRam/1073741824}b</h4>
          </div>
          <div className="topic">
            <h4>Swap total:{swapTotal/1073741824 }b</h4>
          </div>
          <div className="topic">
            <h4>carga de trabalho CPU:{AVG}</h4>
          </div>
          <div className="topic">
            <h4>capacidade de Armazenamento:{ssd/1073741824}Gb</h4>
          </div>
          <div className="topic">
            <h4>Architetura CPU:{arcCPU}</h4>
          </div>
          <div className="topic">
            <h4>Fabricante CPU:{fabCPU}</h4>
          </div>
          <div className="topic">
            <h4>carga de trabalho CPU:{AVG}</h4>
          </div>
          <div className="topic">
            <h4>Velocidade CPU:{velRealCPU}Ghz</h4>
          </div>
          <div className="topic">
            <h4>carga de trabalho:{AVGc}</h4>
          </div> 
        </div>

        <style>{`

          .scrolling {
            border:solid 2px #000;
            animation: scroll 60s linear infinite;
          }
          .paused{
            cursor:pointer;
            animation-play-state:paused;
          }
          .fixed {
            position: fixed;
            top:0;
            background-color:rgba(0 , 0 , 0 , 0.7);
          }

          
          @keyframes scroll{
          0%{
            transform: translateX(0);
          }
          100% {
            transform:translateX(-300%)
          }  

        `}</style>
    </Ddiv>
  )
}


export default SimpleData;