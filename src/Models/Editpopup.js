import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditPopup = ({ modal, toggle, updateTask ,taskobj}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleClick=(e)=>{
    const {name,value}=e.target
    if (name==="title") {
      setTitle(value)
      
    } else {
      setDescription(value)
      
    }
  }
  

  useEffect(() => {
    setTitle(taskobj.name);
    setDescription(taskobj.descprition); 
  }, [taskobj.descprition, taskobj.name]);

  const handleUpdate = () => {
    let updatedTask = {
      name: title,
      description: description,
    };
    updateTask(updatedTask); 
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit </ModalHeader>
        <ModalBody>
          <div>
            <div className='form-group'>
              <label className='form-label'>Title</label>
              <input type='text' className='form-control' value={title} name='title' onChange={handleClick} />
            </div>
            <div className='form-group'>
              <label className='form-label'>Description</label>
              <textarea rows={4} type='textarea' className='form-control' value={description} name='description' onChange={handleClick}></textarea>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleUpdate}>
            Edit
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditPopup;