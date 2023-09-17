import { FC } from "react"
import { Work } from "../../types"
import WorkCardView from "./WorkCardView"

interface WorkCardContainerProps {
  work: Work
}

const WorkCardContainer: FC<WorkCardContainerProps> = ({ work }) => {
  return <WorkCardView work={work} />
}

export default WorkCardContainer
