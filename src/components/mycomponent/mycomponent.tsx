'use client'
import React, { useState } from 'react'
import { FaReact, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'

function MyComponent() {
  const [isProjectExpanded, setIsProjectExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-800 to-purple-900 text-white">
      {/* Navbar */}
      <nav className="p-4">
        <ul className="flex justify-center space-x-8">
          {['Home', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item} className="relative group">
              <a href={`#${item.toLowerCase()}`} className="text-xl hover:text-purple-300 transition-colors duration-300">
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <Image 
          src="/assets/imagen1.jfif"  
          alt="Santiago Alegre" 
          width={300} 
          height={300} 
          className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">Santiago Alegre</h1>
          <p className="text-xl mb-4">Full Stack Developer specialized in Front End</p>
          <div className="flex space-x-4">
            <SiNextdotjs size={24} />
            <FaReact size={24} />
            <SiTailwindcss size={24} />
            <IoLogoCss3 size={24} />
            <FaGithub size={24} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="bg-gray-700 rounded-lg p-4 cursor-pointer" onClick={() => setIsProjectExpanded(!isProjectExpanded)}>
          <h3 className="text-xl font-semibold mb-2">Ribuzz</h3>
          <a href="https://ribuzz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">View Project</a>
          {isProjectExpanded && (
            <p className="mt-4 text-gray-300">
              Ribuzz is a web application that... (Add your project description here)
            </p>
          )}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Soy una persona curiosa y apasionada por el aprendizaje continuo. Mi formación en counselling me ha permitido desarrollar habilidades como la escucha activa, la empatía y un profundo autoconocimiento, que han sido fundamentales para mi crecimiento personal y profesional. A lo largo de este camino, descubrí mis fortalezas y las áreas donde puedo mejorar, lo que me llevó a explorar nuevas formas de contribuir de manera significativa.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Mi curiosidad y deseo de crear me llevaron a estudiar programación, especializándome en el desarrollo front-end. En este campo, encuentro la perfecta combinación entre creatividad y técnica, lo que me permite diseñar y desarrollar soluciones digitales. Creo firmemente en el poder del desarrollo web para impulsar marcas y emprendimientos.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Mi objetivo es seguir creciendo en este apasionante mundo del desarrollo web, aportando mis habilidades y experiencia para colaborar en proyectos que generen valor y aprendiendo junto a otros profesionales comprometidos.
        </p>
      </section>

      {/* Social Media Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">My Social Media</h2>
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
          El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito. - Albert Schweitzer
        </p>
      </footer>
    </div>
  )
}

export default MyComponent
