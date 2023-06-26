import React from 'react'
import { userState } from 'react'

function DemouseState() {
    //có 2 loại conponent: class component và function conponent 
    //từ phiên bản 16.8.x đã chuyển sang sử dụng function component
    // cách khai báo state trong function component 
    // const [nameState, setNameState] = useState("Hello world");
    // console.log(nameState);
    //trong đó :
    //+nameState: là tên state
    //+setNameState: là 1 hàm để thay đổi lại giá trị cho nameState
    //+inState: là giá trị khởi tạo ban đầu

    //kiểu dữ liệu :
    //kiểu dữ liệu nguyên thuỷ : number,string,boolean,...
    //+number
    const [count, setCount] = userState(0)
    //+string 
    const [text, setText] = userState("Bách Biến")
    const handleChangeState = () => {
        setText("Báck nhiều phép ")
    }
    //+Boolean
    const [toggle, setToggle] = userState(true)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    //kiểu dữ liệu phức tạp : Array,Object,
    //+Array
    const [arrList, setArrList] = userState([1, 2, 3, 4])
    const handleRandomNumber = () => {
        setArrList([...arrList, Math.floor(Math.random() * 10)])
    }
    //+Object và Array
    const [listUser, setListUser] = userState([
        { id: 1, name: "AI1 đó", age: 20 },
        { id: 2, name: "AI2 đó", age: 23 },
        { id: 3, name: "AI3 đó", age: 26 },
        { id: 4, name: "AI4 đó", age: 24 },
    ])
    //+Object
    const [objList, setObjList] = userState({
        objCount: 10,
        objArr: [1, 3, 5, 7]
    })
    const handleRandom = () => {
        setObjList({ objArr: [...objList.objArr, Math.floor(Math.random() * 10)] })
    }
    return (
        <div>
            <h2>Demo useState</h2>
            <h3>Number: </h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
            <h3>String:</h3>
            <p>{text}</p>
            <button onClick={handleChangeState}>Change State</button>
            <h3>Boolean1:</h3>
            {toggle ? (
                <div>
                    <div>Chúc các bạn thi tốt !</div>
                    <button onClick={() => setToggle(false)}>Click</button>
                </div>
            ) : (
                <div>
                    <div>Chăm chỉ quá !</div>
                    <button onClick={() => setToggle(true)}>Click</button>
                </div>
            )}
            <h3>Boolean2:</h3>
            {toggle ? (
                <div>
                    <div>Chúc các bạn thi tốt !</div>
                    <button onClick={handleToggle}>Click</button>
                </div>
            ) : (
                <div>
                    <div>Chăm chỉ quá !</div>
                    <button onClick={handleToggle}>Click</button>
                </div>
            )}
            <h3>Array:</h3>
            <p>{arrList.toString()}</p>
            <button onClick={handleRandomNumber}>Random Number</button>
            <h3>List User</h3>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {listUser.map((e, i) => (
                    <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                    </tr>
                ))}
            </table>
            <h3>ObjList:</h3>
            <p>{objList.objCount}</p>
            <button onClick={() => setObjList({ objCount: objList.objCount + 1, objArr: objList.objArr })}>Up</button>
            <button onClick={() => setObjList({ objCount: objList.objCount - 1, objArr: objList.objArr })}>Down</button>
            <p>{objList.objCount.toString()}</p>
            <button onClick={handleRandom}>Click</button>
        </div>
    )
}

export default DemouseState