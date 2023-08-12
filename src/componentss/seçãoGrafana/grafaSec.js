import React, { useEffect, useState } from "react";
import { GrafSecSty, grafaI } from "./grafaSecSty";
import Image from "next/image";

import vidBut from "../../../public/assets/vidButo.svg"

const GrafaSec = () =>{

    const [vid, setVid] = useState('')
    const [isPlay, setIsPlay] = useState('')

    console.log(grafaI)

    useEffect(()=>{
        let exibição = [
            (
                <div key={0} className="thumb">
                    <button
                        onClick={
                            ()=>{setIsPlay(true)}
                        }   
                    >
                        <Image width={60} height={60} src={vidBut}/>
                    </button>
                </div>
            ),
            (
                <div key={1} className="divVideo">
                    <video className="video" controls>
                        <source src="/vid/Instalando.mp4" type="video/mp4" />
                    </video>
                </div>
            )
        ]    
    
       
         
        
        if(isPlay){
            document.querySelector('.divVid').classList.add('ativo')
            setVid(exibição[1])
        } else {
            document.querySelector('.divVid').classList.remove('ativo')
            setVid(exibição[0])
        }
        console.log(vid)
    }, [isPlay]
    )
    
    return(
        <GrafSecSty id="grafana">
            <div className="grafaDiv">
                <div>
                    <h2>Grafana</h2>
                    <p>O Grafana é uma plataforma de visualização e monitoramento de dados,
                        o Grafana é uma ferramenta poderosa para visualização de dados e monitoramento, 
                        que permite criar painéis personalizados para acompanhar
                        e analisar informações de várias fontes diferentes. </p>
                    <p>Iremos usar o grafana para exibir as informações 
                        do seu systema em Paineis de analise técnica.
                        neste momento os dados do seu systema, como "velocidade de memória RAM", "Carga útil de processamento"
                        ...etc estão disponiveis em um arquivo JSON, para que você possa visualizar estes dados no grafana 
                        você precisa instala-lo e conectar o arquivo JSON em seu Grafana, assista ao video e visualize os dados 
                        do seu systema em Paineis intuitivos e personalizáveis</p>
                </div>
            </div>
            
            <div className="divVid">
                {vid}
                {
                 isPlay && (
                    <div className="btnFechar" >
                        <button onClick={
                            ()=>{setIsPlay(false)}
                        }
                        >fechar</button>
                    </div>)
                }
            </div>    
               
        </GrafSecSty>

    )
}


export default GrafaSec;