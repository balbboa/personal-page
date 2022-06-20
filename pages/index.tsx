import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import type { NextPage } from 'next'
import { Fragment } from 'react'
import Typewriter from "typewriter-effect"
import Container from '../components/Container/Container'

const navigation = [
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#project' },
  { name: 'Contato', href: '#contact' },
]

const Home: NextPage = () => {



  return (
    <Container title='Balboa'>
      <div id="home" className="relative bg-indigo-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-indigo-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-teal-400 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <img
                          alt="Workflow"
                          className="h-8 w-auto sm:h-10"
                          src="virtual.png"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-white hover:text-teal-400">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="virtual.png"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-teal-400 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl flex flex-row font-extrabold text-white sm:text-5xl md:text-6xl">
                  Arthur <span className="ml-3 block text-teal-400 xl:inline">
                    <Typewriter
                      onInit={(typewriter) => {
                        loop: true
                        typewriter
                          .typeString("Balboa")
                          .pauseFor(1000)
                          .start()
                      }}
                    />
                  </span>

                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Olá, bem-vindo ao meu perfil pessoal.
                </p>
                <div className="mt-3 flex flex-row lg:justify-start">
                  <div className="shadow">
                    <a
                      href="https://www.instagram.com/arthur.balboa" target="_blank"
                      className="flex flex-row items-start p-3 rounded-full justify-center border border-transparent bg-teal-400 hover:bg-teal-700"
                    >
                      <img src="insta.png" className="w-6" alt="..." />
                    </a>
                  </div>
                  <div className="ml-3">
                    <a
                      href="https://github.com/balbboa" target="_blank"
                      className="flex items-center p-3 rounded-full justify-center border border-transparent bg-teal-400 hover:bg-teal-700"
                    >
                      <img src="github.png" className="w-6" alt="..." />
                    </a>
                  </div>
                  <div className="ml-3">
                    <a
                      href="https://www.linkedin.com/in/balbboa/" target="_blank"
                      className="flex items-center p-3 rounded-full justify-center border border-transparent bg-teal-400 hover:bg-teal-700"
                    >
                      <img src="linkedin.png" className="w-6" alt="..." />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://w0.peakpx.com/wallpaper/359/388/HD-wallpaper-cyberpunk-board-u-abstract-argustanges-art-blue-circuit-device-electronics-fiction-future-high-modern-mood-night-purple-quality-robot-sci-fi-science-scifi-space-starship-travel.jpg"
            alt=""
          />
        </div>
      </div>


      <div id="about" className="py-10 h-full w-full flex flex-col items-center justify-center relative ">
        <h1 className='text-white text-4xl py-12 font-extrabold'>Sobre</h1>
        <div className="flex flex-col lg:flex-row justify-around w-full">
          <div
            className="self-start pb-10 mx-6 md:mx-0"
          >
            <img src="me.png" className="rounded-full w-96" alt="..." />
          </div>
          <div className='relative mx-6 md:mx-0 sm:w-full md:w-2/4 text-teal-400'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(20)
                  .typeString("[Abzu@localhost ~]$ python whoami.py")
                  .pauseFor(1000)
                  .typeString("<br/><br/> Olá, me chamo Arthur Balboa. Sou Desenvolvedor web e mobile. Possuo Técnico em Redes de computadores, sou Bacharel em Ciências e Tecnologia e estudante de Engenharia da Computação pela Universidade Federal do Rio Grande do Norte (UFRN). <br/><br/> Também faço parte do programa de residência em Tecnologia da Informação (TI/IMD - UFRN) no Tribunal Regional Federal da 5ª Região (Pós-graduação). <br/><br/> Possuo experiência nas ferramentas: HTML5, CSS3, Sass, Bootstrap, TailwindCSS, JQuery, React, React Native, Flutter, Next.Js, NodeJS, Wordpress, Angular, Ionic e Laravel. Linguagens de programação já utilizadas: Python, JavaScript, Typescript, PHP, C, C# e C++. <br/><br/> Usuário Linux, amante do Front-end e entusiasta da segurança da informação. <br/><br/> Chá mate, Lo-fi e praias vazias ♥")
                  .pauseFor(1000)
                  .start()
              }}
            />
          </div>
        </div>
      </div>

      <div id="project" className="bg-indigo-900 py-10 h-full w-full flex flex-col items-center justify-center relative ">
        <h1 className='text-white text-4xl py-12 font-extrabold'>Projetos</h1>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="relative flex flex-col items-center pb-10 mx-6 md:mr-6">
            <div className="p-10 rounded-full cursor-pointer hover:opacity-80 bg-white">
              <img src="pje.png" className="w-40" alt="..." />
            </div>
            <h1 className='text-teal-400 text-2xl py-5 font-extrabold'>Mini Pje</h1>
          </div>
          <div className="relative flex flex-col items-center pb-10 mx-6 md:mr-6">
            <div className="p-10 rounded-full cursor-pointer hover:opacity-80 bg-white">
              <img src="pje.png" className="w-40" alt="..." />
            </div>
            <h1 className='text-teal-400 text-2xl py-5 font-extrabold'>Mini Pje</h1>
          </div>
          <div className="relative flex flex-col items-center pb-10 mx-6 md:mr-6">
            <div className="p-10 rounded-full cursor-pointer hover:opacity-80 bg-white">
              <img src="pje.png" className="w-40" alt="..." />
            </div>
            <h1 className='text-teal-400 text-2xl py-5 font-extrabold'>Mini Pje</h1>
          </div>
        </div>
      </div>

      <div id="contact" className="py-10 h-full w-full flex flex-col items-center justify-center relative ">
        <h1 className='text-white text-4xl py-12 font-extrabold'>Contato</h1>
        <div className="flex flex-col lg:flex-row ml-16 self-start">
          <div
            className="relative flex flex-col items-center pb-10 mx-6 md:mx-0"
          >
            <h1 className='text-teal-400 text-2xl py-5 font-extrabold'>Lore ipsim</h1>
          </div>
        </div>
      </div>
    </Container >
  )
}

export default Home
