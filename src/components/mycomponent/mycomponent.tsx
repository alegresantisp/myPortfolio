'use client'
import React, { useState } from 'react'
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'


function MyComponent() {
  const [isProjectExpanded, setIsProjectExpanded] = useState(false)
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
      aboutMe: `Soy una persona curiosa y apasionada por el aprendizaje continuo. Mi formación en counselling me ha permitido desarrollar habilidades como la escucha activa, la empatía y un profundo autoconocimiento, que han sido fundamentales para mi crecimiento personal y profesional.`,
      aboutMeMore: `Mi curiosidad y deseo de crear me llevaron a estudiar programación, especializándome en el desarrollo front-end. Mi objetivo es seguir creciendo en este apasionante mundo del desarrollo web.`,
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
      aboutMe: `I am a curious person passionate about continuous learning. My background in counselling has allowed me to develop skills such as active listening, empathy, and deep self-knowledge, essential for my personal and professional growth.`,
      aboutMeMore: `My curiosity and desire to create led me to study programming, specializing in front-end development. My goal is to keep growing in this exciting world of web development.`,
      mySocialMedia: 'My Social Media',
      footer: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer'
    }
  }

  const t = isSpanish ? content.es : content.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-800 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="px-4 py-1 mt-2 bg-gradient-to-br from-purple-900  to-purple-900 inline-block rounded-xl shadow-lg sticky top-0 left-1/2 transform -translate-x-1/2">
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
        <button onClick={toggleLanguage} className="px-1 py-0.5 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors duration-300">
          {isSpanish ? 'En' : 'Es'}
        </button>
      </div>

        {/* Hero Section */}
        <section id="home" className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="flex items-center max-w-5xl mx-auto">
            <div className="flex-shrink-0 mr-8">
              <Image 
                src="/assets/imagen1.jfif"  
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
          <div className="bg-gray-700 rounded-lg p-4 cursor-pointer w-64 h-64 flex flex-col" onClick={() => setIsProjectExpanded(!isProjectExpanded)}>
              <Image
                src="/assets/ribuzz.webp"
                alt="Ribuzz Project"
                width={150}
                height={150}
                className="rounded object-cover mb-4 w-full h-full"
              />
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{t.ribuzz}</h3>
                <a href="https://ribuzz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">{t.viewProject}</a>
              </div>
              {isProjectExpanded && (
                <p className="mt-4 text-gray-300">
                  Ribuzz es una plataforma de marketplace y networking diseñada para emprendedores e inversores.
                </p>
              )}
            </div>




      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">{t.aboutMeTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{t.aboutMe}</p>
        <p className="text-gray-300 leading-relaxed mt-4">{t.aboutMeMore}</p>
      </section>

      {/* Social Media Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
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
