import React from 'react';
import './App.css';
import  Tasks from "./folder";



// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.


export type DataType = {
    title: string
   tasks:Array<TasksType>
    students: Array<string>
}


export type TasksType= {
    title: string
    taskId: number
    isDone: boolean

}

function App( ) {
    const data1 = {
        title: "What to do",
        tasks: [
            {taskId: 1, title: "HTML&CSS2", isDone: true},
            {taskId: 2, title: "JS2", isDone: true}
        ],
        students: [
            'Saul Milne2',
            'Dion Reeve4',
            'Anisa Ortega5',
            'Blade Cisneros6',
            'Kian Walton12',
            'Orion Lamb13',
            'Crystal Vaughan15',
            'Vivien Hickman16',
            'Stuart Lu17',
            'Dario Burns19',
            'Chloe Rich20',
            'Martyna Felix',
            'Nida Glass',
            'Maeve Miles',
            'Ayman Cano',
            'Safwan Perry',
            'Fox Kelly',
            'Louise Barlow',
            'Leanna Cline',
            'Willard Hodge',
            'Amelia Dorsey',
            'Kiah Porter',
            'Jeanne Daly',
            'Mohsin Armstrong',
            'Princess Tierney',
            'Kasim Kendall',
            'Darryl Cope',
            'Elysha Ray',
            'Kashif Blackburn',
            'Atif Zimmerman',

        ]
    }
    const data2 =   {
        title: "What to learn",
        tasks: [
            {taskId: 1, title: "HTML&CSS", isDone: true},
            {taskId: 2, title: "JS", isDone: true}
        ],
        students: [
            'Rick Kane',
            'Samia North',
            'Isaac Morton',
            'Lily-Ann Clifford',
            'Thalia Park',
            'Sapphire Cruz',
            'Anya Estes',
            'Dominika Field',
            'Rosanna Chung',
            'Ryley Beasley',
            'Evie-Mae Farrell',
            'Juliet Valencia',
            'Astrid Austin',
            'Lyle Montgomery',
            'Nisha Mora',
            'Kylie Callaghan',
            'Star Wilks',
            'Asa Fuller',
            'Leigh Kemp',
            'Sammy Bonilla',
            'Acacia Becker',
            'Coral Shepherd',
            'Melina Molina',
            'Kiran Bailey',
            'Clara Escobar',
            'Alexandru Horn',
            'Brandon-Lee Mercado',
            'King Long',
            'Elwood Benitez',
            'Mikail Whitaker',
            'Bobby Hardy',
            'Priscilla Landry',
            'Olivia-Grace Cain',
            'Wesley Padilla90',
            'Ella-Grace Wooten91',
            'Bianca Ferrell94',
            'Micheal Talbot95',
        ]
    }

    return (
        <div className="App">
            <Tasks data={data1}/>
            <Tasks data={ data2}/>

        </div>
    );
}

export default App;




















