import React from 'react'
import './style.css';
import { FilterValuesType} from './App';

export type TasksType = {
   id: number,
   name: string,
   isDone: boolean,
}

type PropsType = {
   title: string,
   tasks: Array<TasksType>,
   removeTask: (taskId: number) => void,
   changeFilter: (value: FilterValuesType) => void,
}

const TodoList = (props: PropsType) => {
   return (
      <div className="wrapper">
         <header className="header">
            <div className="header__body">
               <div className="header__title"><h1>TodoList</h1></div>
            </div>
         </header>
         <main className="main">
            <div className="main__container">
               <div className="main__body">
                  <div className="main__card card">
                     <ul className="card__list">
                        <div className="card__title"><h1>{props.title}</h1></div>
                        {props.tasks.map(t => <li className="card__item item"><input type="checkbox" checked={t.isDone}/> {t.name}
                        <button className="button__item" onClick={() => { props.removeTask(t.id) }}>X</button></li>)}
                     </ul>
                  </div>
                  <button onClick={() => { props.changeFilter("all")}}>All</button>
                  <button onClick={() => { props.changeFilter("active") } }>Active</button>
                  <button onClick={() => { props.changeFilter("completed") } }>Completed</button>
               </div>
            </div>
         </main>
      </div>
   )
}

export default TodoList
