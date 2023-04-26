import React from 'react';
import './achievements.css';
import Confetti from 'react-confetti';

const achievements = () => {
  // const { width, height } = useWindowSize()
  
  return (
        <div id='ACHIEVEMENTS'>
    
        <div className="container4" >
        
    <div className="page-header">
        <h1 className="heading2" style={{fontSize:"50px"}} id="timeline">ACHIEVEMENTS</h1>
    </div>
    <ul className="timeline">
    <Confetti
     width={"1000px"}
     height={"850px"}
     opacity={0.4}
     recycle={true}
     numberOfPieces={100}
    //  confettiSource={"x: 900px, y: 1000, w: canvas.width, h:700px"}
  />
        <li>
          <div className="timeline-badge"></div>
          <div className="timeline-panel">
            <div class="timeline-body">
              <p>Received Dan Kohn Scholarship in the Student category for virtual
                 attendance of KubeCon + CloudNativeCon Europe 2023</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
              <p>Secured 5th position among 1700+ participants in JWOC'23 organized by Jalpaiguri Government Engineering College. Rewarded with ISET Singapore Scholarship
</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"></div>
          <div className="timeline-panel">
            <div class="timeline-body">
              <p>Selected in the cohort of 200 girls from a pool of 9000+ partcipants in Flipkart Girls Wanna Code 4.0</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
              <p>Winner of JPMorgan's Code for Good Hackathon '22</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"></div>
          <div className="timeline-panel">
            <div class="timeline-body">
              <p>Got certified as Postman API Fundamentals Student Expert</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
              <p>Secured first position in a coding contest organised by CSI Laxmangarh Chapter</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
            <p>Secured 3rd position in Mindwrap Code-a-thon, a 3 day coding venture organised by IEEE SCT SB</p>
            </div>
          </div>
        </li>
      
        <li class="timeline-inverted">
                    <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
            <p>Project 'The Ultimate Tracker' was titled as third best project made during Hackmafest, an International Hackathon</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
            <p>Selected in the Web Development Squad of Clique'22</p>
            
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
            <p>Chosen for Open Source Mentorship Cohort at Codess Cafe</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
            <p>Got the position of Campus Mantri of GeeksforGeeks in Mody University</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge"></div>
          <div class="timeline-panel">
            <div class="timeline-body">
            <p>Star performer for the month of July 2021 in the Learning League Track- Quest Gaming under IEEE CS MUST</p>
           
            </div>
          </div>
        </li>
    </ul>
</div>
    </div>
    
  )
}

export default achievements

