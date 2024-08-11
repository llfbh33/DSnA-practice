
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
