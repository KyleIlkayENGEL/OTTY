import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import UserProfile from '../../components/UserProfile/UserProfile';
import './Profile.css';

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({ badges: [] });
  const reduxUser = useSelector((state) => state.user.user);
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
      if (reduxUser && reduxUser._id) {
        try {
          console.log(`User ID: ${reduxUser._id}`); // Log user ID
          const response = await axios.get(`http://localhost:5000/api/users/profile/${reduxUser._id}`);
          setUserDetails(response.data);
          setFormData({
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            email: response.data.email,
            dateofbirth: new Date(response.data.dateofbirth).toISOString().split('T')[0], // format date
            profilePicture: response.data.profilePicture,
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [reduxUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/profile/${reduxUser._id}`, formData);
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile', error);
      setMessage('Profile update failed!');
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const uploadFormData = new FormData();
    uploadFormData.append('profilePicture', file);

    try {
      const response = await axios.post(`http://localhost:5000/api/users/upload/${reduxUser._id}`, uploadFormData);
      setFormData({ ...formData, profilePicture: response.data.profilePicture });
      setMessage('Profile picture uploaded successfully!');
    } catch (error) {
      console.error('Error uploading profile picture', error);
      setMessage('Error uploading profile picture!');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!reduxUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Date of Birth:</label>
        <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        <label>Profile Picture:</label>
        <input type="file" name="profilePicture" onChange={handleFileChange} />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
      <UserProfile user={{ ...reduxUser, ...userDetails }} />
    </div>
  );
};

export default Profile;
