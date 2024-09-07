// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile/USER_ID');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userData.first_name}</h1>
      <div>
        <h2>Follow your progress</h2>
        <ul>
          <li>Points: {userData.points}</li>
          <li>Rank: {userData.rank}</li>
          {userData.badges && userData.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

