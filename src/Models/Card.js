import React, { useState } from 'react'
import '../assests/card.css'
import EditPopup from './Editpopup.js'
function CARD({taskobj,indexOF,DeleteTask, updateListArray}) {
  
  const [modal,setModal]= useState(false)
  const [completed, setCompleted] = useState(false);


 
  
  
  const toggle=()=>{
    setModal(!modal)
  }
  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#ffd700",
        secondaryColor : "#F2FAF1"
      },
      {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
      },
      {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
      }
    ]
    const StatusCompletd = () => {
      setCompleted(true);
    };
    
    const updateTask = (obj) => {
      updateListArray(obj, indexOF)
  }


    const HandleDelete=()=>{
    DeleteTask(indexOF)
  }
  
  return (
    <div>
    <div className='card-holder'>

      <div className='card ' style={{ opacity: completed ? 0.5 : 1, backgroundColor:completed?'#a9a9a9':'white', cursor:completed?'none':'pointer',transitionDuration:'1s'}}>
        <div className='card-title'>
          <div className='title'>
               <h3>{completed ? 'Completed' :taskobj.name}</h3>
        <hr style={{borderTop:`3px solid ${colors[indexOF%5].primaryColor}`,opacity:"1"}}></hr>
            </div>
        <div className='button-group'>
            <a href="button" className='completed' onClick={StatusCompletd}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentcolor" class="bi bi-check-lg" viewBox="0 0 16 16 ">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>

            </a>
            <a  href="button" className='delete' onClick={HandleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentcolor" class="bi bi-x-lg " viewBox="0 1 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
            </a>
            </div>

        </div>
        <div className='card-description' style={{border:`1px solid ${colors[indexOF%4].primaryColor}`,opacity:"1"}} ><p>{taskobj.descprition}</p>
        </div>
        <div className='card-footer'>
        <button className='btn btn-primary' type="button" onClick={() => setModal(true)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
  </svg>Edit
</button></div>
<EditPopup modal={modal} toggle={toggle} updateTask={updateTask} taskobj={taskobj}/>
       
      </div>
    </div>

      

        </div>
  )
}

export default CARD