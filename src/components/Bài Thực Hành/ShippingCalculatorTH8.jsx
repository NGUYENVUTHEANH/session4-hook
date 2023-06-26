import React, { useState } from 'react'

function ShippingCalculatorTH8() {
    const [weight, setWeight] = useState('');
    const [shippingMethod, setShippingMethod] = useState('ground');
    const [shippingCost, setShippingCost] = useState(0);
    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };
    const handleShippingMethodChange = (event) => {
        setShippingMethod(event.target.value);
    };
    const calculateShippingCost = () => {
        let rate = 0;
        switch (shippingMethod) {
            case 'ground':
                if (weight <= 2) {
                    rate = 1.5;
                } else if (weight <= 6) {
                    rate = 3;
                } else if (weight <= 10) {
                    rate = 4;
                }
                else {
                    rate = 4.75;
                }
                break;
            case 'priority':
                if (weight <= 2) {
                    rate = 3.5;
                } else if (weight <= 6) {
                    rate = 4;
                } else if (weight <= 10) {
                    rate = 4.5;
                }
                else {
                    rate = 5;
                }
                break;
            default:
                break;
        }
        setShippingCost(rate * weight);
    }
    return (
        <div>
            <div>
                <label htmlFor="">Weight : </label>
                <input type="number" value={weight} onChange={handleWeightChange} />
            </div>
            <div>
                <label htmlFor="">Shipping Method : </label>
                <select name="" id="" value={shippingMethod} onChange={handleShippingMethodChange}>
                    <option value="ground">Ground</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <button onClick={calculateShippingCost}>Calculate Shipping Cost</button>
            <div>
                <label htmlFor=""> Shipping Cost : </label>
                <span>{`$${shippingCost.toFixed(2)}}`}</span>
            </div>
        </div>
    )
}

export default ShippingCalculatorTH8