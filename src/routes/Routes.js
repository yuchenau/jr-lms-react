import React from 'react';
import {
    Switch,
    Redirect, 
    Route
} from 'react-router-dom';
import CoursesView from '../course/courseView';
import CourseDetails from '../course/courseDetails';
import StudentsView from '../student/studentView';

const Routes = () => {
    return (
        <Switch> 
            <Redirect exact from="/" to="/courses" />
            {/* page level component */}
            <Route 
                exact path='/courses' 
                component={CoursesView}>
            </Route>
            <Route 
                exact path='/courses/:courseId' 
                component={CourseDetails}>
            </Route>
            <Route 
                exact path='/students' 
                component={StudentsView}>
            </Route>
        </Switch>
    )
}

export default Routes;