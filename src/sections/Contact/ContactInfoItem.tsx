import { FC } from "react"
import { ContactInfoType } from "../../types"

const ContactInfoItem: FC<ContactInfoType> = ({ name, data, children, link }) => {
  return (
    <div className="d-flex gap-3 mb-3">
      <div style={{ width: '56px', height: '56px' }} className="bg-light p-2 rounded-2 d-flex text-primary">
        {children}
      </div>
      <div>
        <p className="fw-semibold m-0">{name}</p>
        <a href={link} target={"_blank"} className="text-decoration-none">{data}</a>
      </div>
    </div>
  )
}

export default ContactInfoItem
