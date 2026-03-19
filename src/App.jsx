import { content } from './data/content'
import Topbar from './components/Topbar'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ScrollHint from './components/ScrollHint'
import './App.css'

function App() {
  return (
    <>
      <Topbar />
      <main className="app">
        <Intro data={content.intro} />
      <About data={content.about} />
      <Resume data={content.resume} />
      <Contact data={content.contact} />
      </main>
      <ScrollHint />
    </>
  )
}

export default App
