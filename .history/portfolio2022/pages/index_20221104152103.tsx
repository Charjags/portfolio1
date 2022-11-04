import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
const Home = ({pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[#0a192f] text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  scrollbar-thumb-[#a8b2d1]/40">
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
      <section id="about" className="snap-start">
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
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-end justify-end pr-10">
          <h4 className='text-[#ccd6f6]'>home!
          </h4>
          <img 
          className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
          src="https://i.imgur.com/35trhFu.jpeg" alt="" title="Home"/>
        </div>
      </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ()=> {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return{
    props:{
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  },

  revalidate: 100,
  };
}



