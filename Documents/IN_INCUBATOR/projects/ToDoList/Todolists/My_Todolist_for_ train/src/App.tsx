import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Conponents/Todolist";
import {v1} from "uuid";
// CRUD
// R - filter, sort, search

export type FilterType = "All" | "Active" | "Completed"

function App() {
    //BLL:
    //     const tasks1 = [                                                  //
//          { id: 1, title: "HTML&CSS", isDone: true },
//          { id: 2, title: "JS", isDone: true },
//          { id: 3, title: "ReactJS", isDone: false }
// ]
    const title1 = "What to do"                                             // 1.создаем localState для task
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const addTask = (title: string) => {
        let newTask: TaskType = {id: v1(), title: title, isDone: true}      // создаем переменную - это объект типа TaskType
        const addedTask = [newTask, ...tasks]
        setTasks(addedTask)

    }


    // let filter: FilterType | undefined                                     //2. переменная filter - хранит значения кнопок фильтрации
    let filteredTasks: Array<TaskType> = tasks                           // 3. переменная filteredTasks - будет хранить результат фильтрации
    const [filter, SetFilter] = useState<FilterType>("All")     //4. создаем localState для filter так как filter будет меняться и надо что бы React за ним следил (let filter убрать так как он уже в useState)

    if (filter === "Active") {                                              // 5. Фильтруем
        filteredTasks = tasks.filter(el => el.isDone === false)
    }
    if (filter === "Completed") {
        filteredTasks = tasks.filter(el => el.isDone === true)
    }
    const cangeFilterValue = (filter: FilterType) => {                    //6. cangeFilterValue получает в параметры значение filter от кнопки
        SetFilter(filter)                                                //7. вызывает SetFilter и изменяет state
    }
    const removeTask = (taskID: string) => {                            // removeTask получает в параметры # таски
        const updatedTasks = tasks.filter(el => el.id !== taskID)      // filter перебирает таски и сравнивает id из массива tasks и id полученной от button
        setTasks(updatedTasks)
    }
    const changeTaskStatus = (taskID: string) => {
        const chengedTasks = tasks.map((el)=>el.id === taskID ? {...el,isDone:!el.isDone}: el)

            setTasks(chengedTasks)
    }
    //UI
    return (
        <div className="App">
            <Todolist title={title1} task={filteredTasks} cangeFilterValue={cangeFilterValue} removeTask={removeTask}
                      addTask={addTask} changeTaskStatus={changeTaskStatus}/>
        </div>
    );
}

export default App;
