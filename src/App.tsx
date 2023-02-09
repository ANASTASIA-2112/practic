import React from "react";
import {Task} from "./Task";


function App() {
    const MO = [
        {id: 1, title: "YA", number: 15984565},
        {id: 2, title: "YA", number: 15984565},
        {id: 3, title: "YA", number: 15984565},
        {id: 4, title: "YA", number: 15984565}
    ]
    return (
        <div>
            <Task MO={MO}/>

        </div>
    )
}

export default App;