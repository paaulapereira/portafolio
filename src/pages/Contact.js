//animaciones
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnimation, titleAnimation } from "../assets/animation";
//iconos
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import scroll from "../assets/img/scroll.svg";

const Contact = () => {
  return (
    <ContactMe
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Info>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Entre en <span>contacto</span>
            </motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnimation}>
              <Circle>
                <img src={linkedin} alt="Linkedin" />
              </Circle>
              <h2>
                <a href="https://www.linkedin.com/in/paula-de-costa-pereira-824102222/">
                  Linkedin
                </a>
              </h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnimation}>
              <Circle>
                <img src={github} alt="github" />
              </Circle>
              <h2>
                <a href="https://github.com/paaulapereira">GitHub</a>
              </h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnimation}>
              <Circle>
                {" "}
                <img src={scroll} alt="github" />
              </Circle>
              <h2>
                <a href="https://www.figma.com/file/i5gMKwxlrSHn28aVVxhtU1/Curriculum-Vitae-Paula-de-Costa-Pereira?node-id=0%3A1">
                  Curriculum Vitae
                </a>
              </h2>
            </Social>
          </Hide>
        </div>
      </Info>
      <iframe
        title="Mi curriculum vitae"
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="600"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fi5gMKwxlrSHn28aVVxhtU1%2FCurriculum-Vitae-Paula-de-Costa-Pereira%3Fnode-id%3D0%253A1"
        allowFullScreen
      ></iframe>
    </ContactMe>
  );
};

const ContactMe = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  font-family: "Inter", sans-serif;
  display: flex;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
  h2 {
    font-weight: lighter;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 4rem;
    color: white;
  }
  a:hover {
    color: #23d997;
  }
`;
const Info = styled.div`
  margin-right: 2rem;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  span {
    color: #23d997;
  }
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default Contact;
