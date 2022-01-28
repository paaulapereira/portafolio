//import sections
import About from "../components/About";
import Questions from "../components/Questions";
import Languages from "../components/Languages";
//import animations
import { motion } from "framer-motion";
import { pageAnimation } from "../assets/animation";
//import components
import Scroll from "../components/Scroll";

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <Languages />
      <Questions />
      <Scroll />
    </motion.div>
  );
};
export default AboutMe;
