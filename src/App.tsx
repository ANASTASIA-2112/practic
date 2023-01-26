import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";


function  App () {

    let task1 = [
        {id : 1, title: "CSS", isDone: true },
        {id : 2, title: "JS", isDone: true },
        {id : 3, title: "React", isDone: false },
    ]


    return (
        <div className="App">
            <Todolist title= "What to learn"/>
            <Todolist title="Movies"/>
            <Todolist title="Songs"/>

        </div>
    );
}

export default App;
