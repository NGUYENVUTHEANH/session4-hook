import React from 'react'

function ColorPicker(props) {
    //cách 1
    // const handleColor = (e) => {
    //     props.changeColor(e.target.value)
    // }
    //cách2
    const handleColor = (e) => {
        props.setColorParent(e.target.value)
    }
    return (
        <div>
            <input type="color" onChange={handleColor} />
        </div>
    )
}

export default ColorPicker