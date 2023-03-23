import './App.css';
import { useState } from 'react';
import DisplayColor from './Components/displayColor';
import FormColor from './Components/formColor';


function App() {
  const [colorList, setColorList] = useState([]);

  return (
    <div className="App">
      <FormColor colorList={colorList} setColorList={setColorList}/>
      <DisplayColor colorList={colorList} setColorList={setColorList}/>
    </div>
  );
}
export default App;
