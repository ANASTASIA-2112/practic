import React from "react";


type PropsType = {
    title: string
}
export function Todolist(props:PropsType ) {  //props = { title: "What to learn"}

    return (
        <div>
            <h3> {props.title} </h3>
            <div>
                <input/>
                <button> +</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/><span></span>CSS&HTML</li>
                <li><input type="checkbox" checked={true}/><span></span>JS</li>
                <li><input type="checkbox" checked={false}/><span></span>React</li>
            </ul>

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

