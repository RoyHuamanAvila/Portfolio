import './WorkCard.scss'
import { FC } from "react"
import { Work } from "../../types"

interface WorkCardProps {
  work: Work
}

const WorkCardView: FC<WorkCardProps> = ({ work }) => {
  const { img, name, description, tags } = work;
  return (
    <div className="Work-Card">
      <div className="Work-Card--head-bar">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="px-3 py-4">
        <img className="Work-card--image" src={img} alt="Work image" />
        <p className='fs-5 text-primary fw-semibold'>{name}</p>
        <p>{description}</p>
        <div className="d-flex gap-2 align-items-center flex-wrap mb-3">
          {
            tags.map((tag, index) => <span className='tag' key={index}>{tag}</span>)
          }
        </div>
        <div className="d-flex gap-2 justify-content-end">
          <button className="Work-card--btn bi bi-github" title='Github'></button>
          <button className="Work-card--btn bi bi-easel-fill" title='Demo'></button>
        </div>
      </div>
    </div>
  )
}

export default WorkCardView
