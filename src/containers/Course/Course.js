import React from 'react';
import './Course.css';

const Course = (props) => 
            <div className="FullCourse">
                <h1>{props.location.search.split`%20`.join` `.slice(2)}</h1>
                <h2>You selected the Course with ID: {props.match.params.id}</h2>
            </div>;        

export default Course;