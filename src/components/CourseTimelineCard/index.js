// Write your code here

import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'
import {CourseTagItem, CourseItem} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <ul>
        {tagsList.map(eachTag => (
          <CourseTagItem key={eachTag.id}>
            <CourseItem>{eachTag.name}</CourseItem>
          </CourseTagItem>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
