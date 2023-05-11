import React from 'react'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './css/header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__logo'>
          <img src='https://cdn-icons-png.flaticon.com/512/2504/2504923.png'></img>

        </div>
        <div className='header__search'>
          <SearchIcon/>
          <input type='text' placeholder='search'></input>
      </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} tittle='Home'/>
        <HeaderOption Icon={PeopleIcon} tittle='My network'/>
        <HeaderOption Icon={BusinessCenterIcon} tittle='jobs'/>
        <HeaderOption Icon={ MessageIcon} tittle='messg'/>
        <HeaderOption Icon={ NotificationAddIcon} tittle='notification'/>
        <HeaderOption avatar={ Avatar} tittle='QURESHI'/>
      </div>
      </div>
  )
}

export default Header