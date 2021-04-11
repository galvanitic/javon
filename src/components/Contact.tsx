import * as React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import logo from '../img/logo-template@0.25x.png'
interface IContactProps {
}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <div id="contact">
      <div id="logo">
        <img src={logo} alt="Javon Icon"/>
      </div>
      <div id="info">
        <ul>
          <li><a href="http://www.instagram.com/JavonSaucedo3/"><InstagramIcon /> Instagram</a></li>
          <li><a href="https://www.facebook.com/javon.saucedo"><FacebookIcon /> Facebook</a></li>
          <li><a href="mailto:javondesigns3@gmail.com"><EmailIcon /> Email</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
