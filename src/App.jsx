import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Challenge from './components/Challenge';
import Profile from './components/Profile'; 
import Questionnaire from './pages/questionnaire/Questionnaire'
import Sondage from './pages/sondage/sondage'
import Sondage2 from './pages/sondage2/sondage2'
import Album from './pages/Album/Album'
import TeamAlbum from './pages/TeamAlbum/TeamAlbum'
import Character from './pages/Character/character'
import Greenchar from './pages/greenchar/greenchar'
import Dragaccs from './pages/Character/dragaccs'
import Dragaccsgreen from './pages/greenchar/dragaccgreen'
import Cappink from './pages/accessories/cappink'
import Capgreen from './pages/accessories/capgreen'
import WelcomePink from './pages/welcomepink/welcomepink'
import Welcomegreen from './pages/welcomegreen/welcomegreen'
import StreakPage from './components/streak';
import Communication from './components/Communication';
import Gender from './components/Gender';
import Email from './pages/Email/Email';
import Name from './pages/Name/Name';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Questionnaire />} />
      <Route path="/greenchar" element={<Greenchar />} />
      <Route path="/sondage" element={<Sondage />} />
      <Route path="/sondage2" element={<Sondage2 />} />
      <Route path="/gender" element={<Gender />} />
      <Route path="/email" element={<Email />} />
      <Route path="/name" element={<Name />} />
      <Route path="/character" element={<Character />} />
      <Route path="/dragaccs" element={<Dragaccs />} />
      <Route path="/dragaccgreen" element={<Dragaccsgreen />} />
      <Route path="/cappink" element={<Cappink />} />
      <Route path="/capgreen" element={<Capgreen />} />
      <Route path="/welcomegreen" element={<Welcomegreen />} />
      <Route path="/welcomepink" element={<WelcomePink />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/streak" element={<StreakPage />} />
      <Route path="/Communication" element={<Communication />} />
      <Route path="/album" element={<Album />} />
      <Route path="/teamalbum" element={<TeamAlbum />} />
    </Routes>
  )
}

export default App;
