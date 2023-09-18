import { Work } from "../../types"
import Projects from "./Projects.json";
import WorksView from "./WorksView"

const WorksContainer = () => {
  const works: Work[] = Projects;

  return <WorksView works={works} />
}

export default WorksContainer
