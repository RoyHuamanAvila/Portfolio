import { LocationOn, Call, Email } from "@mui/icons-material";
import { FC, SyntheticEvent, useState } from "react";
import { ContactFormType, ContactInfoType } from "../types";
import swal from "sweetalert";

const Contact = () => {
    const [disabledForm, setDisabledForm] = useState<boolean>(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setDisabledForm(true);

        const target = e.target as typeof e.target & ContactFormType;

        const data = {
            name: target.name.value,
            email: target.email.value,
            message: target.message.value
        }

        const dataJson = JSON.stringify(data);

        await fetch(`https://us-central1-portfolio-ff801.cloudfunctions.net/api/send-email`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: dataJson,
        }).then((response => {
            setDisabledForm(false)
            swal("Message sent!", "You clicked the button!", "success");
            target.name.value = '';
            target.email.value = '';
            target.message.value = '';
        }))
    }

    return (
        <div className="row py-5 my-5 gx-lg-5" id="Contact">
            <div className="col-12 col-lg-6">
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={disabledForm}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input className="form-control mb-2" type="text" id="name" name="name" required />
                            <label htmlFor="email" className="form-label">Email</label>
                            <input className="form-control mb-2" type="email" id="email" name="email" required />
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" name="message" id="message" rows={5} required />
                        </div>
                        <button className="btn btn-primary col-12 text-white" type="submit">Send Message</button>
                    </fieldset>
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
                    data="+51 962 855 883"
                    link="https://wa.me/51962855883?text=Hola quisiera contactar contigo"
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
