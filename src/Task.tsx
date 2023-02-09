import React from "react";

type PropsMilk = {
    MO: Array<MilkType>
}


type MilkType = {
    id: number
    title: string
    number: number

}


export const Task = (props: PropsMilk) => {
    return (
        <div className='Milk'>
            <div>
                <ul>
                    {props.MO.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.title} </span>
                                <span>{el.number} </span>

                            </li>

                        )
                    })}

                </ul>
            </div>

        </div>
    );
}
