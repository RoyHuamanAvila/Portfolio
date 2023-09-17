import { SyntheticEvent, useState } from "react";
import ContactView from "./ContactView"
import { ContactFormType } from "../../types";
import swal from "sweetalert";

const ContactContainer = () => {

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

  return <ContactView disabledForm={disabledForm} handleSubmit={handleSubmit} />
}

export default ContactContainer
