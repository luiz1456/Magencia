import './App.css'
import Header from './Components/Header'
import SectionBanner from './Components/SectionBanner'
import XpJob from './Components/SectionXpJob'
import Footer from './Components/Footer'
import { useState } from 'react'

function App() {
  const [darkActive, setDarkActive] = useState(false)

  return (
    <>
      <Header
        darkActive={darkActive}
        setDarkActive={setDarkActive}
      />
      <SectionBanner darkActive={darkActive} />
      <XpJob darkActive={darkActive} />
      <Footer darkActive={darkActive} />
    </>
  )
}

export default App
