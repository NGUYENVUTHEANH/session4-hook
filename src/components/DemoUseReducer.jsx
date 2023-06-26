import React, { useReducer } from 'react'

function DemoUseReducer() {
    // trong hook useReducer được cung cấp như 1 sự lựa chọn để thay thế cho useState 
    // useState được sử dụng trong các component đơn giản
    // useReducer được sử dụng trong các component p@huức tạp

    // khi sử dụng với useState:
    // bước 1: khai báo giá trị ban đầu 
    // bước 2 : Action (up:count+1,down:count-1)

    // khi sử dụng với useReducer:
    // bước 1: khai báo giá trị ban đầu 
    // bước 2: Action (up:count+1,down:count-1)
    // bước 3: Reducer
    // bước 4: Dispatch

    // ví dụ: 

    // bước 1: khai báo giá trị ban đầu (initialState)
    const initialState = 0

    // bước 2 : khai báo các Action (up:count+1,down:count-1)
    const ACTION_UP = "UP"
    const ACTION_DOWN = "DOWN"
    const RANDOM = "RANDOM"

    // bước 3: Reducer
    // Reducer nhận 2 tham số:
    // Tham số 1: là state hiện tại
    // Tham số 2: là action
    // reducer sẽ  xem state action là j để xử lí
    const reducer = (state, action) => {
        switch (action) {
            case RANDOM:
                return Math.floor(Math.random() * 10);
            case ACTION_UP:
                return state + 1;
            case ACTION_DOWN:
                return state - 1;
            default:
                break;
        }
    };

    // bước 4: Dispatch
    // khai báo giống usestate nhưng tham số thứ 2 sẽ được đổi thành dispatch 
    // useReducer có thể nhận vào 3 đối số : 
    //           1.reducer, 
    //           2.giá trị khỏi tạo(initianState)
    const [count, dispatch] = useReducer(reducer, initialState)

    // khi sử dụng 1 sự kiện gì đấy => sẽ sử dụng dispatch để gửi hanh độnng (action) lên chp reducer xử lý
    return (
        <div>
            <h2>Demo Use Reducer</h2>
            <p>{count}</p>
            <button onClick={() => dispatch(ACTION_UP)}>UP</button>
            <button onClick={() => dispatch(ACTION_DOWN)}>DOWN</button>
            <button onClick={() => dispatch(RANDOM)}>RANDOM</button>
        </div>
    )
}

export default DemoUseReducer