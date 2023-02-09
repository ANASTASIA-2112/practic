import React from 'react';
import './App.css';


const Task = (num: number) => {
    console.log(num)
}

function Number() {

    return (
        <div className="Number">
            <h3> Number</h3>
            <button onClick={() => Task(1654651)}>BUTTON</button>
            <Number/>
        </div>
    )
}

export default Number;