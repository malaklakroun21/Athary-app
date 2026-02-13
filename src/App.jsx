import './App.css'
import { Route, Routes } from 'react-router-dom'
import Questionnaire from './pages/questionnaire/Questionnaire'
import Sondage from './pages/sondage/sondage'
import Sondage2 from './pages/sondage2/sondage2'
import Character from './pages/Character/character'
import Greenchar from './pages/greenchar/greenchar'
import Dragaccs from './pages/Character/dragaccs'
import Dragaccsgreen from './pages/greenchar/dragaccgreen'
import Cappink from './pages/accessories/cappink'
import Capgreen from './pages/accessories/capgreen'
import WelcomePink from './pages/welcomepink/welcomepink'
import Welcomegreen from './pages/welcomegreen/welcomegreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Character />} />
      <Route path="/greenchar" element={<Greenchar />} />
      <Route path="/dragaccs" element={<Dragaccs />} />
      <Route path="/dragaccgreen" element={<Dragaccsgreen />} />
      <Route path="/cappink" element={<Cappink />} />
      <Route path="/capgreen" element={<Capgreen />} />
      <Route path="/welcomegreen" element={<Welcomegreen />} />
      <Route path="/welcomepink" element={<WelcomePink />} />
    </Routes>
  )
}

export default App
