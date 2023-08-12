// components/BarMeter.js

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarMeterLong = ({ value, max }) => {
  const svgRef = useRef();

  const width = 300;
  const height = 50;

  useEffect(() => {

    

    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear().domain([0, max]).range([0, width]);

    let xAxis = d3.axisBottom(xScale);

    svg.selectAll("*").remove();

    svg
      .append("rect")
      .attr("width", xScale(max))
      .attr("height", height)
      .attr("fill", "rgba(100 , 250, 250, 0.5)");

    svg
      .append("rect")
      .attr("class" , "curVal")
      .attr("width", xScale(value))
      .attr("height", height)
      .attr("fill", "rgba(10 , 200 , 250 , 0.8)");

    svg
      .append("polygon")
      .attr("points", "0 10, 5 0, 10 10")
      .attr("fill", "black")
      .attr("transform", `translate(${xScale(value)-5}, 42)`);
    
    svg  
      .append("g")
      .attr("transform", `translate(0 , ${height - 9})`)
      .style('color', 'cyan')
      .call(xAxis)

      

  }, [value, max]);

  return (
    <div className="LBDiv" width={"100%"}>
      <svg ref={svgRef} width={"100%"} height={height} style={{ border: "1px solid cyan", borderRadius:'8px' }}>
      { }
      </svg>
      <p className="Lpag">Uso : {(value*100)/max}%</p>
      <p className="Lpag">Livre : {100-(value*100)/max}%</p>
    </div>
  );
};

export default BarMeterLong;


