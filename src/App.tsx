import React from 'react';
import './index.css';


function App() {

    return (
        <div className="App">
            <Todolist/>
            <Todolist/>
            <Todolist/>



        </div>
    );
}

function Todolist() {

    return (
        <div>
            <h3> What to learn</h3>
            <div>
                <input/>
                <button> + </button>
            </div>
        </div>
    );
}

export default App;
