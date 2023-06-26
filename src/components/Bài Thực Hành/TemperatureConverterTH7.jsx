import React, { useState } from 'react'

function TemperatureConverterTH7() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const handleCelsiusChange = (event) => {
        setCelsius(event.target.value);
        setFahrenheit((event.target.value * 9) / 5 + 32);
    };
    const handleFahrenheitChange = (event) => {
        setFahrenheit(event.target.value);
        setCelsius((event.target.value - 32) * 5 / 9);
    };
    return (
        <div>
            <div>
                <label htmlFor="">Celsius</label>
                <input type="number" value={celsius} onChange={handleCelsiusChange} />
            </div>
            <div>
                <label htmlFor="">Fahrenhei</label>
                <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
            </div>
        </div>
    )
}

export default TemperatureConverterTH7