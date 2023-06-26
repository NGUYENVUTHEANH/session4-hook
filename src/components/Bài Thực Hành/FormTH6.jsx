import React, { useState } from 'react'
function FormTh6() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            name,
            email,
            phone,
        );
    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="">Email : </label>
                <input type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="">Phone : </label>
                <input type="text" value={phone} onChange={handlePhoneChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormTh6