// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {projectsDetails} = props
  const {
    projectTitle,
    description,
    duration,
    projectUrl,
    imageUrl,
  } = projectsDetails

  return (
    <div>
      <img src={imageUrl} alt="project" />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeLineCard
