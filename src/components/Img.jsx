import React from 'react';

const Img = (props) => {
    let src1 = props.src;
    return (
    <div>
        <img src={src1} alt={"blog"} style={{"width": "400px"}}>

        </img>
    </div>
    )
}

export default Img