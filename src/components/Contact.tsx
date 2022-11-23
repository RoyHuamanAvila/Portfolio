import { LocationOn, Call, Email } from "@mui/icons-material";
import { FC, SyntheticEvent } from "react";
import { ContactFormType, ContactInfoType } from "../types";

const Contact = () => {

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & ContactFormType;

        const data = {
            name: target.name.value,
            email: target.email.value,
            message: target.message.value
        }

        const dataJson = JSON.stringify(data);

        const fetchEmail = await fetch(`https://us-central1-portfolio-ff801.cloudfunctions.net/api/send-email`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: dataJson,
        })

        const content = await fetchEmail.json();
        console.log(content);
    }

    return (
        <div className="row py-5 my-5 gx-5" id="Contact">
            <div className="col-12 col-lg-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control mb-2" type="text" name="name" required />
                        <label className="form-label">Email</label>
                        <input className="form-control mb-2" type="email" name="email" required />
                        <label className="form-label">Message</label>
                        <textarea className="form-control" name="message" rows={5} required />
                    </div>
                    <button className="btn btn-primary col-12 text-white" type="submit">Send Message</button>
                </form>
            </div>
            <div className="col-12 col-lg-6 ps-5 pt-5 pt-lg-0">
                <ContactInfoItem
                    name="Address"
                    data="Lurin, Lima, Perú"
                    link="https://goo.gl/maps/RZLXPVT4zsnfV82t6"
                >
                    <LocationOn className="m-auto" />
                </ContactInfoItem>
                <ContactInfoItem
                    name="Phone"
                    data="+51 981 830 913"
                    link="https://wa.me/51981830913?text=Hola quisiera contactar contigo"
                >
                    <Call className="m-auto" />
                </ContactInfoItem>
                <ContactInfoItem
                    name="E-Mail"
                    data="info@royandresdev.com"
                    link="mailto: info@royandresdev.com"
                >
                    <Email className="m-auto" />
                </ContactInfoItem>
            </div>
        </div>
    )
}

const ContactInfoItem: FC<ContactInfoType> = ({ name, data, children, link }) => {
    return (
        <div className="d-flex gap-3 mb-3">
            <div style={{ width: '56px', height: '56px' }} className="bg-light p-2 rounded-2 d-flex text-primary">
                {children}
            </div>
            <div>
                <p className="fw-semibold m-0">{name}</p>
                <a href={link} target={"_blank"} className="text-decoration-none text-muted">{data}</a>
            </div>
        </div>
    )
}
export default Contact;
