import react from 'react'
 import "./TeamAlbum.css"
import { useNavigate } from 'react-router-dom'
import rightmenu from "../../assets/Albumpage/Frame126933.svg"
import  artteam1 from "../../assets/Teamalb/Group 176.svg"

import coin from "../../assets/Albumpage/Coins.svg"
import star from"../../assets/Albumpage/PixelStar.svg"
import pain from "../../assets/Albumpage/Paint.svg"
import goal from "../../assets/Albumpage/Goal.svg"
import face from "../../assets/Albumpage/LOL.svg"
import social from "../../assets/Albumpage/People.svg"
const albums = [
  { title: "January", image: artteam1, path:"/januaryteam" },

];
function Album() {
    const navigate = useNavigate()

    return (
        <div className="album-screen-team">
       <div className="level-header-team">
          <div className="level-header1-team">
         <div className="level-indicator-team">
          <img src={star} alt="Niveau" className="star-icon-team" />
          <div className="level-header2-team" >
          <span className="level-text_team">Level 01</span>
          <div className="level-bar_team">
            <div className="level-progress-team" style={{ width: '40%' }}></div>
          </div>
          </div>
        </div>
        <div className="coins-team">
          <img src={coin} alt="Pièces" className="coins-icon-team" />
          <span className="coins-amount-team">1870</span>
        </div>
        </div>
          <div className="avatar-team">
          <img src={rightmenu} alt="Brain" className="Brain-icon-team" />
        </div>
      </div>




      <div className="alb-tabs-team">
        {/* TABS */}
      <div className="tabs-team">
        <button className="tab-team active" onClick={() => navigate("/album")} >My albums</button>
        <button className="tab-team" >Team albums</button>
      </div>

       {/* ALBUMS GRID */}
      <div className="albums-grid-team">
        {albums.map((album, index) => (
          <div className="album-card-team" key={index} onClick={() => navigate(album.path)}>
            <img src={album.image} alt={album.title} />
            
          </div>
        ))}
      </div>
      </div>



      <div className="footer-team">
        <img src={pain} alt="Pain Palette" className="pain-icon-team" />
        <img src={goal} alt="Goal" className="goal-icon-team" />
        <img src={face} alt="Face" className="face-icon-team" />
        <img src={social} alt="Social" className="social-icon-team" />
         </div>

      </div>

      
    )
}       
export default Album;