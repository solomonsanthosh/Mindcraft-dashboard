import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Doctors';
import AddCoach from './pages/AddCoach'
import Activity from './pages/Activity'
import Music from './pages/GetMusic'
import AddMusic from './pages/Addmusic'
import AddActivity from './pages/AddActivity'
function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<Activity/>} />
                  <Route exact path="/music" element={<Music/>} />
                  <Route exact path="/addmusic" element={<AddMusic/>} />
                  <Route exact path="/addactivity" element={<AddActivity/>} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/addcoach" element={< AddCoach/>} />
                  <Route exact path="/locations" element={<div></div>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;