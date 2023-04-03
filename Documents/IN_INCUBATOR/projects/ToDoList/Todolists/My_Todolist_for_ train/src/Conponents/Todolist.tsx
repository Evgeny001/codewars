import React, {ChangeEvent, FC, RefObject, useRef, useState} from "react"
import {FilterType} from "../App";

type TotolistPtorpsType = {
    title: string
    task: Array<TaskType>
    cangeFilterValue: (filter: FilterType) => void
    removeTask: (taskID: string) => void
    addTask: (title: string) => void
    changeTaskStatus : (taskID: string)  => void
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist: FC<TotolistPtorpsType> = (props) => {
    const tasksItems: JSX.Element[] | JSX.Element = props.task.length       // узнать длину массива, если имеет какую-то длину, не пустой
        ? props.task.map((el) => {                                   //   выполнить этот код и записать в переменную tasksItems
            return (
                <>

                    <li key={el.id}>
                        <button onClick={() => {
                            props.removeTask(el.id)
                        }}>X
                        </button>
                        <input type="checkbox" checked={el.isDone}
                        onClick={()=>{props.changeTaskStatus(el.id)}}
                        /><span>{el.title}</span></li>

                </>

            )
        })
        : <span>Your taskList is empty</span>                            //иначе в tasksItems идет <span>
    const AddInputTask: RefObject<HTMLInputElement> = useRef(null)
    const [title, SetTitle] = useState<string>("")

    const changeLocalTitle = (event: ChangeEvent<HTMLInputElement>) => {
        SetTitle(event.currentTarget.value)
    }
    const addTask111 = () => {props.addTask(title)
        SetTitle("")

}
      // const AddInputTaskRef: RefObject<HTMLInputElement> = useRef(null)
      //        console.log(AddInputTaskRef)

    // const addTask = () => {
    //       if(AddInputTaskRef.current)  {
    //           props.addTask(AddInputTaskRef.current.value)
    //           AddInputTaskRef.current.value=""
    //       }
    // }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                {/*<input ref={AddInputTaskRef}/>*/}
                {/*<button onClick={addTask }>+</button>*/}
                <input onChange={changeLocalTitle}
                    value={title}
                       onKeyDown={(event)=>event.key === "Enter" && addTask111()}

                />
                <button onClick={addTask111}>+</button>
            </div>

            <ul>
                {tasksItems}

                {/*{props.task.map((el)=>{*/}
                {/*    return(*/}
                {/*        <li><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>*/}
                {/*    )*/}
                {/*})}*/}

            </ul>
            <div>
                <button onClick={() => props.cangeFilterValue("All")}>All</button>
                <button onClick={() => props.cangeFilterValue("Active")}>Active</button>
                <button onClick={() => props.cangeFilterValue("Completed")}>Completed</button>
            </div>
        </div>
    )
}
