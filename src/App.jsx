import './App.css'
import { Route, Routes } from 'react-router-dom'
import Questionnaire from './pages/questionnaire/Questionnaire'
import Sondage from './pages/sondage/sondage'
import Sondage2 from './pages/sondage2/sondage2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Questionnaire />} />
      <Route path="/sondage" element={<Sondage />} />
      <Route path="/sondage2" element={<Sondage2 />} />
    </Routes>
  )
}

export default App
