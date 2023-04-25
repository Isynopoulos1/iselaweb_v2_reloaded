import React from "react";

//IMPORT STYLES
import { AboutContainer, Bio, Picture, Greetings, Description } from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <Picture id="image " src="https://ik.imagekit.io/ppayaz/iselalarcon/about/profilenuevo_1_qOOqdg9pg.jpg?updatedAt=1681467409389" />
      <Bio>
        <Greetings>Hello there! </Greetings>
        <Description>
          <li> I'm Isela, a Product Designer and Frontend Developer that feels passionate for design, arts, and technology. </li>
          <li>
            With a background in digital, I've worked for over ten years in digital advertising agencies, where I had the chance to design for
            different international brands such as Paypal, Movistar, and Amazon.
          </li>
          <li>In 2020, I moved to Barcelona to jump into the technology field. </li>
          <li>
            My curiosity and interest in Web development took me to learn new tools such as HTML, CSS, SASS, and languages as Javascript with
            libraries such as React and Nodejs.
          </li>
          <li>One of the things that I enjoy the most is building sites and implementing a design system. 🔺 ◼️ 🔹</li>
        </Description>
      </Bio>
    </AboutContainer>
  );
};

export default About;
