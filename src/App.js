import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/landing/landing.jsx'
import ScrollToTop from 'react-scroll-to-top';
import AnimatedCursor from "react-animated-cursor"
import './cursor.css'
import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import ClipLoader from 'react-spinners/ClipLoader';
import '../src/Components/Navigation/navigation.css'


function App() {
  const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
  return (
    <div>
                
      <AnimatedCursor
            position={"fixed"}
            pointer-events={"none"}
            innerSize={20}
            outerSize={20}
            color='185,194,223'
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={5}
            />
         <ScrollToTop />
         {loading ? (
				<div className="loader-container">
					<ClipLoader color={'#fff'} size={100} margin-left={50} />
				</div>
			) : (
         <Routes>
         <Route path="/" element={<Landing/>}></Route>
         </Routes>
      )}
    </div>

  );
}

export default App;
