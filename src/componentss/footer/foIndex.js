import Image from "next/image"


const techIma = require('../../../public/assets/tech.png')
const Log = require('../../../public/assets/outerLog2.png')

const faceIma= require('../../../public/assets/sotialIcons/iconFacebook60.svg')
const twiIma= require('../../../public/assets/sotialIcons/iconTwitter60.svg')
const likeIma= require('../../../public/assets/sotialIcons/iconLinkedin60.svg')
const GitIma= require('../../../public/assets/sotialIcons/iconGithub60.svg')
const YouIma=  require('../../../public/assets/sotialIcons/iconYoutube60.svg')

import FileDownloadButton from "./downJson"

const fileUrl = '/dataDashGrafa/dash.zip'; // Substitua pelo URL do seu arquivo
const fileName = 'dash.zip'; 

import { FolStyle } from "./fotStyle"
import { useEffect, useState } from "react"

const Folte = ({data})=>{
// teste

  const [opinion, setOpinion] = useState('');
  const [userEmail , setUserEmail] = useState('');
  const [userName , setUserName] = useState('');
  

  const [label , setLabel]= useState('preencha os campos ');

  const handleTextareaChange = (e) => {
    setOpinion(e.target.value);
  };
  


  useEffect(()=>{
    console.log(opinion, userEmail)
    console.log(fileUrl)
  },[opinion, userEmail, data])

  const [escrevaOn, setEscrevaOn]=useState(false)
  const [escreva, setEscreva] = useState('')

  const nameRegex  = /^[A-Za-z\s]+$/;
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const enviado = [
    (
      <div className="mensageEnvioS" key={0}>
        <p>enviado</p>
        <button className="fechar" onClick={()=>{setEscrevaOn(false)}}>fechar</button>
      </div>),
    (
      <div className="mensageEnvioN" key={1}>
        <p>não enviado</p>
        <button className="fechar" onClick={()=>{setEscrevaOn(false)}}>fechar</button>
      </div>
    )
  ]
  
  useEffect(()=>{
       
    const handleSubmit = async (e) => {
      e.preventDefault(); // Evitar o comportamento padrão de submit do formulário  
      // Implementação da lógica para enviar o formulário    
      if (opinion.trim() !== '' && userEmail.trim() !== '' && userName!== '') {
        if(emailRegex.test(userEmail)){
          if(nameRegex.test(userName)){
            setLabel('mensagem enviada')
            const data = { opinion, userEmail, userName };
      
            try {
              const response = await fetch('/api/sendOpinion', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                timeout: 15000,
              });
              
              if (response.status === 200) { // Verifique o status da resposta para determinar se a requisição foi bem-sucedida
                console.log('Opinião enviada com sucesso!');
                setEscreva(enviado[0]);
              } else {
                setEscreva(enviado[1]);
                console.log(response.status)
                console.error('Erro ao enviar a opinião.');
              }
            } catch (error) {
              setEscreva(enviado[1]);
              console.error('Erro na requisição:', error);
            }
          }else{
            setLabel('nome invalido')
          }
        }else{
          setLabel('email Inválido')
        }
      } else {
        console.log('o Campo de opinião, email ou nome estão vazio.');
        setLabel('Campo de opinião, email ou nome vazio.'); 
      }
    };
    //possiveis elementos de escrita
    let escr = [
          (
            <div key={0} className="escrever">
                <div className="elemento">
                    <Image src={techIma}  height={120} width={150} alt="logo"></Image>
                    <h2 className="Hh">Analise Tecnica de Systemas Computacionais<h2 className="Hh2">Analise Tecnica de Systemas Computacionais</h2></h2>
                </div>
                <div className="enviar">
                    <div>
                        <input 
                        type="Email" 
                        placeholder="Seu Email..."
                        onChange={(e) => {setUserEmail(e.target.value)}}
                        />
                        <button onClick={()=>{setUserName('');setEscrevaOn(true)}}>escrever</button>                     
                    </div>
                    <h4>inscreva-nos sua opinião sobre esta pagina</h4>
                </div>
            </div>
        ),
        (
            <div className="formEsc" key={1}>
              <h2 className="labH">{label}</h2>
                <form className="formu" onSubmit={handleSubmit}>
                    <label>
                        digite seu nome
                        <input className="camp"
                        onChange={(e) =>{setUserName(e.target.value)}}
                        type="name"
                        />
                    </label>
                    <label>
                        Sua opinião sobre o site
                        <textarea
                        className="camp"
                        spellCheck="false" 
                        onChange={handleTextareaChange}
                        rows={15}
                        cols={50}                     
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <button className="fechar" onClick={()=>{setEscrevaOn(false)}}>fechar</button>
            </div>
        )   
    ]
    setEscreva(escr[0])

      const lH = () => {
        return document.querySelector('.labH');
      };
        
  

      const labelH = lH();


    if(escrevaOn){
      setEscreva(escr[1])
      if(labelH && labelH instanceof HTMLElement){
        try {

          console.log('o escreva não é diferente do escr[1]')

          if(label==='mensagem enviada'){
            labelH.classList.add('Cgreen');
            labelH.classList.remove('Ccyan');
            labelH.classList.remove('Cred');
          }else if(label==='preencha os campos'|| label==='preencha os campos:'){
            labelH.classList.add('Ccyan')
            labelH.classList.remove('Cred')
            labelH.classList.remove('Cgreen')
          } else{
            labelH.classList.add('Cred')
            labelH.classList.remove('Ccyan')
            labelH.classList.remove('Cgreen')
          }
        } catch (error) {
          console.error("erro no clN", error)
          // Lida com o caso em que ocorre um erro ao acessar o atributo
          // Isso pode ocorrer se o elemento não existir ou não for um HTMLElement válido
        }
      }else{console.log('o escreva.p é diferente do escr[1].p', labelH)}
    } else {
        setEscreva(escr[0])
        setLabel("preencha os campos: ")
    }
      

  }, [label, escrevaOn,  opinion , userEmail])

  useEffect(()=>{
    if(escrevaOn===false){
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              console.log("ativo")
            entry.target.querySelector('.elemento').classList.add('ativo');
            entry.target.querySelector('.Hh').classList.add('hativo')
            entry.target.querySelector('.enviar').classList.add('ativo')
            entry.target.querySelector('.LogSys').classList.add('ativo')
          } else if(escrevaOn===false) {
              console.log('desativo')
            entry.target.querySelector('.elemento').classList.remove('ativo');
            entry.target.querySelector('.Hh').classList.remove('hativo');
            entry.target.querySelector('.enviar').classList.remove('ativo');
            entry.target.querySelector('.LogSys').classList.remove('ativo');
          }
        });
      });
      const section = document.querySelector('.secao');
      observer.observe(section);
      // Clean up the observer when the component is unmounted
      return () => {
      observer.unobserve(section);
      };
    }

      let linkDown = document.getElementById("downloadLink")

      if(linkDown!==null){
        linkDown.addEventListener("click", function(event) {
          event.preventDefault();
          let link = document.createElement("a");
          link.href = "../../../public/dataDashGrafa/dash.zip";
          link.download = "dash.zip"; // Defina o nome do arquivo que será baixado
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      }
    },[escrevaOn])
  
//teste

 

    return(
        <FolStyle id='links' className="secao">
            {escreva}
            <div className="Links1">
                <div className="SysLog">
                    <h2 style={{zIndex:1}}>SystemInfor</h2>
                    <Image className="LogSys" src={Log} height={50} width={120} alt="logo"></Image>
                </div>
                <div className="socialIcons">
                    <a className="icona" href="#"><Image className="icon" src={faceIma} alt="icone do facebook"></Image></a>
                    <a className="icona" href="#"><Image className="icon" src={likeIma}   alt="icone Linkedin"></Image></a>
                    <a className="icona" href="#"><Image className="icon" src={twiIma}    alt="icone Twitter"></Image></a>
                    <a className="icona" href="#"><Image className="icon" src={GitIma}   alt="icone GitHub"></Image></a>
                    <a className="icona" href="#"><Image className="icon" src={YouIma}   alt="icone YouTube"></Image></a>
                </div>
            </div>
            <div className=" listaLink">
                <ul>
                    <h3>paginas oficiais</h3>
                    <li><a href="https://grafana.com/">site oficial grafana</a></li>
                    <li><a href="https://d3js.org/">site oficial lib D3.js</a></li>
                    <li><a href="https://systeminformation.io/">site oficial lib SystemInformation</a></li>
                </ul>
                <ul>
                    <h3>projeto System Inform</h3>
                    <li><a href="#">Projeção final</a></li>
                    <li><a href="#" >Monitoramento de Recursos</a></li>
                    <li><a href="#" >Repositório GitHub</a></li>
                </ul>
                <ul>
                    <h3>desenvolvedor</h3>
                    <li><a href="https://www.linkedin.com/in/vinicius-kalwam-s-santos-88aa27218/">perfil Linkedin</a></li>
                    <li><a href="#">canal YouTube</a></li>
                    <li><a href="https://github.com/VinKSSan" >perfil GitHub</a></li>
                    <li><a href="#" >Vercel_Page VinSan.ed</a></li>
                </ul>
                <ul>
                    <h3>Links Uteis</h3>
                    <li><a><FileDownloadButton fileUrl={fileUrl} fileName={fileName} /></a></li> 
                    <li><a href={data.eP}>Suas informações, JSON</a></li>
                    <li><a href="https://grafana.com/grafana/download">Baixar grafana</a></li>
                    <li><a href="https://grafana.com/grafana/plugins/marcusolsson-json-datasource/">Grafana Plugin JSON API</a></li>
                </ul>
            </div>
            <div className="fim">
                <div className="polic">
                    <div>
                        <span><h4>System Inform</h4></span>
                    </div>
                    <div>
                        <h4>Politicas de privacidade</h4>
                        <h4>Autoria reservada a VinSan.ed</h4>
                    </div>
                </div>
                <div className="Copy">
                    <h5>Copyright 2023 © VinSan.ed</h5>
                    <h6>VinSan.ed@pronton.me</h6>
                </div>
            </div>
        </FolStyle>
    )
}

export default Folte