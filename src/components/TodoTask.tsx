import React from 'react'
import { ITask } from '../Interfaces'
import { Table,Container } from 'reactstrap';


interface Props{
    task:ITask;
    complateTask(taskNameToDelete:string):void;
}

const TodoTask = ({task,complateTask}:Props) => {
    return (
        <>
            <>
                {/*<div className="content">
                    <span>{task.taskName}</span>
                    <span> {task.deadline}</span>
                </div>*/} 
                <tbody>
                    <tr>
                        <th scope="row"><input type="checkbox" /></th>
                        <td>{task.taskName}</td>
                        <td>{task.deadline}</td>
                        <td>@mdo</td>
                        <th>Tutar</th>
                        <th>Durum</th>
                        <th><a className="showLink" href="#">Goster</a></th>
                    </tr>
                </tbody>
            </>
        {/*<button className="delete" onClick={()=> {complateTask(task.taskName)}}>X</button> */}
        </>
    )
}
export default TodoTask
