import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function CounterTH1() {
    const [count, setCount] = useState(0)
    useEffect(() => { console.log("useEffect đang dược chạy"); }, [])
    return (
        <div>
            <h2>Counter:</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
        </div>
    )
}

export default CounterTH1