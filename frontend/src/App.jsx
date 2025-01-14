import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import Chat from './components/chat/chat'
import './App.css'
function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      {/* <Chat/> */}
      <About/>
      <div id="projects">
        <h2>Projects</h2>
        <Projects name="Personal Portfolio Website" description="You're on it right now!" github="https://github.com/julianl05/personal-website"/>
        <Projects name="Song Discussion Board" description="Web app for users to discuss 3 random songs each day." github="https://github.com"/>
      </div>
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences title="Signify" info="Software R&D Intern" dates="June 2024 - August 2024" bullets={["Bullet 1", "Bullet 2", "Bullet 3"]}/>
        <Experiences title="NYU Shanghai" info="Apprentice Programer" dates="June 2021 - August 2021" bullets={["Bullet 1", "Bullet 2", "Bullet 3"]}/>
      </div>
    </>
  )
}

export default App
