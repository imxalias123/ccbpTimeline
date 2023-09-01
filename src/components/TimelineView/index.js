import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimeLineCard'

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
    if (items.categoryId === 'COURSE') {
      return <CourseTimelineCard key={items.id} courseDetails={items} />
    }
    return <ProjectTimeLineCard key={items.id} projectsDetails={items} />
  }

  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>MY JOURNEY OF</Heading>
          <CCBPHeading>CCBP 4.0</CCBPHeading>
        </HeaderContainer>

        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachTimeLine =>
            renderTimeLineCards(eachTimeLine),
          )}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}

export default TimelineView
