import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const courses = [
  { name: 'HTML', path: '/courses/html' },
  { name: 'CSS', path: '/courses/css' },
  { name: 'JavaScript', path: '/courses/js' },
  { name: 'TypeScript', path: '/courses/typescript' },
  { name: 'SQL', path: '/courses/sql' },
  { name: 'Python', path: '/courses/python' },
  { name: 'Java', path: '/courses/java' },
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Available Courses</h1>
      <div className="courses-list">
        {courses.map((course, index) => (
          <Link key={index} to={course.path} className="course-link">
            <div className="course-card">
              <h2>{course.name}</h2>
              <p>Learn the fundamentals of {course.name}.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
