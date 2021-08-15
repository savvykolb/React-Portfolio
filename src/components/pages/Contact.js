import '../styles/Style.css';
import { BsFillEnvelopeOpenFill } from "react-icons/bs"
import { BsPhone } from "react-icons/bs"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';


function Contact() {
  return (
    <section id="contact" class="contact section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
        <p>Interested in working together? Let's connect and create something cool! </p>
        <br></br>
        <div class="social-links">
          <a target='_blank' rel="noreferrer" href="tel:336-707-0007" class="phoneNumber"><BsPhone /></a>
          <a target='_blank' rel="noreferrer" href="mailto:savannahnkolb@gmail.com" class="email"><BsFillEnvelopeOpenFill /></a>
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/savannah-kolb-11a128208/"class="linkedin"><FaLinkedin /></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/snk923" class="gitHub"><FaGithub /></a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contact;
