import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Landing/>}></Route>
    </Routes>

  );
}

export default App;
