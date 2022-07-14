import React from 'react'
import './projects.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from '@material-ui/core';

const projects = () => {
  return (
    <div id='PROJECTS'>
    <div>
        <h1 style={{fontSize: "50px"}} className="mainheading">PROJECTS</h1>
        <div className="every">
        <div className='three'>
        <div className="card">
        <div>
            <Link href="https://github.com/Interestship-4-0/farmer-friendly-web-app" className="git" target="_blank"><LogoutIcon/></Link>
            </div>
            <div className="projecthead">
                <h3>FARMER WEB APPLICATION</h3>
            </div>
            <div className="para">
                <p>This web application is an approach to connect farmers and bio-waste industries together for the better management of the farm-waste produced</p>
            </div>
            <div className="stack">
                <p>REACTJS &nbsp;&nbsp; &nbsp;   &nbsp; SPRINGBOOT &nbsp;  &nbsp;&nbsp; &nbsp;    MYSQL &nbsp;  &nbsp;&nbsp; &nbsp;  MATERIAL UI</p>
            </div>
            
        </div>
        <div className="card">
        <div>
            <Link href="https://github.com/ritika728/The_ultimate_tracker" className="git" target="_blank"><LogoutIcon/></Link>
            </div>
            <div className="projecthead">
                <h3>THE ULTIMATE TRACKER</h3>
            </div>
            <div className="para">
                <p>The Ultimate tracker is used to track various natural disasters on a global scale. Users will get a map plotted and they have the option to select the notification facility</p>
            </div>
            <div className="stack">
                <p>HTML &nbsp;&nbsp; &nbsp; &nbsp; CSS &nbsp;  &nbsp;&nbsp; &nbsp; PYTHON MODULES &nbsp;  &nbsp;&nbsp; &nbsp; API KEYS</p>
            </div>
        </div>
        <div className="card">
        <div>
            <Link href="https://github.com/ritika728/Galaxy_Calci" className="git" target="_blank"><LogoutIcon/></Link>
            </div>
            <div className="projecthead">
                <h3>GALAXY CALCI</h3>
            </div>
            <div className="para">
                <p>A Calculator with an interactive frontend for solving basic mathematical problems like addition, subtraction, multiplication, division, modulus, clear all, delete</p>
            </div>
            <div className="stack">
                <p>HTML &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; CSS&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;    JAVASCRIPT </p>
            </div>
        </div>
    </div>
    <div className='three'>
    <div className="card">
    <div>
            <Link href="https://github.com/ritika728/Goblin-Shooter" className="git" target="_blank"><LogoutIcon/></Link>
            </div>
            <div className="projecthead">
                <h3>GOBLIN SHOOTER</h3>
            </div>
            <div className="para">
               <p>It is a 2-D game involving real-time animated sprites, goblin, bullets, health bar and scoreboard. It is developed in a learning league track under IEEE CS MUST.</p>
            </div>
            <div className="stack">
            <p>Pygame &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; Python&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;    OOPs  </p>
            </div>
        </div>
        <div className="card">
        <div>
            <Link href="https://github.com/ritika728/Ziggi_Weather_App" className="git" target="_blank"><LogoutIcon/></Link>
            </div>
            <div className="projecthead">
                <h3>ZIGGI WEATHER WEBPAGE</h3>
            </div>
            <div className="para">
                <p>An interactive webpage fetching Weather API to estimate the sky conditions, temperature and wind speed at a particular location </p>
            </div>
            <div className="stack">
                <p>WEATHER API &nbsp;&nbsp; &nbsp;   &nbsp; HTML &nbsp;  &nbsp;&nbsp; &nbsp;    CSS &nbsp;  &nbsp;&nbsp; &nbsp;  JAVASCRIPT</p>
            </div>
        </div>
        <div className="card">
        <div>
            <Link href="https://github.com/ritika728/Hotelogix" className="git" target="_blank"><LogoutIcon/></Link>
            </div>
            <div className="projecthead">
                <h3>HOTELOGIX</h3>
            </div>
            <div className="para">
                <p>It is designed to simplify hotel operations, increase market reach, drive more bookings, maximize revenue. It provides a user friendly interface for easy use</p>
            </div>
            <div className="stack">
            <p>JAVA &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp; DB2 ECLIPSE&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;    OOPs  </p>
            </div>
        </div>
       
    </div>
    </div>
    </div>
    </div>
  )
}

export default projects