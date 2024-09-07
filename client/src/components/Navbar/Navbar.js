import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
import './Navbar.css';
import logo from '../../assets/images/logo3.png';

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [skillsDropdownVisible, setSkillsDropdownVisible] = useState(false);
  const [modulesDropdownVisible, setModulesDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleSkillsDropdown = () => {
    setSkillsDropdownVisible(!skillsDropdownVisible);
    setModulesDropdownVisible(false);
  };

  const toggleModulesDropdown = () => {
    setModulesDropdownVisible(!modulesDropdownVisible);
    setSkillsDropdownVisible(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const closeDropdowns = () => {
    setSkillsDropdownVisible(false);
    setModulesDropdownVisible(false);
    setProfileDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <div className="nav-item" onClick={toggleSkillsDropdown}>
          Skills
          {skillsDropdownVisible && (
            <div className="dropdown-menu" onMouseLeave={closeDropdowns}>
               <Link to="/skills/skillstest">SkillsTest</Link>
              <Link to="/skills/intellectual">Intellectual Skills</Link>
              <Link to="/skills/cognitive">Cognitive Skills</Link>
              <Link to="/skills/socio-emotional">Socio-Emotional Skills</Link>
            </div>
          )}
        </div>
        <div className="nav-item" onClick={toggleModulesDropdown}>
          Modules
          {modulesDropdownVisible && (
            <div className="dropdown-menu" onMouseLeave={closeDropdowns}>
              <Link to="/modules/beginner">Beginner</Link>
              <Link to="/modules/intermediate">Intermediate</Link>
              <Link to="/modules/advanced">Advanced</Link>
            </div>
          )}
        </div>
        <Link to="/courses">Courses</Link>
        <Link to="/career-path">Career Path</Link>
        <Link to="/ask-otty">Ask OTTY</Link>
        <Link to="/forum">Forum</Link>
        {user ? (
          <div className="profile-menu" onClick={toggleProfileDropdown}>
            <img
              src={`http://localhost:5000${user.profilePicture}`}
              alt="Profile"
              className="profile-picture"
            />
            {profileDropdownVisible && (
              <div className="profile-dropdown" onMouseLeave={closeDropdowns}>
                <Link to="/dashboard" onClick={closeDropdowns}>Dashboard</Link>
                <Link to="/profile" onClick={closeDropdowns}>Profile</Link>
                <Link to="/settings" onClick={closeDropdowns}>Settings</Link>
                <Link to="/login" onClick={() => { handleLogout(); closeDropdowns(); }}>Logout</Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
