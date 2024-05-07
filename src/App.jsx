import React from "react";
import { stringify, v4 as uuidv4} from 'uuid';
import { useState, useEffect} from "react";
import Navbar from "./components/navbar";
import Card from "./card";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import to_do from "./to_do";



function App() {

  const[todo,settodo]= useState("")
  const[Todos,settodos]= useState([])
  const[togglecheckbox,settogglecheckbox]=useState(true)

  useEffect(() => {
 let Todosstring= localStorage.getItem("Todos")
 if(Todosstring){
let Todos= JSON.parse(localStorage.getItem("Todos"))
 settodos(Todos)
 }
  }, [])

const localstore = () => {
 localStorage.setItem("Todos",JSON.stringify(Todos))
}

const showfinished= (e) => {
  settogglecheckbox(!togglecheckbox)
}


  const Handledit= (e, id)=>{
    let t=Todos.filter(item =>item.id ===id) 
      settodo(t[0].todo)
    
      let newtodos=Todos.filter(item => {
        return item.id !== id
      })
      settodos(newtodos)
      localstore()
  }

  const Handledelete= (e, id)=>{
    let index= Todos.findIndex(item=>{
      return item.id===id
    })
    let newtodos=Todos.filter(item => {
      return item.id !== id
    })

settodos(newtodos)
localstore()
  }
  
  const Handleadd= (e)=>{
settodos([...Todos,{id:uuidv4(),todo, isCompleted: false}])
settodo("")
  } 
  const Handlechange=(e)=>{
   settodo(e.target.value)
   localstore()
  }

  const handlecheckbox= (e) => {
    let id= e.target.name;
    let index =Todos.findIndex(item=>{
      return item.id===id
    })
    let newtodos= [...Todos]
    newtodos[index].isCompleted=!newtodos[index].isCompleted

    settodos(newtodos)
    localstore()
  }
  
  return(

  <>
  <Navbar/>
 <to_do />
 <div className=" container mx-auto my-5 rounded-xl p-5 bg-zinc-500 min-h-[80vh] flex-wrap ">
 <h1 className="font-bold text-center text-xl">iTask-Manage your todos</h1>
 <div className="addatodo my-5 flex flex-col gap-4" >
 <h2 className="text-lg  font-bold">Add a Todo</h2>
 <div className="flex">
 <input onChange={Handlechange} value={todo} type="text" className="w-1/2 rounded-lg px-5 py-1 " /> 
 <button disabled={todo.length<2}onClick={Handleadd} className=" disabled:bg-green-600 bg-green-600 hover:bg-green-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-5">Save</button>
 </div>
 </div>
 <input type="checkbox" onChange={showfinished}className="mx-2" checked={togglecheckbox} /> Show Finished
 <h2 className="text-lg font-bold">Your Todos</h2>
 <div className="Todos"> {Todos.length===0 && <div className="m-5 font-semibold"> No task to Display</div>} {Todos.map(item=>{
  return (togglecheckbox || !item.isCompleted) &&  <div key={item.id} className="todo flex w-1/3 my-3 justify-between">
    <div className="flex gap-5">
    <input className="mx-2" name={item.id} onChange={handlecheckbox} type="checkbox" checked={item.isCompleted} id="" />
 <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
 </div>
 <div className="buttons flex h-full mx-10">
  <button  onClick={(e)=>{Handledit(e, item.id)}} className=" bg-green-600 hover:bg-green-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"><AiFillEdit /></button>
  <button onClick={(e)=>{Handledelete(e, item.id)}} className=" bg-red-600 hover:bg-red-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"><AiFillDelete /></button>
  </div>
  </div>
 })}
 </div>
 </div>
  </>

  )
}

export default App;