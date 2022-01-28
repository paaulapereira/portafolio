//estilos y animaciones
import styled from "styled-components";
import { AboutSection, Description } from "../assets/styles/styles";
import { fade } from "../assets/animation";
import { motion } from "framer-motion";
//iconos
import reactIcon from "../assets/img/reactIcon.svg";
import jsIcon from "../assets/img/jsIcon.svg";
import html5 from "../assets/img/html5.svg";
import sass from "../assets/img/sass.svg";
import css3 from "../assets/img/css3.svg";
import figma from "../assets/img/figma.svg";
import mongodb from "../assets/img/mongodb.svg";
import node from "../assets/img/node.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import git from "../assets/img/git.svg";

const Languages = () => {
  return (
    <Habilities>
      <Description>
        <h2>
          Tengo <span>habilidades</span> en
        </h2>
        <Cards>
          <Card variants={fade}>
            <div className="icon">
              <img src={reactIcon} alt="react" />
              <h3>React</h3>
            </div>
            <p>Framework de JS</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={jsIcon} alt="react" />
              <h3>JavaScript</h3>
            </div>
            <p>Programación Web</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={html5} alt="react" />
              <h3>HTML5</h3>
            </div>
            <p>Maquetación Web</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={sass} alt="react" />
              <h3>Sass</h3>
            </div>
            <p>CSS con superpoderes</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={css3} alt="react" />
              <h3>CSS</h3>
            </div>
            <p>Estilos para el HTML</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={node} alt="react" />
              <h3>Node.js</h3>
            </div>
            <p>Entorno de ejecución </p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={mongodb} alt="react" />
              <h3>MongoDB</h3>
            </div>
            <p>Bases de datos</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={figma} alt="react" />
              <h3>Figma</h3>
            </div>
            <p>Diseño de Interfaces</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={bootstrap} alt="react" />
              <h3>Bootstrap</h3>
            </div>
            <p>Framework de estilos</p>
          </Card>
          <Card variants={fade}>
            <div className="icon">
              <img src={git} alt="react" />
              <h3>Git</h3>
            </div>
            <p>Control de versiones</p>
          </Card>
        </Cards>
      </Description>
    </Habilities>
  );
};

const Habilities = styled(AboutSection)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled(motion.div)`
  flex-basis: 18rem;
  .icon {
    display: flex;
    align-items: center;
    img {
      width: 50px;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  p {
    width: 100%;
  }
`;

export default Languages;
