import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import ContactForm from './Components/contact/contact';
import Navigation from './Components/navigation/navigation'
import Landing from './Pages/landing/landing'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
