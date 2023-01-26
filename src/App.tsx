import React from 'react';
import './App.css';


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
            <h3> What to learn </h3>
            <div>
                <input/>
                <button> + </button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true} /><span></span>CSS&HTML</li>
                <li><input type="checkbox" checked={true} /><span></span>JS</li>
                <li><input type="checkbox" checked={false} /><span></span>React</li>
            </ul>

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

export default App;
