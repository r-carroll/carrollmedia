import { BlogPosts } from 'app/components/posts'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Resume from './components/resume'

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
    </>
  )
}
