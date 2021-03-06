import styled from 'styled-components';
import { motion } from 'framer-motion';
//animaciones
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from '../assets/animation';
//imagenes
import miniMusicLibrary from '../assets/img/miniMusicLibrary.png';
import ignite from '../assets/img/ignite.jpeg';
import chat from '../assets/img/chat.png';
import candyCrush from '../assets/img/candyCrush.png';
import ticTacToe from '../assets/img/ticTacToe.png';
import taskfy from '../assets/img/taskfy.png';
import { useScroll } from '../components/useScroll';
import Scroll from '../components/Scroll';

const Projects = () => {
  //creamos los controladores para el  scroll
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  return (
    <ProjectsSection variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Project variants={fade}>
        <motion.h2 variants={fade}>Mini Music Library</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <a
          href="https://paaulapereira.github.io/react-music-library/"
          target="_blank"
          rel="noreferrer"
        >
          <Hide>
            <motion.img variants={photoAnimation} src={miniMusicLibrary} alt="miniMusicLibrary" />
          </Hide>
        </a>
      </Project>
      <Project ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>Ignite Games</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <a href="https://react-gamesignite.netlify.app/" target="_blank" rel="noreferrer">
          <Hide>
            <motion.img variants={photoAnimation} src={ignite} alt="ignite games" />
          </Hide>
        </a>
      </Project>
      <Project ref={element2} variants={fade} animate={controls2} initial="hidden">
        <motion.h2 variants={fade}>Web Chat with Socket.io and Node.js</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <a href="https://simplechat-socket-react.netlify.app/" target="_blank" rel="noreferrer">
          <Hide>
            <motion.img variants={photoAnimation} src={chat} alt="socket chat" />
          </Hide>
        </a>
      </Project>
      <Project ref={element4} variants={fade} animate={controls4} initial="hidden">
        <motion.h2 variants={fade}>Tic Tac Toe</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <a
          href="https://paaulapereira.github.io/tic-tac-toe-react/"
          target="_blank"
          rel="noreferrer"
        >
          <Hide>
            <motion.img variants={photoAnimation} src={ticTacToe} alt="tic tac toe" />
          </Hide>
        </a>
      </Project>
      <Project ref={element3} variants={fade} animate={controls3} initial="hidden">
        <motion.h2 variants={fade}>Candy Crush Game with JavaScript</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <a
          href="https://paaulapereira.github.io/candy-crush-javascript/"
          target="_blank"
          rel="noreferrer"
        >
          <Hide>
            <motion.img variants={photoAnimation} src={candyCrush} alt="candy crush" />
          </Hide>
        </a>
      </Project>
      <Project ref={element5} variants={fade} animate={controls5} initial="hidden">
        <motion.h2 variants={fade}>Taskfy with Typescript</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <a
          href="https://paaulapereira.github.io/taskify-typescript/"
          target="_blank"
          rel="noreferrer"
        >
          <Hide>
            <motion.img variants={photoAnimation} src={taskfy} alt="taskfy" />
          </Hide>
        </a>
      </Project>

      <Scroll />
    </ProjectsSection>
  );
};

const ProjectsSection = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//rainbow animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
