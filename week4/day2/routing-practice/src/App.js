import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import HelloNumberColor from './Components/HelloNumberColor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:text'  element={<HelloNumberColor />} />
        <Route path='/:text/:color/:backgroundColor' element={<HelloNumberColor />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
