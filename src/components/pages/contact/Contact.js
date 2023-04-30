import React from "react";
import { ContactContainer, Greetings, FormContainer, InputStyle, TextArea } from "./Contact.styles";
//IMPORT STYLES

const Contact = () => {
  return (
    <ContactContainer>
      <Greetings>Let's talk!</Greetings>
      <FormContainer>
        <InputStyle type="form" placeholder="Name" />
        <InputStyle type="text" placeholder="Mail" />
        <TextArea name="Message" id="textarea" cols="30" rows="10" defaultValue="Initial value" />
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
