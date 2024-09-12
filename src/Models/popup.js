import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UsePopup=({modal,toggle,save})=> {
  const [title, setTitle]=useState('')
  const [description,setDescription]=useState('')


  const handleClick=(e)=>{
    const {name,value}=e.target
    if (name==="title") {
      setTitle(value)
      
    } else {
      setDescription(value)
      
    }
  }

  const handleCreate=()=>{
    let taskobj={}
    taskobj["name"]=title
    taskobj['descprition']=description
    save(taskobj)
    

  }
  return (
    <div>
       <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <div>
              <div className='form-group'>
                <label className='form-label' >Title</label>
                <input type='text' className='form-control' value={title} name='title' onChange={handleClick}></input>
              </div>
              <div className='form-group'>
                <label className='form-label'>Description</label>
                <textarea rows={4} type='textarea' className='form-control' value={description} name='description' onChange={handleClick}></textarea>
              </div>
          </div>
          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleCreate}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default UsePopup
