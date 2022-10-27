import { Logo } from "./styles/Header.styled";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { A, Design, P, Social } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <>
      <div>
        <Logo src="./images/logo_white.png" />
      </div>
      <Design>
        <div>
          <P>1775 Tysons Blvd. 5th Floor. </P> <P>Tysons, VA 22102</P>
          <P>+1 (571) 360 66 77</P> <P>contact@clarusway.com</P>
        </div>
        <div>
          <P>About Us</P> <P>What We Do</P> <P>FAQ</P>
        </div>
        <div>
          <P>Career</P> <P>Blog</P> <P>Contact Us</P>
        </div>
        <Social>
          <A href="https://twitter.com/" target="_blank">
            <h1>
              <SlSocialTwitter />
            </h1>
          </A>

          <A href="https://www.facebook.com/" target="_blank">
            <h1>
              <AiOutlineFacebook />
            </h1>
          </A>
          <A href="https://www.linkedin.com/" target="_blank">
            <h1>
              <AiOutlineLinkedin />
            </h1>
          </A>
        </Social>
      </Design>
    </>
  );
};

export default Footer;
