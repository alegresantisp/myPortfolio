'use client'
import React, { useState } from 'react'
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import { GrCertificate } from "react-icons/gr";
import Flag from 'react-world-flags';


function MyComponent() {
  const [isSpanish, setIsSpanish] = useState(true)

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish)
  }

  const content = {
    es: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
      myProjects: 'Mis Proyectos',
      espec: 'Desarrollador Full Stack especializado en Front End',
      ribuzz: 'Ribuzz',
      viewProject: 'Ver Proyecto',
      aboutMeTitle: 'Sobre mí',
      aboutMeCards: [
        {
          title: 'Residencia actual',
          description: 'Vivo en Buenos Aires, Argentina.'
        },
        {
          title: 'Virtudes',
          description: 'Curioso, trabajador, empático.'
        },
        {
          title: 'Nivel de Inglés',
          description: 'Nivel C2, dominio del idioma.',
          pdfLink: '/certificate.pdf',
        },
        // Agrega más tarjetas según lo necesario
      ],
      mySocialMedia: 'Mis Redes Sociales',
      footer: 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito. - Albert Schweitzer'
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      myProjects: 'My Projects',
      espec: 'Full Stack Developer specialized in Front End',
      ribuzz: 'Ribuzz',
      viewProject: 'View Project',
      aboutMeTitle: 'About Me',
      aboutMeCards: [
        {
          title: 'Current Residence',
          description: 'I live in Buenos Aires, Argentina.'
        },
        {
          title: 'Strengths',
          description: 'Curious, hardworking, empathetic.'
        },
        {
          title: 'English Proficiency',
          description: 'C2 level, proficient in the language.',
          pdfLink: '/certificate.pdf',
        },
        // Add more cards as needed
      ],
      mySocialMedia: 'My Social Media',
      footer: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer'
    }
  }
  
  

  const t = isSpanish ? content.es : content.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-800 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="px-4 py-1 mt-2 bg-gradient-to-br from-purple-900 to-purple-900 inline-block rounded-xl shadow-lg sticky top-0 left-1/2 transform -translate-x-1/2">
        <ul className="flex justify-center space-x-8">
          {[t.home, t.projects, t.about, t.contact].map((item, index) => (
            <li key={index} className="relative group">
              <a href={`#${item.toLowerCase()}`} className="text-xl hover:text-purple-300 transition-colors duration-300">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language Toggle */}
      <div className="flex justify-center my-4">
          <button
            onClick={toggleLanguage}
            className="bg-purple-500 rounded-full p-2 hover:bg-purple-600 transition-colors duration-300"
            aria-label={isSpanish ? 'Switch to English' : 'Switch to Spanish'}
          >
            {isSpanish ? (
              <Flag code="US" alt="English flag" className="w-6 h-6" />
            ) : (
              <Flag code="AR" alt="Spanish flag" className="w-6 h-6" />
            )}
          </button>
        </div>
      {/* Hero Section */}
      <section id={t.home.toLowerCase()} className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="flex items-center max-w-5xl mx-auto">
          <div className="flex-shrink-0 mr-8">
            <Image 
              src="/imagen1.jfif"  
              alt="Santiago Alegre" 
              width={300} 
              height={300} 
              className="rounded-full w-64 h-64 object-cover"
            />
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-2">Santiago Alegre</h1>
            <p className="text-xl mb-4">{t.espec}</p>
            <div className="flex space-x-4 ">
              <SiNextdotjs size={24} />
              <FaReact size={24} />
              <SiTailwindcss size={24} />
              <IoLogoCss3 size={24} />
              <FaGithub size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id={t.projects.toLowerCase()} className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">{t.myProjects}</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-700 rounded-lg p-4 cursor-pointer w-64 h-64 flex flex-col">
            <Image
              src="/ribuzz.webp"
              alt="Ribuzz Project"
              width={150}
              height={150}
              className="rounded object-cover mb-4 w-full h-full"
            />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{t.ribuzz}</h3>
              <a href="https://ribuzz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">{t.viewProject}</a>
            </div>
          </div>
          {/* Agrega más componentes de proyectos aquí */}
        </div>
      </section>

      {/* About Me Section */}
      <section id={t.about.toLowerCase()} className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">{t.aboutMeTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.aboutMeCards.map((card, index) => (
              <div
                key={index}
                className="rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-center mb-2">{card.title}</h3>
                <p className="text-gray-300 text-center">{card.description}</p>
                {/* Verifica si la tarjeta tiene un enlace al PDF */}
                {card.pdfLink && (
                  <div className="text-center mt-4">
                    <a
                      href={card.pdfLink}
                      className="text-white-400 hover:text-purple-300 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* Hacemos el ícono más grande y lo centramos */}
                      <GrCertificate className="mx-auto text-4xl" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>




      {/* Social Media Section */}
      <section id={t.contact.toLowerCase()} className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">{t.mySocialMedia}</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/alegresantisp" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-purple-300 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/santiago-alegre-67b288193" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-purple-300 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/santialegree/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-purple-300 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="mailto:alegresantisp@gmail.com" className="text-4xl hover:text-purple-300 transition-colors duration-300">
            <MdEmail />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-8">
        <p className="text-gray-300 italic">
          {t.footer}
        </p>
      </footer>
    </div>
  )
}

export default MyComponent
