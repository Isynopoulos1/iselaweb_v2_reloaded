import React, { useState } from "react";
//IMPORT STYLES
import { ContactContainer, Greetings, FormContainer, InputStyle, TextArea } from "./Contact.styles";

//IMPORT COMPONENTS
import BtnSend from "../../btnSend/BtnSend";

const Contact = () => {
  // HOOKS
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  // HANDLE FUNCTION
  // const handleName = e => {
  //   setState({ ...state, name: e.target.value });
  // };

  // const handleMail = e => {
  //   setState({ ...state, email: e.target.value });
  // };
  // const handleMessage = e => {
  //   setState({ ...state, message: e.target.value });
  // };

  const handleEvent = e => {
    setState({ ...state, [e.target.name]: [e.target.value] });
  };

  // MAIN RENDER
  return (
    <ContactContainer>
      <Greetings>Let's talk!</Greetings>
      <FormContainer>
        <InputStyle type="form" name="name" placeholder="Name" onChange={handleEvent} />
        <InputStyle type="text" name="email" placeholder="Mail" onChange={handleEvent} />
        <TextArea id="textarea" name="message" cols="30" rows="10" placeholder="Message" onChange={handleEvent} />
        <BtnSend state={state} />
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
