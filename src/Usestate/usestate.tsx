import {useState} from "react";
export function Counter() {
    debugger
    let arr = useState(1);
    let data = arr[0]
    let setData = arr[1]
    return <div onClick={() =>{setData(data+1)}}> {data} </div>

}

export default Counter;

