
const fun = () => {


    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"               // if we set the transform on the svg that holds the elements the x and y stand for where to go
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g transform="rotate(45 50 50)">
                <line x1="10" y1="10" x2="85" y2="10"             // if we are using a g we can set values between 0-100 for where within the image to tun
                    style={{stroke: '#006600'}}/>

                <rect x="10" y="20" height="50" width="75"
                    style={{stroke: '#006600', fill: '#006600'}}/>

                <text x="10" y="90" style={{stroke: '#660000', fill: '#660000'}}>
                    Text grouped with shapes</text>
                </g>

            </svg>
            <svg
                viewBox="-40 0 150 100"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
            >
                <g
                    fill="grey"
                    transform="rotate(-10 50 100)
                            translate(-36 45.5)
                            skewX(40)
                            scale(1 0.5)">
                    <path
                    id="heart"
                    d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
                </g>

                <use href="#heart" fill="none" stroke="red" />
            </svg>


        </div>
    )

}






    // // Draw bars
    // svg.selectAll(".bar")                                   // select all with the class of bar, currently there are no elements like that however, necessary to make sure we add the following attributes to the rectangles we create - uses to figure out how many elements to create
    //   .data(data)                                           // we use the data method to bind our data array to the 'empty' selection - the binding creats a place holder for each data element and is added to this section
    //   .enter()                                              // Identifies data points which don't yet have coresponding elements (the data we just bound) within the DOM - creates placeholers in the DOM for them
    //   .append("rect")                                       // Appends a rectangle for each placeholder element created with the .enter() method
    //   .attr("class", "bar")                                 // provides each of these rectangles with a class of bar
    //   .attr("x", marginLeft)                               // Sets where the rectangles start on the x axis - we want them to start at 0 in this case (if we were showing 2 months overlapping each other of sales we would want the x start of the greatest sales month to be the frequency of the least sales month ) - maybe?
    //   .attr("y", d => yScale(d[settings.y[0].key]))                     // determins the vertical position of the top of each bar. returns the y coordinate for each bar, based on its name which was specified in the yScale function
    //   .attr("width", d => xScale(d[settings.x[0].key]))              // Sets the width of each bar depending on the data received and computed per data entry with the xScale function above
    //   .attr("height", yScale.bandwidth())                   // determins the height of each bar - .bandwidth() is a method provided by scaleBand()  which returns the width of each band in the scale including the padding provided above
    //   .attr("fill", "teal");                                // sets the color of all of the rectangles with a class of bar



    'use client';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';
import { Paper } from '@mui/material';

const scale = (xScale) => {
  switch (xScale) {
    case 'time':
      return d3.scaleTime();
    case 'linear':
      return d3.scaleLinear();
    case 'log':
      return d3.scaleLog();
    default:
      return d3.scaleLinear();
  }
}

const Line = ({
  records,
  settings,
  size,
  marginTop = 30,
  marginRight = 20,
  marginBottom = 40,
  marginLeft = 60
}) => {
  const [lines, setLines] = useState([]);

  // Prepare data
  let data = records.map((record) => {
    const result = {};
    settings.x.forEach((xfield) => {
      const key = xfield.key;
      result[key] = record[xfield.key];
      if (xfield.key === "datetime") {
        result[key] = new Date(result[key]);
      }
    });
    settings.y.forEach((yfield) => {
      const key = yfield.key;
      result[key] = record[yfield.key];
      if (yfield.key === "datetime") {
        result[key] = new Date(result[key]);
      }
    });
    return result;
  });
  data.sort((a, b) => a.datetime - b.datetime);

  if(settings.x.length === 0 || settings.y.length === 0){
    return <div> Please select x and y fields </div>
  }


//   if (settings.x[0].key === "datetime") {
//     data = data.filter(record => (
//       new Date(record[settings.x[0].key]).getTime() >= settings.xMin && new Date(record[settings.x[0].key]).getTime() <= settings.xMax
//   ))
// }

  return(
    <LineReady data={data} settings={settings} width={size.width} height={size.height} marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft} />
  )
};

const LineReady = ({
  data,
  settings,
  width = 1200,
  height = 600,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 40
}) => {
  const gx = useRef();
  const gy = useRef();
  const divRef = useRef(null);
  const svgRef = useRef();


  // sets width height and screen size change on svg container
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
  }, [settings])


  // Scales
  const x = d3.scaleTime(settings.xAxisType)
  // Domain determines the range of values displayed on the X axis
    .domain( settings?.xMax !== '' && settings.xMin !== ''  && settings.xAxisType !== 'auto'
      ? d3.extent([new Date(settings.xMin), new Date(settings.xMax)])// Use the user-defined min and max
      : d3.extent(data, d => new Date(d[settings.x[0].key]))) // Fall back to the data's extent if auto is selected
    // Range determines the width of the X axis
    .range([marginLeft, width - marginRight]);

  const y = scale(settings.yScale)
    // Domain determines the range of values displayed on the Y axis
    .domain(settings?.yMax !== '' && settings.yMin !== ''  && settings.yAxisType !== 'auto'
      ? d3.extent([settings.yMin, settings.yMax])
      :
      [
      d3.min(data, d => Math.min(...settings.y.map(ySetting => d[ySetting.key]))),
      d3.max(data, d => Math.max(...settings.y.map(ySetting => d[ySetting.key])))
    ])
    // Range determines the height of the Y axis
    .range([height - marginBottom, marginTop]);

  // color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10)
    .domain(settings.x.map(setting => setting.key))
    // .range(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']); // Can manually specify colors, use d3.scaleOrdinal()

  // Line generators
  const lineGenerators = settings.y.map(ySetting =>
    d3.line()
      .x(d => x(d[settings.x[0].key]))
      .y(d => y(d[ySetting.key]))
  );

  useEffect(() => {
    // Calculate the total number of days displayed
    const totalDays = (new Date(settings.xMax) - new Date(settings.xMin)) / (1000 * 60 * 60 * 24);

    // Calculate the width available for each tick
    const totalWidth = width - marginLeft - marginRight;
    const tickWidth = totalWidth / totalDays;

    let format;

    // If the tick width is too small, reduce the detail in the labels
    if (tickWidth < 50) {
      // Just display the month
      format = d3.utcFormat("%b");
    } else if (tickWidth < 150) {
      // Display just the date
      format = d3.utcFormat("%m-%d");
    } else {
      // Display the full date and time
      format = d3.utcFormat("%m-%d-%Y %I:%M %p");
    }

    const xAxis = d3.axisBottom(x)
      .ticks(totalDays > 10 ? d3.timeDay.every(Math.ceil(totalDays / 10)) : d3.timeDay.every(1))
      .tickFormat(format);

    d3.select(gx.current).call(xAxis)
      .attr("font-size", "14px");

  }, [x, settings.xMin, settings.xMax, width, marginLeft, marginRight]);


  // useEffect(() => {
  //   svg.append("g")
  //     .attr("transform", `translate(0,${height - marginBottom })`)
  //     .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));
  // }, [x])



  useEffect(() => {
    const axisG = d3.select(gy.current);

    axisG.selectAll(".tick line.clone").remove();

    axisG.call(d3.axisLeft(y))
      .attr("font-size", "14px")
      .call(g => g.selectAll(".tick line").clone()
        .attr("x2", width - marginLeft - marginRight)
        .attr("stroke-opacity", 0.1)
        .classed("clone", true));
  }, [y]);

  return (
    <Paper style={{ padding: '12px', border: '1px solid black' }}>
      <div ref={divRef} style={{ width: '100%' }}>
        <svg ref={svgRef}>
          {/* Chart Tile */}
          {settings.labels &&
            <text x={(width / 2)}
              y={(marginTop / 2)}
              textAnchor="middle"
              style={{"fontSize": "14px", "fontWeight": "600"}}
            >
              {settings.title}
            </text>
          }

          {/* X axis */}
          <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
          {/* X axis title */}
          {settings.labels &&
            <text
              x={(width / 2)}
              y={(height - 3)}
              textAnchor="middle"
              style={{"fontSize": "14px", "fontWeight": "600"}}
            >
              {settings.xLabel}
            </text>
          }

          {/* Y axis */}
          <g ref={gy} transform={`translate(${marginLeft}, 0)`} />

          {/* Y axis title */}
          {settings.labels &&
            <text
              x={(marginLeft / 2)}
              y={(height / 2) + 5}
              transform={`rotate(-90, 12, ${height / 2})`}
              textAnchor="middle"
              style={{"fontSize": "14px", "fontWeight": "600"}}
            >
              {settings.yLabel}
            </text>
          }

          {/* Lines */}
          <defs>
            <clipPath id="clip">
              <rect
                x={marginLeft}
                y={marginTop}
                width={width - marginLeft - marginRight}
                height={height - marginTop - marginBottom}
              />
            </clipPath>
          </defs>

          <g transform={`translate(0,0)`} clipPath="url(#clip)">
          {lineGenerators.map((lineGen, i) => {
            const lineColor = color(lineGen);
            return (
              <g key={i}>
                <path
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="1.5"
                  d={lineGen(data)}
                />
                {data.map((d, j) => {
                  const xAxis = (j === 0 ? x(d[settings.x[0].key]) - 30 : x(d[settings.x[0].key]))
                  const height = (j === 0 ? "0.4em" : "-0.8em")

                  if (settings.barValues) {
                  return (
                    <text
                      key={j}
                      x={xAxis}
                      y={y(d[settings.y[i].key])}
                      dy={height}
                      fill={lineColor}
                      textAnchor="middle"
                      fontSize="12px"
                    >
                      {d[settings.y[i].key]}
                    </text>
                  )}
                })}
              </g>
              )
            })}
          </g>
        </svg>
      </div>
    </Paper>
  );
}

export default Line;
