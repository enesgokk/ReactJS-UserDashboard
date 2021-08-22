import React, {ChangeEvent, FC} from 'react';
import { useState } from 'react';
import './App.css';
import {ITask} from "./Interfaces";
import TodoTask from "./components/TodoTask"
import { Table,Container} from 'reactstrap';
import Navbar from "./components/Navbar";
import Pagination1 from "./components/Pagination1";
import Sidebar from './components/Sidebar';

export interface IPagination {
  postPerPage: number;
  deadline: number;
}

const App:FC = () => {
  const [task,setTask]=useState<string>("");
  const [deadline,setDeadline]=useState<number>(0);
  const [todoList,setTodoList]=useState<ITask[]>([]);
  const [currentPage, setCurrentPage]=useState<number>(1);
  const [postPerPage, setPostPerPage]=useState<number>(5);

  const handleChange=(event: ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name==="task"){
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask=(): void =>{
    const newTask={taskName:task, deadline:deadline};
    setTodoList([...todoList,newTask])
    setTask("");
    setDeadline(0);
  };

  const complateTask=(taskNameToDelete:string):void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))
  }

    //Get current posts
    const indexOfLastPost=currentPage*postPerPage;
    const indexOfFirtPost=indexOfLastPost-postPerPage;
    const currentPosts=task.slice(indexOfFirtPost, indexOfLastPost);

    //Change page
    const paginate=(pageNumber:any)=> setCurrentPage(pageNumber);

    const tr =()=>{
        var tr=<tr>
        <th scope="row"><input type="checkbox" /></th>
        <td>DMP</td>
        <td>561</td>
        <td>November 16, 2014</td>
        <th>$576.28</th>
        <th><button className="paidText">Odendi</button></th>
        <th><a className="showLink" href="#">Goster</a></th>
      </tr>;
        return tr;
    }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input onChange={handleChange} value={task} type="text" name="task" placeholder="Servis Adı..." />
          <input onChange={handleChange} value={deadline} type="number" name="deadline" placeholder="Fatura No..." />
        </div>
        <button onClick={addTask} >Servis Ekle</button>
      </div>
      <p className="bonus" >BONUS: Bu alanı kodda gereksiz çok sayıda table datası ve satırı olmaması amacıyla dinamik eklenebilir hale getirdim.</p>
      <div className="flex">
        <Sidebar/>
      <div className="fullDisplay" >       
      <Navbar/>
      <div className="todoList">
      <Container>
      <Table id="tableId">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Servis Adı</th>
            <th>Fatura Numarasi</th>
            <th>Tarih</th>
            <th>Tutar</th>
            <th>Durum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tr()}{tr()}{tr()}{tr()}{tr()}
        </tbody>
        {todoList.map((task: ITask, key:number)=>{
          return <TodoTask key={key} task={task} complateTask={complateTask} />
        })}
      </Table>
    </Container>
    <Pagination1 postPerPage={postPerPage} totalPosts={25} paginate={paginate}/>
      </div>
    </div>
        </div>
      </div>

  )
}

export default App
