import React from 'react';
import './About.css';

const About = () => (
    <section id="sobre-mi">
        <div className="about-me">
            <div className='profile'>
            <img src="images/yo.png" alt="Foto de lalailamas" className="profile-photo" />
            <h2>¡Hola! Soy <strong>lalailamas✨</strong> </h2>
            </div>
            <p className='description'>Hija de dos desarrolladores y probablemente futura madre de uno. Esta carrera me ha
                brindado el equilibrio que necesitaba en mi vida, permitiéndome combinar mi pasión por la tecnología con mi
                deseo de constante aprendizaje y crecimiento personal.</p>
        </div>
        {/* <h4>Intereses</h4>
        <p>Estoy especialmente interesada en proyectos de código abierto. Creo firmemente en la colaboración y en la
            construcción de comunidades que compartan conocimientos y recursos para crear soluciones innovadoras y
            accesibles para todos.</p>
        <h4>Habilidades Blandas en el Trabajo</h4>
        <p>En el ámbito profesional, destaco por mi positivismo y mi iniciativa. No tengo miedo de proponer nuevas ideas y
            cuestionar lo establecido para mejorar procesos y productos. Me esfuerzo por mantener una actitud abierta y
            colaborativa, siempre dispuesta a aprender de los demás y a contribuir con mi propio conocimiento.</p>
        <h4>Datos Curiosos</h4>
        <p>Un dato curioso sobre mí es que trabajé como gerente en una cervecería y, curiosamente, ¡no puedo beber cerveza!
            🍺 Esta experiencia me enseñó mucho sobre gestión, liderazgo y el valor de un equipo bien coordinado.</p> */}
    </section>
);

export default About;
