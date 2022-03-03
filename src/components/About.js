import Wave from './Wave';
import { AboutSection, Description, Image, Hide } from '../assets/styles/styles';
import { titleAnimation, fade, photoAnimation } from '../assets/animation';
import yo from '../assets/img/yo.jpeg';
import euu from '../assets/img/euu.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
            <motion.h2 variants={titleAnimation}>y soy una desarrolladora web.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p>En la sección de Proyectos están distintos programas que he hecho.</motion.p>
        <motion.button variants={fade}>
          <Link to="/portafolio/projects">Proyectos</Link>
        </motion.button>
      </Description>
      <Image>
        <motion.img src={euu} alt="yo" variants={photoAnimation} />
      </Image>

      <Wave />
    </AboutSection>
  );
};
export default About;
