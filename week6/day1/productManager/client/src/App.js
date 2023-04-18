import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './view/Main'
import ProductDetail from './Components/ProductDetail';
import EditProduct from './Components/EditProduct';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<Main/>} path='/' default />
            <Route element={<ProductDetail/>} path='/product/:id' />
            <Route element={<EditProduct/>} path='/product/edit/:id' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
