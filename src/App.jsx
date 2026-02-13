import './App.css'
import { Route, Routes } from 'react-router-dom'
import Questionnaire from './pages/questionnaire/Questionnaire'
import Sondage from './pages/sondage/sondage'
import Sondage2 from './pages/sondage2/sondage2'
import Album from './pages/Album/Album'
import TeamAlbum from './pages/TeamAlbum/TeamAlbum'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Questionnaire />} /> */}
      <Route path="/" element={<Album/>} />
      <Route path="/sondage" element={<Sondage />} />
      <Route path="/sondage2" element={<Sondage2 />} />
      <Route path="/album" element={<Album />} />
      <Route path="/team" element={<TeamAlbum />} />
    </Routes>
  )
}

export default App
