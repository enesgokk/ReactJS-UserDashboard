import React from 'react'
import { ITask } from '../Interfaces'

interface Props{
    task:ITask;
    complateTask(taskNameToDelete:string):void;
}

const TodoTask = ({task,complateTask}:Props) => {
    return (
        <>
            <>
                <tbody>
                    <tr>
                        <th scope="row"><input type="checkbox" /></th>
                        <td>{task.taskName}</td>
                        <td>{task.deadline}</td>
                        <td>September 13, 2014</td>
                        <th>$612.87</th>
                        <th><button className="paidText">Odendi</button></th>
                        <th><a className="showLink" href="#">Goster</a></th>
                    </tr>
                </tbody>
            </>
        {/*<button className="delete" onClick={()=> {complateTask(task.taskName)}}>X</button> */}
        </>
    )
}
export default TodoTask
