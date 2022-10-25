import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import '../styles/TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/')
  }
  
  return ( 
    <>
      <div className="back-button-container">
          <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam delectus quisquam nemo tenetur adipisci laborum tempora culpa molestias, ut, sint eos. Amet excepturi.</p>
      </div>
    </>
  );
}


export default TaskDetails;