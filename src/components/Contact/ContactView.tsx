import "./Contact.scss";
import { LocationOn, Call, Email } from "@mui/icons-material";
import { FC, SyntheticEvent } from "react";
import ContactInfoItem from "./ContactInfoItem";

interface ContactViewProps {
    handleSubmit: (e: SyntheticEvent) => void;
    disabledForm: boolean;
}

const ContactView: FC<ContactViewProps> = ({ handleSubmit, disabledForm }) => {
    return (
        <div className="row py-5 my-5 gx-lg-5 Contact" id="Contact">
            <div className="col-12 col-lg-6">
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={disabledForm}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Nombre
                            </label>
                            <input
                                className="form-control mb-2"
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                            <label htmlFor="email" className="form-label">
                                Correo
                            </label>
                            <input
                                className="form-control mb-2"
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                            <label htmlFor="message" className="form-label">
                                Mensaje
                            </label>
                            <textarea
                                className="form-control"
                                name="message"
                                id="message"
                                rows={5}
                                required
                            />
                        </div>
                        <button className="btn btn-primary col-12 text-white" type="submit">
                            Enviar Mensaje
                        </button>
                    </fieldset>
                </form>
            </div>
            <div className="col-12 col-lg-6 ps-5 pt-5 pt-lg-0">
                <ContactInfoItem
                    name="Dirección"
                    data="Lurin, Lima, Perú"
                    link="https://goo.gl/maps/RZLXPVT4zsnfV82t6"
                >
                    <LocationOn className="m-auto" />
                </ContactInfoItem>
                <ContactInfoItem
                    name="Celular"
                    data="+51 962 855 883"
                    link="https://wa.me/51962855883?text=Hola quisiera contactar contigo"
                >
                    <Call className="m-auto" />
                </ContactInfoItem>
                <ContactInfoItem
                    name="Correo"
                    data="info@royandresdev.com"
                    link="mailto: info@royandresdev.com"
                >
                    <Email className="m-auto" />
                </ContactInfoItem>
            </div>
        </div>
    );
};

export default ContactView;
