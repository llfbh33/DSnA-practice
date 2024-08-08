
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
