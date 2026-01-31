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
      <div id="exp">
        <h2>Experiences</h2>
        <Experiences title="Splunk (a Cisco company)" info="Software Engineering Intern" dates="June 2025 - August 2025" 
          bullets={["Automated E2E test deployment for multiple projects, building CI/CD pipelines with GitLab Runners, bash script integrations, and automated metrics collection (Cypress, SonarQube, GitLab)",
                    "Stabilized Cypress E2E test suite (fixed 8+ critical failures, added cleanup procedures) and integrated TestRail API for automated test reporting, achieving 40% higher automation coverage",
                    "Integrated Splunk dashboard with CI/CD pipeline via automated API calls for real-time analysis of test metrics across 200+ merge requests, becoming primary tool for failure analysis",
                    "Shipped customer-facing features for Splunk OT Intelligence app, implementing full-stack solutions with React (TypeScript/Redux) frontend and Python REST API backend with detailed unit testing"]}/>
        <Experiences title="Hack4Impact and Hendricks Foundation" info="Software Engineering Intern" dates="Jan 2025 - May 2025" 
          bullets={["Built full-stack E-waste calculator (TypeScript) with team of 3 for environmental nonprofit, featuring calculation engine supporting 20+ device categories and environmental impact metrics",
                    "Implemented user authentication system: React/Tailwind CSS frontend forms integrated with Supabase Auth backend, including secure registration, login, and 2FA verification",
                    "Designed device submission pipeline with React forms, image uploads, and PostgreSQL storage, integrating first-party OCR API for fraud prevention",
                    "Implemented admin dashboard using TanStack Table with virtual scrolling, filtering, and bulk operations to manage user accounts and device submissions via optimized Supabase queries"]}/>

        <Experiences title="Signify" info="Software Engineering R&D Intern" dates="June 2024 - August 2024" 
          bullets={["Automated MQTT, UDP, and ESP-Now connectivity testing for 100+ smart LED bulbs using Python/JavaScript, reducing testing time by 80%",
                    "Developed a PyQt5 GUI for 100x100 RGB LED grids featuring scrolling text, image/GIF rendering, per-bulb control, and disconnection handling via multithreading, enabling streamlined iterative testing",
                    "Identified sources of critical latency issues in Wiz Connected Mobile App through extensive testing utilizing Apache JMETER, Locust, and ESP32 LED bulb firmware debugging, resulting in drastically improved app responsiveness"]}/>
      </div>
      <div id="projects">
        <h2>Projects</h2>
        <Projects name="Personal Portfolio Website" description="You're on it right now!" github="https://github.com/julianl05/personal-website" thumbnail={personal} demoLink={"https://julianlimjunren.netlify.app/"}/>
        <Projects name="Song Discussion Board" description="Web app for users to discuss 3 random songs each day." github="https://github.com" thumbnail={discussion} demoLink={"https://benevolent-bonbon-e0ef4f.netlify.app/"}/>
      </div>
    </>
  )
}

export default App
