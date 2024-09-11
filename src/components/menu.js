import Card from '../Models/Card'
import React,{useEffect,useState}  from "react";
import '../assests/homestyle.css';
import Popup from '../Models/popup';

export default function useMenu() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])
  
  useEffect(() => {
      let arr = localStorage.getItem("taskList")
     
      if(arr){
          let obj = JSON.parse(arr)
          setTaskList(obj)
      }
  }, [])

  const toggle = () => setModal(!modal);

  const Savetask= (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)
}
  const DeleteTask=(index)=>{
    let tempList=taskList
    tempList.splice(index,1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(taskList)
    window.location.reload()
  }


  return (
    <div className="body">
       <div className='main'>
           <div className="heading">
            <h3>Daily Task</h3>
            </div>
          <div className="heading"> 
           <button className='btn btn-primary'onClick={()=>setModal(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>new Task</button>
            
          </div>
       </div>
        <Popup toggle={toggle} modal={modal} save={Savetask} />
        <div className='container-fluid'>

       <div className="container">
           {taskList.map((obj,index)=><Card taskobj={obj} indexOF={index} DeleteTask={DeleteTask} />
               )}
       </div>
        </div>
    </div>
  )
}

