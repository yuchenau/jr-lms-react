import React from 'react';
import { withRouter } from 'react-router-dom'

function courseDetailsForm(props) {
    return (
        <form>
            <input />
            <button onClick={ event => {
                event.preventDefault();
                props.history.push('/courses')
            }}>back</button>
        </form>
    );
}

export default withRouter(courseDetailsForm);