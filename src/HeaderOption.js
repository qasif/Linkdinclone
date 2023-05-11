
import { Avatar } from '@mui/material'
import React from 'react'
import './css/header.css'

const HeaderOption = ({Icon,tittle,avatar}) => {
  return (
    <div className='header__option'>
        {
            Icon &&   <Icon></Icon>
        }
        {
           avatar && <Avatar name={avatar}/>
        }
        <span>{tittle}</span>

    </div>
  )
}

export default HeaderOption
