import React from 'react';
import Register from '../Register/Register';
import './MainPage.css';
import ottyWorking from '../../assets/images/ottyworking.png'; 

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="image-container">
        <img src={ottyWorking} alt="Otter Working" className="otter-image" />
        
      </div>
      <div className="form-container">
        <Register />
      </div>
    </div>
  );
};

export default MainPage;

