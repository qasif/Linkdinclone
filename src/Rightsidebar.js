import React from 'react'
import './css/rightbar.css'
import InfoIcon from '@mui/icons-material/Info';

const Rightsidebar = () => {
  return (
    <div className='widget'>
      <div className='widget_top'>
        <div className='widget_header'>
          <h4>LinkedIN News</h4>
          <InfoIcon/>
        </div>
        <div className='widget_body'>
          <ul className='widget_option'>
            <li>
              <h4>Slaying Job Search fees</h4>
              <p>6d ago * 4,55 Readers</p>
            </li>
            <li>
              <h4>A Two pizza rule for eating</h4>
              <p>6d ago * 6,55 Readers</p>
            </li>
            <li>
              <h4>A Two pizza rule for eating</h4>
              <p>6d ago * 6,55 Readers</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='widget__bottom'>
        <div className='widget_header'>
          <h4>Today top course</h4>
          <InfoIcon/>
        </div>
        <div className='widget__body'>
          <ul className='widget__option'>
            <li>
              <h4>leading with a heavy heat</h4>  
              <p>kay coly</p>
            </li>
            <li>
              <h4>leading with a heavy heat</h4>
              <p>kay coly</p>
            </li>
            <li>
              <h4>leading with a heavy heat</h4>
              <p>kay coly</p>
            </li>
            <li>
              <h4>leading with a heavy heat</h4>
              <p>kay coly</p>
            </li>

          </ul>

        </div>

      </div>
    </div>
  )
}

export default Rightsidebar