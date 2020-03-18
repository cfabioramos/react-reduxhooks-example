import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add } from './courseSlice'

export default function CourseList() {
    const courses = useSelector((state) => state.course.value)
    const dispatch = useDispatch();
    
    const addCourse = event => dispatch(add(event.target.value))

    return (
        <div>
            <ul>
                {
                    courses.map( element => (<li key={element}>{element}</li>) )
                }
            </ul>
            <div>
                <input type="text" onBlur={addCourse}/>
            </div>
        </div>
    )
}