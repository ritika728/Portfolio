import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/landing/landing.jsx'
import ScrollToTop from 'react-scroll-to-top';
import AnimatedCursor from "react-animated-cursor"
import './cursor.css'

function App() {
  return (
    <div>
      <AnimatedCursor
            position={"fixed"}
            pointer-events={"none"}
            // z-index={99999}
            innerSize={20}
            outerSize={20}
            color='185,194,223'
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={5}
            />
         <ScrollToTop />
         <Routes>
         <Route path="/" element={<Landing/>}></Route>
         </Routes>
    </div>

  );
}

export default App;
