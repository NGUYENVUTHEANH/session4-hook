import React, { useState } from "react";
function OrderFormTH2() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !address || !phone) {
            setError("số điện thoại không đúng định dạng");
            return;
        }
        setSuccess(true)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("số điện thoại không đúng định dạng ")
            return;
        };
        setSuccess(true)
    };
    return (
        <div>
            {!success ? (
                <form action="" onSubmit={handleSubmit}>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                    <div>
                        <label htmlFor="name">Họ và tên :</label>
                        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="address">Địa chỉ :</label>
                        <input type="text" id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone">Số điện thoại :</label>
                        <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="note">Note :</label>
                        <input type="text" id='note' value={note} onChange={(e) => setNote(e.target.value)} />
                    </div>
                    <button type="submit">Đặt hàng</button>
                </form>
            ) : (
                <div style={{ color: "green" }}>Đặt hành thành công !</div>
            )}
        </div>
    )
}
export default OrderFormTH2;