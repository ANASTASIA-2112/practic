import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


function App() {

    const tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},

    ]

    const tasks2: Array<TaskType> = [
        {id: 1, title: "Hello world", isDone: false},


    ]


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>

        </div>
    );
}

export default App;
