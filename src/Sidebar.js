  import React from "react"
  import './css/Sidebar.css'
  import { Avatar } from "@mui/material"
  const Leftsidebar=()=>{
  return(
    <div className="sidebar">
      <div className="sidebar__profile">
        <img src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"></img>
        <div className="profile__details">
          <Avatar/>
          <h4>QURESHI ASIF</h4>
          <p>Web Developers</p>
        </div>

        <div className="profile__stats"> 
        <span>Who viewed your profile</span>
        <span className="stat__number">20</span>
        </div>

        <div className="profile__stats"> 
        <span>Connection <br/> <b>Grow your network</b> </span>
        <span className="stat__number">55</span>
        </div>
      </div>
      <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash"> <span>#</span> branding</p>
        <p className="hash"> <span>#</span> marketing</p>
        <p className="hash"> <span>#</span> web development</p>
        <p className="hash"> <span>#</span> programing</p>
        <p className="hash"> <span>#</span> React js</p>
        <p className="hash"> <span>#</span> Redux</p>
      </div>
      
    </div>
  )
}
export default Leftsidebar