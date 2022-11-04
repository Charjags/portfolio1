import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  scrollbar-thumb-[#a8b2d1]/80">
      <Head>
        <title>Charan's Portfolio</title>
      </Head>

      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero/>
      </section>
      {/* About */} 
      <section id="about" className="snap-center">
        <About/>
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience/>
      </section>
      {/* Skills */}
      <section id="skills"className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-end justify-end pr-10">
          <h4>home!
          </h4>
          <img 
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          src="https://i.imgur.com/35trhFu.jpeg" alt="" title="Home"/>
        </div>
      </footer>
      </Link>
    </div>
  )
}

export default Home
