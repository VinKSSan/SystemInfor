import React from "react"

import CPU from "../../../public/assets/CPU.png"
import RAM from "../../../public/assets/meroriaRam.png"
import RAMs from "../../../public/assets/RAMs.webp"
import CPUs from "../../../public/assets/CPUs.jpg"
import grafaIma from "../../../public/assets/grafaMon.png"

import styles from "./sty.module.css" 

import { SecHer } from "./secHeStyles"
import Image from "next/image"

const SecHero = () =>{
    return(
        <SecHer className="SE">
            <div className={`${styles.infor}` }>
                <div className="infor">
                    <h1>Análise Técnica de Sistemas Computacionais: Ênfase no Monitoramento de Recursos</h1>
                    <h2>Cada dado</h2>
                    <p>A análise técnica de sistemas computacionais é uma disciplina essencial para garantir a eficiência, confiabilidade e desempenho contínuo de sistemas de computadores em ambientes diversos. À medida que a complexidade dos sistemas aumenta, o monitoramento adequado dos recursos torna-se cada vez mais crucial. Neste artigo, exploraremos a importância do monitoramento de recursos em sistemas computacionais, os principais desafios enfrentados e as melhores práticas para garantir a otimização e disponibilidade do sistema.</p>
                    <h2>A Importância do Monitoramento de Recursos</h2>
                    <p>O monitoramento de recursos é o processo de coleta, análise e interpretação de métricas relacionadas ao uso de recursos em um sistema computacional. Isso inclui recursos como CPU, memória, armazenamento, rede e outros componentes essenciais. O monitoramento contínuo e preciso desses recursos oferece diversos benefícios:</p>
                    <div className="divBen">
                        <div className="beneficios">
                            <div className="imaBene">
                                <Image
                                    className="imaBene"
                                    src={grafaIma} width={1000} height={400}
                                />
                            </div>
                            <div className="infoBene">
                                <h3>Otimização do Desempenho:</h3>
                                <p>Ao identificar gargalos e uso inadequado de recursos, os administradores podem tomar medidas para otimizar o desempenho geral do sistema, garantindo que a capacidade seja adequadamente dimensionada para as demandas do ambiente.</p>
                                <h3>Previsão e Planejamento:</h3>
                                <p>O monitoramento contínuo ajuda a prever tendências de uso de recursos ao longo do tempo, permitindo um planejamento mais preciso para a expansão ou atualização do sistema conforme necessário.</p>
                                <h3>Detecção e Resolução Proativa de Problemas: </h3>
                                <p> Ao identificar padrões anômalos de uso de recursos, é possível detectar problemas em estágios iniciais e tomar ações corretivas antes que eles se tornem crises que afetem a disponibilidade do sistema.</p>
                            </div>                        
                        </div>
                        <div  className="beneficios ben2">
                            <div className="infoBene In2">
                                <h3>Economia de Custos:</h3>
                                <p>O monitoramento adequado pode evitar gastos desnecessários com upgrades de hardware ou serviços em nuvem superdimensionados, garantindo o uso eficiente dos recursos disponíveis.</p>
                                <h3>Cumprimento de Acordos de Nível de Serviço (SLAs):</h3>
                                <p>O monitoramento de recursos é fundamental para garantir que o sistema atenda aos SLAs estabelecidos para disponibilidade, tempo de resposta e capacidade.</p>                    
                            </div>
                            <div className="imaBene Im2">
                                <Image
                                    className="imaBene"
                                    src={grafaIma} width={1000} height={400}
                                />
                            </div>  
                        </div>
                    </div>
                    <p>Os Nossos compudadores estão repletos de dados que nos dizem muito sobre a sua saude de maquina e seu desempenho operacional</p>
                    <p>Os pricipais componetes computacionais que podemos monitorar analiticamente, de forma a obter alguma noção a cerca do desempenho de nossas maquinas, são; a Memoria de Acesso Aleatório(RAM) e a Unidade Central de Processamentos(CPU)</p>
                </div>
            </div>
            <div className="cardss">
                <div className="cards">
                    <div className={`card ${styles.RAM}`}>
                        <div className="divInfe" >
                            <div className="Imagem">
                                <Image width={200} height={180} src={RAM}/>
                            </div>
                            <div className="text">
                                <h3>A Memoria de Acesso Aleatório, armazena as todas as atividades em execução</h3>
                                <p>todas as tarefas em execução são armazenadas na memória RAM. os pricipais dados que podemos obter dos modulos de memória RAM são, latência, frequência e quantidade.</p>
                                <p> a latêcia , a frequência, a capacidade</p>
                            </div>
                        </div>
                    </div>
                    <div className={`card ${styles.CPU}`} >
                        <div className="divInfe">
                            <div>
                                <h3>A Memoria de Acesso Aleatório, armazena as todas as atividades em execução</h3>
                                <p>todas as tarefas em execução são armazenadas na memória RAM. os pricipais dados que podemos obter dos modulos de memória RAM são, latência, frequência e quantidade.</p>
                                <p> a latêcia , a frequência, a capacidade</p>
                            </div>
                            <div className="Imagem">
                                <Image width={200} height={180} src={CPU}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </SecHer>
    )
}

export default SecHero;