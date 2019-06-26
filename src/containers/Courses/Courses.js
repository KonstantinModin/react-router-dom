import React, { useState } from 'react';
import Course from '../Course';
import { Route } from 'react-router-dom';

import './Courses.css';

const Courses = (props) => {
    const [ courses ] = useState([
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' },
            { id: 4, title: 'ABC - The Complete Guide' },
            { id: 5, title: 'KLM - The Complete Guide' },
            { id: 6, title: 'Basic' },            
            { id: 7, title: 'Delphi - The Complete Guide' },
            { id: 8, title: 'C++ - The Complete Guide' },
            { id: 9, title: 'Fortran - The Complete Guide' },
            { id: 10, title: 'Turbo Pascal - The Complete Guide' }
        ]);
   
    return (
        <div>
            <h1>Amazing Udemy Courses</h1>
            <h2>Here we have some courses:</h2>
            <section className="Courses">
                {courses.map(({id, title}) => (
                    <article 
                        className="Course" 
                        key={id}
                        onClick={() => props.history.push(`/courses/${id}?=${title}`)}>
                        <strong>Title: </strong>{title}, <strong>ID: </strong>{id}
                    </article>
                ))}
                <Route path="/courses/:id" component={Course}/> 
            </section>
        </div>
    );    
}

export default Courses;