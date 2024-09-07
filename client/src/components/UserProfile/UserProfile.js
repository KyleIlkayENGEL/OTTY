import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      {user.profilePicture && <img src={`http://localhost:5000${user.profilePicture}`} alt="Profile" />}
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Date of birth: {user.dateofbirth}</p>
      <p>Points: {user.points}</p>
      <p>Rank: {user.rank}</p>
      <div>
        <h4>Badges</h4>
        <ul>
          {user.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
