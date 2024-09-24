'use client'
import React, { useState } from 'react'
import { FaReact, FaGithub, FaLinkedin, FaInstagram, FaNode  } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { DiGit } from 'react-icons/di';
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
      habitTracker: 'Habit Tracker',
      VDM: 'VDM',
      ribuzz: 'Ribuzz',
      viewProject: 'Ver Proyecto',
      aboutMeTitle: 'Sobre mí',
      aboutMeCards: [
        {
          title: 'Residencia actual',
          description: 'Vivo en Buenos Aires, Argentina.'
        },
        {
          title: 'Nivel de Inglés',
          description: 'Nivel C2, dominio del idioma.',
          pdfLink: '/certificate.pdf',
        },
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
      habitTracker: 'Habit Tracker',
      VDM: 'VDM',
      ribuzz: 'Ribuzz',
      viewProject: 'View Project',
      aboutMeTitle: 'About Me',
      aboutMeCards: [
        {
          title: 'Current Residence',
          description: 'I live in Buenos Aires, Argentina.'
        },
        {
          title: 'English Proficiency',
          description: 'C2 level, proficient in the language.',
          pdfLink: '/certificate.pdf',
        },
      ],
      mySocialMedia: 'My Social Media',
      footer: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer'
    }
  }
  
  const t = isSpanish ? content.es : content.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-800 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="px-4 py-2 bg-gradient-to-br from-purple-900 to-purple-900 rounded-xl shadow-lg sticky top-0 w-full z-50">

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            {[t.home, t.projects, t.about, t.contact].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-sm sm:text-xl hover:text-purple-300 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section id={t.home.toLowerCase()} className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-start max-w-5xl mx-auto">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
            <Image 
              src="/imagen1.png"  
              alt="Santiago Alegre" 
              width={400} 
              height={400} 
              className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Santiago Alegre</h1>
            <p className="text-lg sm:text-xl mb-4">{t.espec}</p>
            <div className="flex justify-center sm:justify-start space-x-4">
            <SiNextdotjs size={24} />
              <FaReact size={24} />
              <SiTailwindcss size={24} />
              <IoLogoCss3 size={24} />
              <FaGithub size={24} />
              <SiTypescript size={24} />
              <FaNode size={24} />
              <SiMongodb size={24} />
              <SiFirebase size={24} />
              <DiGit size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id={t.projects.toLowerCase()} className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t.myProjects}</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-700 rounded-lg p-4 cursor-pointer w-full sm:w-64 h-64 flex flex-col">
            <Image
              src="/ribuzz.webp"
              alt="Ribuzz Project"
              width={150}
              height={150}
              className="rounded object-cover mb-4 w-full h-full"
            />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-semibold">{t.ribuzz}</h3>
              <a href="https://ribuzz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">{t.viewProject}</a>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 cursor-pointer w-full sm:w-64 sm:mt-2 h-64 flex flex-col">
            <Image
              src="/HT.jpeg"
              alt="Habit Tracker"
              width={150}
              height={150}
              className="rounded object-cover mb-4 w-full h-full"
            />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-semibold">{t.habitTracker}</h3>
              <a href="https://habits-sandy-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">{t.viewProject}</a>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 cursor-pointer w-full sm:w-64 sm:mt-2 h-64 flex flex-col">
            <Image
              src="/foto1.jpeg"
              alt="VDM"
              width={150}
              height={150}
              className="rounded object-cover mb-4 w-full h-full"
            />
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg sm:text-xl font-semibold">{t.VDM}</h3>
              <a href="https://vinodemarteoficial.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">{t.viewProject}</a>
            </div>
          </div>
        
        </div>
      </section>

    
      <section id={t.about.toLowerCase()} className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t.aboutMeTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.aboutMeCards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg p-4 sm:p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">{card.title}</h3>
              <p className="text-gray-300 text-center">{card.description}</p>
              {card.pdfLink && (
                <div className="text-center mt-4">
                  <a
                    href={card.pdfLink}
                    className="text-white-400 hover:text-purple-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrCertificate className="mx-auto text-3xl sm:text-4xl" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section id={t.contact.toLowerCase()} className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{t.mySocialMedia}</h2>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
          <a href="https://github.com/alegresantisp" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-purple-300 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/santiago-alegre-67b288193" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-purple-300 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/santialegree/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-purple-300 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="mailto:alegresantisp@gmail.com" className="text-3xl sm:text-4xl hover:text-purple-300 transition-colors duration-300">
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
