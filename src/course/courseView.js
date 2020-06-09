import React from 'react';
import { Link } from 'react-router-dom';

const studentView = (props) => {
    return (
        <div>
            This is courses list view
            <p><Link to='/courses/123'>123</Link></p>
            <p><Link to='/courses/456'>456</Link></p>
            <p><Link to='/courses/789'>789</Link></p>
        </div>
    )
}

export default studentView;