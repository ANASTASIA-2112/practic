import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types Типизируем
export type AffairPriorityType = 'high' | 'low' | 'middle' // создала тип для Priority
export type AffairType = {
    _id: number // тип число
    name: string // тип строка
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType // тип фильтрации, он фелтрует все для Priority

// constants// постоянная переменная
const defaultAffairs: AffairType [] = [ // типизируем //тип массив
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions //Впомогаленые функции
export const filterAffairs = (affairs: AffairType [], filter: FilterType): AffairType[] => { //
    // нужно отфильтровать тип дела// и вернуть дела
    //if (filter === 'all') // need to fix
    return affairs.filter((a => filter === 'all' ? affairs : a.priority === filter))

}
export const deleteAffair = (affairs: AffairType [], _id: number): AffairType[] =>
{
    return  affairs.filter(a => a._id !== _id) // need to fix

}

function HW2() {
    const [affairs,setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        let removeAffair = defaultAffairs.filter((a => a._id !== _id))// need to fix any
        setAffairs(removeAffair);
        // need to fix

    }
    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
