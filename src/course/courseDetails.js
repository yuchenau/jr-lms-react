import React from 'react';
import CourseDetailsForm from './courseDetailsForm';

const CourseDetails = (props) => {
    const courseId = props.match.params.courseId;
    return (
        <div>
            This is course details for {courseId}
            <button onClick={() => {
                    props.history.push('/courses')}
            }>back</button>
            <CourseDetailsForm />
        </div>
    )
}

export default CourseDetails;