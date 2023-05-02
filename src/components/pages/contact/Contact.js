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

  // TODO SAVE FORM STATES

  // HANDLE FUNCTION
  // TODO Handle function to save state onChange inputs
  // const handleChangeName = e => {
  //   setState({ ...state, name: e.target.value });
  // };
  // const handleChangeEmail = e => {
  //   setState({ ...state, email: e.target.value });
  // };
  // const handleChangeMessage = e => {
  //   setState({ ...state, message: e.target.value });
  // };
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // MAIN RENDER
  return (
    <ContactContainer>
      <Greetings>Let's talk!</Greetings>
      <FormContainer>
        <InputStyle type="form" name="name" placeholder="Name" onChange={handleChange} />
        <InputStyle type="text" name="email" placeholder="Mail" onChange={handleChange} />
        <TextArea id="textarea" name="message" cols="30" rows="10" placeholder="Message" onChange={handleChange} />
        <BtnSend state={state} />
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
