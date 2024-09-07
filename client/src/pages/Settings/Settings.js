import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './Settings.css';

const Settings = () => {
  const userId = useSelector((state) => state.user.id);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateofbirth: '',
    profilePicture: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`);
        const { first_name, last_name, email, dateofbirth, profilePicture } = response.data;
        setFormData({
          firstName: first_name,
          lastName: last_name,
          email: email,
          dateofbirth: new Date(dateofbirth).toISOString().split('T')[0],
          profilePicture: profilePicture,
        });
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/users/profile/${userId}`, formData);
      if (response.data) {
        setMessage('Profile updated successfully!');
      }
    } catch (error) {
      console.error('There was an error updating the profile!', error);
      setMessage('Profile update failed!');
    }
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Profile Picture URL:</label>
        <input type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Settings;
