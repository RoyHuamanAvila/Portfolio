import { LocationOn, Call, Email } from "@mui/icons-material";
import { FC } from "react";
import { ContactInfoType } from "../types";

const Contact = () => {
    return (
        <div className="row py-5 my-5 gx-5">
            <div className="col-12 col-lg-6">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control mb-2" type="text" name="name" />
                        <label className="form-label">Email</label>
                        <input className="form-control mb-2" type="email" name="email" />
                        <label className="form-label">Message</label>
                        <textarea className="form-control" name="message" rows={5} />
                    </div>
                    <button className="btn btn-primary col-12" type="submit">Send Message</button>
                </form>
            </div>
            <div className="col-12 col-lg-6 ps-5">
                <ContactInfoItem name="Address" data="Lurin, Lima, Perú">
                    <LocationOn className="m-auto" />
                </ContactInfoItem>
                <ContactInfoItem name="Phone" data="+51 981 830 913">
                    <Call className="m-auto" />
                </ContactInfoItem>
                <ContactInfoItem name="E-Mail" data="royhuamanavila@gmail.com">
                    <Email className="m-auto" />
                </ContactInfoItem>
            </div>
        </div>
    )
}

const ContactInfoItem: FC<ContactInfoType> = ({ name, data, children }) => {
    return (
        <div className="d-flex gap-3 mb-3">
            <div style={{ width: '56px', height: '56px' }} className="bg-light p-2 rounded-2 d-flex text-primary">
                {children}
            </div>
            <div>
                <p className="fw-semibold m-0">{name}</p>
                <p className="text-muted">{data}</p>
            </div>
        </div>
    )
}
export default Contact;
