import React from 'react'
import './Projects.css'

const Projects = () => (
  <section id='projects'>
    <h2>PROYECTOS</h2>

    <div className='project'>
      <img src='./images/cinephiles.png' alt='Cinephiles' class='project-image' />
      <div class='project-content'>
        <h3>
          <a href='https://github.com/lalailamas/Cinephiles' class='project-link'>
            Cinephiles
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16'>
              <g fill='#ffffff' fill-rule='evenodd' clip-rule='evenodd'>
                <path d='M8.914 6.025a.75.75 0 0 1 1.06 0a3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402a.75.75 0 0 1 1.251.827a2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828a.75.75 0 0 1 0-1.06' />
                <path d='M7.086 9.975a.75.75 0 0 1-1.06 0a3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402a.75.75 0 0 1-1.251-.827a2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828a.75.75 0 0 1 0 1.06' />
              </g>
            </svg>
          </a>
        </h3>
        <p>Aplicación móvil consumiendo una API para obtener películas, reseñas, y rankings. Permite filtrar, ordenar y buscar.</p>
        <p>Tools: React, Javascript, TailwindCSS, Firebase Hosting, Vite</p>
      </div>
    </div>

    <div className='project'>
      <img src='./images/building.png' alt='Cinephiles' class='project-image' />

      <div class='project-content'>
        <h3>
          <a href='https://github.com/lalailamas/DEV006-social-network' class='project-link'>
            Community of Buildings
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16'>
              <g fill='#ffffff' fill-rule='evenodd' clip-rule='evenodd'>
                <path d='M8.914 6.025a.75.75 0 0 1 1.06 0a3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402a.75.75 0 0 1 1.251.827a2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828a.75.75 0 0 1 0-1.06' />
                <path d='M7.086 9.975a.75.75 0 0 1-1.06 0a3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402a.75.75 0 0 1-1.251-.827a2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828a.75.75 0 0 1 0 1.06' />
              </g>
            </svg>
          </a>
        </h3>
        <p>Aplicación móvil tipo red social para residentes de una comunidad, permitiendo la interacción para compra, venta, arrendamiento y expresión de opiniones.</p>
      </div>
    </div>
    <div className='project'>
      <img src='./images/harry-mamis.png' alt='Cinephiles' class='project-image' />

      <div class='project-content'>

        <h3>
          <a href='https://github.com/lalailamas/DEV006-data-lovers?tab=readme-ov-file' class='project-link'>
            Harry Mamis
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 16 16'>
              <g fill='#ffffff' fill-rule='evenodd' clip-rule='evenodd'>
                <path d='M8.914 6.025a.75.75 0 0 1 1.06 0a3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402a.75.75 0 0 1 1.251.827a2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828a.75.75 0 0 1 0-1.06' />
                <path d='M7.086 9.975a.75.75 0 0 1-1.06 0a3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402a.75.75 0 0 1-1.251-.827a2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828a.75.75 0 0 1 0 1.06' />
              </g>
            </svg>
          </a>
        </h3>
        <p>Aplicación responsiva que explora el mundo de Harry Potter, incluyendo personajes, pociones, libros y hechizos, con funcionalidades de filtrado, ordenamiento y búsqueda.</p>
      </div>
    </div>

  </section>
)

export default Projects
