import React, { useState } from 'react'
import ColorPicker from "./ColorPicker"
function IndexColor() {
    const [color, setColor] = useState("#000000")
    //cách 1
    // const handleChangeColor = (e) => {
    //     setColor(e)
    // }
    return (
        <div>
            <h2>Lifing State Up</h2>
            {/* cáck1 */}
            {/* <ColorPicker changeColor={handleChangeColor} /> */}
            {/* cách 2 */}
            <ColorPicker setColorParent={setColor} />
            <div
                style={{
                    backgroundColor: color,
                    width: "200px",
                    height: "200px",
                    margin: "0 auto",
                    marginTop: "100px",
                }}
            ></div>
        </div>
    )
}

export default IndexColor