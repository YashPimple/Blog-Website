
import  "./topbar.css"

const Topbar = () => {
  return (
    <div className='top'>
    
      <div className="topLeft">
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
      <ul className="topList">
      <li className="topListItem">HOME</li>
       <li className="topListItem">ABOUT</li>
       <li className="topListItem">CONTACT</li>
       <li className="topListItem">WRITE</li>
       <li className="topListItem">LOGOUT</li>
       </ul>
      </div>
      <div className="topRight">
      <img className="topImg"
      src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
       />
    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
   
    </div>
  )
}

export default Topbar