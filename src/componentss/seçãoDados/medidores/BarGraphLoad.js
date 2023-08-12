import { useRef, useEffect, useState} from 'react';
import * as d3 from 'd3';

//construção do grafico grafico de barras
const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);

  const triangulo1= useRef(null);
  const triangulo2= useRef(null);
  const circulo1 = useRef(null);

  const containerRef = useRef(null);
  const height = 100;

  const [posiEx, setPosiEx] = useState(0)

  const [nuRect, setNuRect] = useState(1); 

  const barWidth = 20;
   
  const [nPos , setNPos] = useState(null)
  
  const margin = { top: 20, right: 10, bottom: 15, left: 5 };


  useEffect(()=>{
//dados recolhido e exibidos no grafico
    let dados = data.listLoad.map((value, index) => ({
      periodo: index,
      quantidade: value,
    }));

    const svg = d3.select(chartRef.current);
    const svgXAxis = d3.select(xAxisRef.current)
    const svgYAxis = d3.select(yAxisRef.current)
   //criação do grafico 
    const createBarChart = () => {
      let xDominio = dados.map((d) => d.periodo);
//das escalas
      let XSc = d3.scaleBand().domain(xDominio).range([0,  dados.length*39]).padding(0.2) 

    
      let YSc =d3.scaleLinear().domain([0, d3.max(dados, (d) => d.quantidade)]).range([100, 0])
        
//dos eixos
      const xAxis = d3.axisBottom(XSc);
      const yAxis = d3.axisLeft(YSc).tickFormat(d3.format(".2f")).tickPadding(2);
    
 //construção das barras, do svg central     
      const g = svg
      .append('g')
      .attr('class', 'svgContet')
      .attr('transform', `translate(${margin.left },${margin.top-20})`)
      .style('background-color','black');

      let bars;
      if(nPos!==null){
        bars = g.selectAll('.bar')
        .data(dados)
        .join('rect')
        .attr('class', 'bar')
        .attr('y', (d) => YSc(d.quantidade))
        .attr('width', barWidth)
        .attr('height', (d) => (100-YSc(d.quantidade)))
        .style('stroke' , 'lime')
        .style('stroke-width', '0.5px')
        .attr('fill', "rgba(0 , 25 ,20 ,0.7)");
      }

      if(nPos===null) {
        bars =  g.selectAll('.bar')
        .data(dados)
        .join('rect')
        .attr('class', 'bar')
        .attr('x', (d)=>XSc(d.periodo))
        .attr('y', (d) => YSc(d.quantidade))
        .attr('width', barWidth)
        .attr('height', (d) => (100-YSc(d.quantidade)))
        .style('stroke' , ' lime')
        .style('stroke-width', '0.5px')
        .attr('fill', "rgba(0 , 25 ,20 ,0.7)");
      }
      
      const barsArray = Array.from(bars.nodes());
       
      const posição = barsArray.map((element) => {
        const d = d3.select(element).datum();
        return XSc(d.periodo)
      });
      let newPos = (d, i) => {return(posição[i]-39*(nuRect-(27+posiEx)))}


      console.log(posição, height)
      
//dos eixos e dos svg's periféricos
    const gYAxis =  svgYAxis
      .append('g')
      .attr('class', 'yAxis')
      .attr('transform', `translate(${margin.left+25},${margin.top -15})`)
      .call(yAxis);

      //styles do eixo Y
      gYAxis.selectAll('.domain')
      .attr('stroke', 'lime');

      gYAxis.selectAll('.tick line')
      .attr('stroke', 'lime');

      gYAxis
      .selectAll('text')
      .attr('fill', 'lime')
      .style("font-size", '9.5px')
    

    const gXAxis = svgXAxis
            .append('g')
            .attr('class', 'xAxis')
            .call(xAxis);

//styles do eixo X
            gXAxis.selectAll('.domain')
            .attr('stroke', 'lime');
      
            gXAxis.selectAll('.tick line')
            .attr('stroke', 'lime');
      
            gXAxis
            .selectAll('text')
            .attr('fill', 'lime')

            //controle remoto triangulo e circulo
    const tri1 = d3.select(triangulo1.current)
      .append("polygon")
      .attr('class', 'tri1');
    
    tri1
      .attr("points", "1 9, 5 1, 9 9")
      .attr("fill", "black")
      .style('stroke' , ' lime')
      .style('stroke-width', '0.5px');

    const tri2 =  d3.select(triangulo2.current)
      .append("polygon")
      .attr('class', 'tri2');

    tri2
      .attr("points", "1 9, 5 1, 9 9")
      .attr("fill", "black")
      .style('stroke' , ' lime')
      .style('stroke-width', '0.5px');

    const cir = d3.select(circulo1.current)
      .append('circle')
      .attr('class', 'cir');

    cir
      .attr('cx', 4)
      .attr('cy', 4)
      .attr('r', 4)
      .attr('fill', "rgba(0 , 255 ,2, 0.2)")
      .style('stroke' , 'cyan')
      .style('stroke-width', '0.5px');

    //controle de renderização dos elementos SVG

      let nuAxisX = svgXAxis.selectAll('.xAxis').size()
      let nuAxisY = svgYAxis.selectAll('.yAxis').size()
      
      let nuContRect = svg.selectAll('.svgContet').size()
       
      let nuTri1 = tri1.selectAll('.tri1').size()
      let nuTri2 = tri2.selectAll('.tri2').size()
      let nuCir = cir.selectAll('.cir').size()

      const removOuterSVG = () => {
        if(nuAxisY>1){
          svgYAxis
          .selectAll('.yAxis').filter((d,i)=> i===0).remove();

        }
        if(nuAxisX>1){
          svgXAxis
          .selectAll('.xAxis').filter((d,i)=> i===0).remove();
          console.log('nuAxis: ', nuAxisX)
        }
        if(nuContRect>1){
          svg.selectAll('.svgContet').filter((d,i)=> i===0).remove();
        }
        if(nuTri1>1){tri1.selectAll('.tri1').filter((d,i)=> i===0).remove();}
        if(nuTri2>1){tri2.selectAll('.tri2').filter((d,i)=> i===0).remove();}
        if(nuCir>1){cir.selectAll('.cir').filter((d,i)=> i===0).remove(); console.log(nuCir)}
      } 

      

//controle de movimento de translação horizontal do eixo X e das barras
      const alterarWid = () => {
        if (nuRect < 28) {;
          setNuRect(g.selectAll('.bar').size());
         
          removOuterSVG() 

        } else {
          removOuterSVG()
          setNuRect(g.selectAll('.bar').size());
          console.log('aaa', nuRect)

          g.selectAll('.bar')
          .data(dados)
          .transition()
          .duration(10)
          .attr('x', (d,i)=>newPos(d,i))
        

          svgXAxis
          .selectAll('.xAxis')
          .transition()
          .duration(10)
          .attr('transform' , (d,i)=>`translate(${-(nuRect-(27+posiEx))*(39)+5} , 1)` )
          

          setNPos(newPos);
          console.log("1 rect retirado")
        }
      }; 
      alterarWid()
    }

    createBarChart();

  }, [data , posiEx])

  return(
    <div 
      className='divBarG' 
      ref={containerRef} 
      style={{
        display: 'flex',
        alignItems:'center',
        backgroundColor: "rgba(0 , 0 ,0 ,0.5)", 
        border: "solid 1px rgba(0 , 255 ,25, 0.8)",
        position:'relative', bottom:0, left:0,
        margin:'0 auto',
        padding:'2px', 
        width: '100%',
        height: '150px',
         
        }} 
 //     onScroll={handleScroll}
    >
      
      <div
         style={{
          display: 'flex',
          alignItems:'center',
          backgroundColor: "rgba(0 , 0 ,0 ,0.5)", 
          border: "solid 2px rgba(0 , 255 ,25, 0.5)",
          borderRadius: "5px",
          margin:'0 auto', 
          width: '100%',
         
          height:'145px',
          }} 
      >
        <div style={{ height:`102%` ,backgroundColor:" rgba(0 , 255 ,25, 0.1)",border: "solid 1px rgba(0 , 255 ,25, 0.5)", borderRadius:"5px", padding:'2px'}}>
          <svg style={{width:`31px`, marginTop:0,   height:'100%'}}  ref={yAxisRef}></svg>
          <div style={{display:'flex', transform:"translate(0px, -25px)"}}>
          <button style={{
            backgroundColor:"rgba(0 , 0 , 0, 0.4)", 
            border:'solid 0.5px lime',
            marginRight:"0.1rem"
            }} onClick={()=>{setPosiEx(posiEx+1)}}>
              <svg  style={{
                width:"1.5rem",
                height:"1rem",
                transformOrigin: "center",
                transform: `rotate(-90deg) translate(5px, 0px)` 
                }} ref={triangulo2}></svg>
          </button>
          <button style={{
            backgroundColor:"rgba(0 , 0 , 0, 0.4)",
            border:'solid 0.5px lime',
            padding:"0.2rem",
            width:"1.5rem",
            height:"1.5rem"
            }}
            onClick={()=>{setPosiEx(0)}}>
              <svg
              style={{
                width:"1.5rem",
                height:"1.5rem",
                }} 
              ref={circulo1}></svg></button>
          <button style={{
            backgroundColor:"rgba(0 , 0 , 0, 0.4)",
            border:'solid 0.5px lime',
            marginLeft:"0.1rem"
            }} 
            onClick={()=>{setPosiEx(posiEx-1)}}>
              <svg
              style={{
                width:"1.5rem",
                height:"1rem",
                transformOrigin: "center",
                transform: `rotate(90deg)`
                }}  
              ref={triangulo1}></svg></button>
          </div>
            
        </div>
        <div style={{width:`100%`}}> 
          <svg style={{padding:"5px", marginLeft:1.5, backgroundColor:'rgba(0 , 255 ,200 ,0.2)', border: "solid 2px rgba(0 , 255 ,25, 0.8)", borderRadius:'8px' ,  height:`115px`, width:`100%`,}} ref={chartRef}> </svg>
          <div  style={{height:'25px', padding:"2px", zIndex:3, width:"100%", border: 'solid 1px  rgba(0 , 255 ,25, 0.5)' , backgroundColor:" rgba(0 , 255 ,25, 0.1)", borderRadius:"2px"}}> 
            <svg   style={{ height:'20px', zIndex:5, width:"100%",  marginLeft: '1px'}}  ref={xAxisRef} ></svg>
          </div>
        </div> 
      </div>
    </div>
  );
};
  
  export default BarChart;
  
