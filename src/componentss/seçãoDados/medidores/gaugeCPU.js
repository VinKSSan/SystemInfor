import React, { useEffect, useRef } from "react";
import * as d3 from 'd3';

const GaugeCPU = ({minValue , maxValue , currentValue}) =>{
    const gaugeRef = useRef(null);

    useEffect(()=>{
//configurações do medidor 
        const gaugeConfig = {
            size:300, //tamanho
            arcWidth:20, //largura do arco
            arcColor: 'rgba(0 0 0 0.8)', // cor do arco
            pointerColor: 'green', // cor do ponteiro

        };

        // svg dentro da div do medidor
        const svg = d3.select(gaugeRef.current);
        const m = Math.PI/2
        //angulo correspondente ao valor atual
        const angle = d3
        .scaleLinear()
        .domain([minValue,maxValue])
        .range([-m , m]);

           
//função para desenhar o Gauge
        function drawGauge() {

        // caminho para o arco do medidor
            const arcCur = d3
                .arc()
                .innerRadius(gaugeConfig.size/2 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(-Math.PI/2)
                .endAngle(angle(currentValue));

            const arcAlpha = d3
                .arc()
                .innerRadius(gaugeConfig.size/2 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/2)
                .startAngle(-m)
                .endAngle(angle(maxValue));

            const arcAlpha2 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/2)
                .startAngle(-m)
                .endAngle(angle(maxValue));
            const arcAlpha3 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(-m)
                .endAngle(angle(maxValue));

            

            const arc1 = d3
                .arc()
                .innerRadius(gaugeConfig.size/2 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/2)
                .startAngle(-m+0.03)
                .endAngle((-m/2)-0.015);
            
            const arc2 = d3
                .arc()
                .innerRadius(gaugeConfig.size/2 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/2)
                .startAngle((-m/2)+0.015)
                .endAngle(-0.015);

            const arc3 = d3
                .arc()
                .innerRadius(gaugeConfig.size/2 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/2)
                .startAngle(0.015)
                .endAngle(((m/2)-0.015));

            const arc4 = d3
                .arc()
                .innerRadius(gaugeConfig.size/2 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/2)
                .startAngle((m/2)+0.015)
                .endAngle((m-0.03));
            
                const arc21 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(-m)
                .endAngle((-m+(m/4)-0.015));
            
            const arc22 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(-m+(m/4)+0.015)
                .endAngle(-(m/4)-0.015);

            const arc23 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(-(m/4)+0.015)
                .endAngle(((m)-(m/2)-(m/4)-0.015));

            const arc24 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(((m)-(m/2)-(m/4)+0.015))
                .endAngle((m-(m/4)-0.015));

            const arc25 = d3
                .arc()
                .innerRadius(gaugeConfig.size/3 - gaugeConfig.arcWidth)
                .outerRadius(gaugeConfig.size/3)
                .startAngle(m-(m/4)+0.015)
                .endAngle(m);
            
            svg.selectAll('*').remove();

        // adicionar o arco ao svg
            svg
            .append('path')
            .attr('d', arcAlpha2)
            .attr('transform', `translate(${gaugeConfig.size/2}, ${gaugeConfig.size/2})`)
            .style('fill', "rgba(0,0,0,0.6)");
            svg
            .append('path')
            .attr('d', arcAlpha3)
            .attr('transform', `translate(${gaugeConfig.size/2}, ${gaugeConfig.size/2})`)
            .style('fill', "rgba(0,0,0,0.8)");
            svg
                .append('path')
                .attr('d', arcCur)
                .attr('transform', `translate(${gaugeConfig.size/2} , ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0 , 255 ,25, 0.5)");
            svg
                .append('path')
                .attr('d', arcAlpha)
                .attr('transform', `translate(${gaugeConfig.size/2}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,0,0,0.8)");
            
            svg
                .append('path')
                .attr('d', arc1)
                .attr('transform', `translate(${(gaugeConfig.size/2)}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.7)");
                
            svg
                .append('path')
                .attr('d', arc2)
                .attr('transform', `translate(${gaugeConfig.size/2}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.7)");
            svg
                .append('path')
                .attr('d', arc3)
                .attr('transform', `translate(${gaugeConfig.size/2}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.7)");
            svg
                .append('path')
                .attr('d', arc4)
                .attr('transform', `translate(${gaugeConfig.size/2}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.7)");

                
            svg
                .append('path')
                .attr('d', arc21)
                .attr('transform', `translate(${(gaugeConfig.size/2)}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.5)");

            svg
                .append('path')
                .attr('d', arc22)
                .attr('transform', `translate(${(gaugeConfig.size/2)}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.5)");

            svg
                .append('path')
                .attr('d', arc23)
                .attr('transform', `translate(${(gaugeConfig.size/2)}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.5)");

            svg
                .append('path')
                .attr('d', arc24)
                .attr('transform', `translate(${(gaugeConfig.size/2)}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.5)");

            svg
                .append('path')
                .attr('d', arc25)
                .attr('transform', `translate(${(gaugeConfig.size/2)}, ${gaugeConfig.size/2})`)
                .style('fill', "rgba(0,10,100,0.5)");
                

        //adicionar o circulo do ponteriro do medidor
            svg
            .append('circle')
            .attr('cx', gaugeConfig.size/2)
            .attr('cy', gaugeConfig.size/2)
            .attr('r', gaugeConfig.arcWidth/2)
            .style('fill', "rgba(0 , 255 ,25, 0.8)");


            const pointerWidth =6; // Largura do ponteiro
            const pointerHeight = 100; // Altura do ponteiro
            const trianglePoints = `-${pointerWidth/2},0  0,-${pointerHeight} ${pointerWidth/2},0`;
                  

            const ponteiro_tiangular = svg
            .append("polygon")
            .attr('class','pointerTri')
            .attr("points", `${trianglePoints}`)
            .style('stroke' , 'rgba(0 , 255 ,25, 0.8)')
            .style('stroke-width', '0.5px')
            .attr("fill", "rgba(0 , 255 ,25, 0.1)");         

            function updateRotation() {
                ponteiro_tiangular
                .attr('transform', `translate(${gaugeConfig.size / 2},${gaugeConfig.size / 2}) rotate(${angle(currentValue) * (180 / Math.PI)}, 0, 0)`);
            }

            updateRotation();

           
        }
        drawGauge();
       

        return ()=> {
            d3.select(gaugeRef.current).selectAll('*').remove();
        }
    }, [minValue, maxValue, currentValue])

    return(
        <div className="DivGauge" width={420} style={{display: 'flex', alignItems: 'center' , justifyContent: 'center', flexDirection:'column'}}>
            <svg ref={gaugeRef} width={320} height={"20rem"}></svg>
            <div className="info">
                <p>valor minimo : {minValue}Gh</p>
                <p>valor atual : {currentValue}Gh</p>
                <p> valor maximo :{maxValue}Gh</p>
            </div>    
        </div>
    )
}

export default GaugeCPU;

