import react from 'react'
import "./Album.css"
import { useNavigate } from 'react-router-dom'
import rightmenu from "../../assets/Albumpage/Frame126933.svg"
import  art3 from "../../assets/Albumpage/photo3.svg"
import art4 from "../../assets/Albumpage/photo4.svg"
import art5 from "../../assets/Albumpage/photo5.svg"
import art7 from "../../assets/Albumpage/photo7.svg"
import art6 from "../../assets/Albumpage/photo6.svg"
import art2 from "../../assets/Albumpage/photo2.svg"
import art1 from "../../assets/Albumpage/photo1.svg"
import coin from "../../assets/Albumpage/Coins.svg"
import star from"../../assets/Albumpage/PixelStar.svg"
import pain from "../../assets/Albumpage/Paint.svg"
import goal from "../../assets/Albumpage/Goal.svg"
import face from "../../assets/Albumpage/LOL.svg"
import social from "../../assets/Albumpage/People.svg"
const albums = [
  { title: "January", image: art1, path:"/january" },
  { title: "February", image: art2, path:"/february" },
  { title: "April", image: art3, path:"/april" },
  { title: "May", image: art4, path:"/may" },
  { title: "June", image: art5, path:"/june" },
  { title: "July", image: art6, path:"/july" },
  { title: "August", image: art7, path:"/august" },
];
function Album() {
    const navigate = useNavigate()

    return (
        <div className="album-screen-alb">
       <div className="level-header-alb">
          <div className="level-header1-alb">
         <div className="level-indicator-alb">
          <img src={star} alt="Niveau" className="star-icon-alb" />
          <div className="level-header2-alb" >
          <span className="level-text_alb">Level 01</span>
          <div className="level-bar_alb">
            <div className="level-progress-alb" style={{ width: '40%' }}></div>
          </div>
          </div>
        </div>
        <div className="coins-alb">
          <img src={coin} alt="Pièces" className="coins-icon-alb" />
          <span className="coins-amount-alb">1870</span>
        </div>
        </div>
          <div className="avatar-alb">
          <img src={rightmenu} alt="Brain" className="Brain-icon-alb" />
        </div>
      </div>




      <div className="alb-tabs-alb">
        {/* TABS */}
      <div className="tabs-alb">
        <button className="tab active">My albums</button>
        <button className="tab" onClick={() => navigate("/team")}>Team albums</button>
      </div>

       {/* ALBUMS GRID */}
      <div className="albums-grid-alb">
        {albums.map((album, index) => (
          <div className="album-card-alb" key={index} onClick={() => navigate(album.path)}>
            <img src={album.image} alt={album.title} />
            
          </div>
        ))}
      </div>
      </div>



      <div className="footer-alb">
        <img src={pain} alt="Pain Palette" className="pain-icon-alb" />
        <img src={goal} alt="Goal" className="goal-icon-alb" />
        <img src={face} alt="Face" className="face-icon-alb" />
        <img src={social} alt="Social" className="social-icon-alb" />
         </div>

      </div>

      
    )
}       
export default Album;