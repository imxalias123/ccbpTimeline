import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCards = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} courseDetails={items} />
    }
    return <CourseTimelineCard key={items.id} projectsDetails={items} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>MY JOURNEY OF</Heading>
          <CCBPHeading>CCBP 4.0</CCBPHeading>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachTimeLine =>
              renderTimeLineCards(eachTimeLine),
            )}
          </Chrono>
        </HeaderContainer>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView
