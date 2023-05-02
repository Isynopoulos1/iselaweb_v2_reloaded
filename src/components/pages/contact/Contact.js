import React from "react";
//IMPORT STYLES
import { ContactContainer, Greetings, FormContainer, InputStyle, TextArea } from "./Contact.styles";

//IMPORT COMPONENTS
import BtnSend from "../../btnSend/BtnSend";

const Contact = () => {
  return (
    <ContactContainer>
      <Greetings>Let's talk!</Greetings>
      <FormContainer>
        <InputStyle type="form" placeholder="Name" />
        <InputStyle type="text" placeholder="Mail" />
        <TextArea name="Message" id="textarea" cols="30" rows="10" defaultValue="Message " />
        <BtnSend />
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
