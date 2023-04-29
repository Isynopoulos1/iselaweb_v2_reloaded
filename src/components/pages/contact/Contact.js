import React from "react";

//IMPORT STYLES
import { ContactContainer, Greetings, formContainer } from "./Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <Greetings>Let's talk!</Greetings>
      <formContainer>
        <input type="form" placeholder="Name" />
        <input type="text" placeholder="Meesagge" />
      </formContainer>
    </ContactContainer>
  );
};

export default Contact;
