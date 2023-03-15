import './App.css';
import UserInfo from './components/PersonalCard';


function App(props) {
  return (
    <div className="App">
      <UserInfo name={'Deo, Jane'} personAge={'45'} color={'Black'}/>
      <UserInfo name={'Smith, John'} personAge={'88'} color={'Brown'}/>
      <UserInfo name={'Fillmore, Millard'} personAge={'50'} color={'Brown'}/>
      <UserInfo name={'Smith, Maria'} personAge={'62'} color={'Brown'}/>
    </div>
  );
}

export default App;
