// components/BarMeter.js

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarMeter = ({ value, max }) => {
  const svgRef = useRef();
  const width = 130;
  const height = 15;
  useEffect(() => {

   

    const svg = d3.select(svgRef.current);

    const xScale = d3.scaleLinear().domain([0, max]).range([0, width]);

    let xAxis = d3.axisBottom(xScale);

    svg.selectAll("*").remove();

    svg
      .append("rect")
      .attr("width", xScale(max))
      .attr("height", height)
      .attr("fill", "rgba(100 , 250, 250, 0.6)");

    svg
      .append("rect")
      .attr("class" , "curVal")
      .attr("width", xScale(value))
      .attr("height", height)
      .attr("fill", "rgba(10 , 200 , 50 , 0.8)");

    svg
      .append("polygon")
      .attr("points", "0 10, 5 0, 10 10")
      .attr("fill", "black")
      .attr("transform", `translate(${xScale(value)-5}, 10)`);
    
    svg  
      .append("g")
      .attr("transform", `translate(0 , ${height - 5})`)
      .style('color', 'lime')
      .call(xAxis)

      

  }, [value, max]);

  return (
    <div className="BDiv">
      <p className="pa">0%</p>
      <svg ref={svgRef} width={width} height={height} style={{ border: "1px solid lime" }}>
      { }
      </svg>
      <p className="pa">100%</p>
      <style>{`
        .BDiv{
          display:flex;
        }
      `}</style>
    </div>
  );
};

export default BarMeter;


