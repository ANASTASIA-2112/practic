import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";


export type FilterValuesType = "All"|"Completed"| "Active";
function App() {

    let [tasks,setTasks]= useState<Array<TaskType>> ([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},

    ]);
    let [filter, setFilter] = useState<FilterValuesType>("Completed")


    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    let taskForTodolist = tasks;
    if (filter === "Completed") {
        taskForTodolist = tasks.filter(t => t.isDone === true);

    }if (filter === "Active") {
        taskForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
