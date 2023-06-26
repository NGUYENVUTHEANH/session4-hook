import { logDOM } from '@testing-library/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DemoUseEffect() {
    const [text, setText] = useState("")
    //useEffect dùng đẻ : callAPI ,listen DOM event, update DOM,...
    //trong useEffect có 3 trường hợp :
    // +Trường hợp 1 : useEffect (callback);
    //Tính chất :
    //+useEffect sẽ luôn được gọi mỗi khi component mount
    //+callback sẽ chỉ dược gọi mỗi khi component được re-render
    //+gọi callback ngay sau khi component thêm element vào DOM 

    // useEffect(() => {
    //     console.log("hello world");
    // })



    // truòng hợp 2 :  useEffect (callback,[]);
    // ở phiên bản cũ: []cleanUp, còn ở phiên bản ms deps 
    // tính chất:
    //+useEffect (callback)sẽ luôn được gọi mỗi khi component mount
    //+callback sẽ chỉ dược gọi 1 lần mỗi kgi component được re-render

    // useEffect(() => { console.log("useEffect đang dược chạy"); }, [])



    //trường hợp 3：useEffect (callback,[ deps]); // dependencies
    // tính chất:
    //+useEffect (callback)sẽ luôn được gọi mỗi khi component mount
    //+callback sẽ chỉ dược gọi mỗi khi component thay đổi

    const [count, setCount] = useState(0)
    useEffect(() => { console.log("useEffect đang dược chạy"); }, [text, count])





    return (
        <div>
            <h2>Demo UseEffect</h2>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
            {console.log("DemoUseEffect được re-render")}
        </div>
    )
}

export default DemoUseEffect