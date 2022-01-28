import Wave from "./Wave";
import {
  AboutSection,
  Description,
  Image,
  Hide,
} from "../assets/styles/styles";
import { titleAnimation, fade, photoAnimation } from "../assets/animation";
import yo from "../assets/img/yo.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <AboutSection>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>¡Hola! me llamo</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Paula de Costa Pereira</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              y soy una desarrolladora web.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p>
          En la sección de Projects están distintos proyectos que he hecho.
        </motion.p>
        <motion.button variants={fade}>
          <Link to="/portafolio/projects">Projects</Link>
        </motion.button>
      </Description>
      <Image>
        <motion.img src={yo} alt="yo" variants={photoAnimation} />
      </Image>

      <Wave />
    </AboutSection>
  );
};
export default About;
