//estilos
import styled from 'styled-components';
import { AboutSection } from '../assets/styles/styles';
//componentes
import Toggle from './Toggle';
//animaciones
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../assets/animation';

const Questions = () => {
  //llamamos al hook personalizado que he creado
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
      <h2>
        Sobre mí <span>curiosidades</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Presentación">
          <div className="answer">
            <p>
              Soy una estudiante de Ingeniería Informática con más de 3 años de experiencia
              trabajando a tiempo parcial en Frontend. Me encanta el diseño y el desarrollo web y
              busco siempre la solución más eficaz para los desafíos que surgen en el trabajo,
              gestionando bien el tiempo y manteniendo siempre un punto de vista proactivo. La
              comunicación, uno de mis puntos fuertes, me permite llevar a cabo buenas
              negociaciones.
            </p>
          </div>
        </Toggle>
        <Toggle title="Formación Académica">
          <div className="answer">
            <p>
              Estudiante de Ingeniería Informática, cursando el último curso en la Universidad
              Europea del Atlántico, en Santander, Cantabria.
            </p>
            <p>Empecé en Septiembre de 2018 y me graduo en Junio de 2022.</p>
          </div>
        </Toggle>
        <Toggle title="Experiencia Laboral">
          <div className="answer">
            <p>
              Empecé a trabajar como Desarrolladora y Diseñadora Web en Septiembre de 2018 para{' '}
              <i>Fundación Iberoamericana Universitaria - FUNIBER</i> y sigo hasta la actualidad.
              Algunas de las cosas que hice en ese trabajo fueron:
            </p>
            <ul>
              <li>
                Desarrollo de aplicaciones web funcionales, utilizando React, Redux, HTML, SCSS o
                StyledComponents.
              </li>
              <li>Diseño de páginas web a partir de requisitos funcionales en Figma.</li>
              <li>
                Desarrollo de estilos (CSS o SASS) y HTML5 a partir de diseños y proyectos ya
                definidos.
              </li>
              <li>
                Creación de e-mailings para envíos masivos, con ZURB “foundation emails template”.
              </li>
              <li>Gestión y mantenimiento de páginas webs basadas en Wordpress y Drupal.</li>
              <li>
                Trabajo en equipo basado en Metodologías Ágiles - Scrum, como chapter de Frontend
              </li>
              <li>Trato directo con los clientes para toma de requisitos y ajustes de cambios. </li>
            </ul>
          </div>
        </Toggle>
        <Toggle title="Idiomas">
          <div className="answer">
            <p>Mi lengua materna es el Portugués.</p>
            <p>Además, soy fluente en Español, y en Inglés soy nivel C1.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(AboutSection)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    ul {
      padding: 0rem 1.5rem;
    }
    li {
      font-size: 1.4rem;
      line-height: 150%;
      color: #cccccc;
      padding: 0.2rem 0rem;
    }
  }
`;

export default Questions;
