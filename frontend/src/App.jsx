import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import Chat from './components/chat/chat'
import discussion from '../src/assets/song-discussion-board_thumbnail2.png'
import personal from '../src/assets/portfolio-site-thumbnail.png'
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
        <Projects name="Personal Portfolio Website" description="You're on it right now!" github="https://github.com/julianl05/personal-website" thumbnail={personal}/>
        <Projects name="Song Discussion Board" description="Web app for users to discuss 3 random songs each day." github="https://github.com" thumbnail={discussion}/>
      </div>
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences title="Hack4Impact and Hendricks Foundation" info="Software Engineer" dates="December 2024 - Present" 
          bullets={["Working in a team of 3 SWEs and a PM to build an E-waste calculator web app for a non-profit organisation that’ll serve as a tool for reducing E-waste by encouraging users to donate second-hand electronic devices to those in need.",
                    "Building the web-app with a tech stack consisting of Node JS, Express JS, Supabase, React JS, Tailwind CSS, and TypeScript. ",
                    "Practicing proper Agile workflow by reporting weekly progress to PM through Kanban boards on Atlassian Jira, consistent Slack communication, Github feature branching, and scheduled meetings."]}/>

        <Experiences title="Signify" info="Software R&D Intern" dates="June 2024 - August 2024" 
          bullets={["Served as a team member of a R&D project team specializing in improving customer experience for large scale installations (~100) of IoT smart LED lights. ",
                    "Wrote Javascript and Python scripts for MQTT.fx, Apache JMETER, and Locust that automated MQTT, UDP, and ESP-Now connectivity testing for lights controlled with the WiZ Connected mobile app. ",
                    "Developed a Python PyQT5 GUI for controlling rectangular grids of RGB WiZ lights, capable of displaying scrolling text, images, gifs, chinese characters, etc."]}/>

        <Experiences title="NYU Shanghai" info="Apprentice Programer" dates="June 2021 - August 2021" 
          bullets={["Contributed to a python-based search engine utilizing gRPC and bert_as_a_service during a span of 4 weeks.",
                    "Incorporated elements of pattern recognition to teach search engines to present relevant results.", 
                    "Navigated file systems through UNIX command line tools."]}/>
      </div>
    </>
  )
}

export default App
