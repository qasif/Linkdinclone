import React from 'react';
import { Counter } from './features/counter/Counter';
import Feeds from './Feeds';
import Header from './Header';
import Rightsidebar from './Rightsidebar';
import Leftsidebar from './Sidebar';
function App() {
  return (
  <div className='app-wrapper'>
    <Header/>
    <div className='app_body'>
      <Leftsidebar/>
      <Feeds/>
      <Rightsidebar/>
    </div>
  </div>
  )
}

export default App;
