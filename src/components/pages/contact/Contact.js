import React from "react";

//IMPORT STYLES
import { ContactContainer, Greetings, formContainer } from "./Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <Greetings>Let's talk!</Greetings>
      <formContainer>
        <input type="form" placeholder="Name" />
        <input type="text" placeholder="Mail" />
        <textarea name="Message" id="" cols="30" rows="10">
          Message
        </textarea>
      </formContainer>
    </ContactContainer>
  );
};

export default Contact;
