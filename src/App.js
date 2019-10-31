import React from 'react';
import { NavLink, Route, Switch, Redirect} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
// import Course from './containers/Course';
import Users from './containers/Users/Users';
import './app.css';

const App = () =>       
    <div className="App">
        <ol style={{textAlign: 'left'}}>            
            <li>Example of 'react-router-dom' usage</li>
        </ol>
        
        <header>
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/courses">Courses</NavLink>
            </nav>
        </header>
        <Switch>
            <Route path="/" exact render={() => <h1>Start page</h1>}/>
            <Route path="/users" component={Users}/>
            <Route path="/courses" component={Courses}/>                
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>404 Error: Page not found </h1>} />
        </Switch>
    </div> 

export default App;