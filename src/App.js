import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/landing/landing.jsx'
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div>
         <ScrollToTop />
         <Routes>
         <Route path="/" element={<Landing/>}></Route>
         </Routes>
    </div>

  );
}

export default App;
