import React from 'react';
import { 
    // Link,
    withRouter,
    NavLink
} from 'react-router-dom';
// import styled from 'styled-components';

// const NavLink = styled(Link)`
//     background-color: pink;
// `

function TopNav(props) {
    // const path = props.location.pathname;
    // const isOnCourses = path === '/courses';
    // const isOnStudents = path === '/students';

    return (
        <nav>
            <ul>
                <li><NavLink to='/courses'>Courses</NavLink></li>
                <li><NavLink to='/students'>Students</NavLink></li>
            </ul>
        </nav>
    );
}

export default withRouter(TopNav);