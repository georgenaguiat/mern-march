import './App.css';
import InfoCard from './components/InfoCard';

function App(props) {
  return (
    <div className="App">
      <InfoCard personName = {'Doe, Jane'} age = {45} hairColor = {'Black'} />
      <InfoCard personName = {'Smith, John'} age = {88} hairColor = {'Brown'}/>
    </div>
  );
}

export default App;
