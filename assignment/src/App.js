import logo from './logo.svg';
import './App.css';
import InputUser from './Components/User/InputUser';
import AllUser from './Components/User/AllUser';

function App() {
  return (
    <div className="">
      <h1 className='add-people moving-para'>Add someone at the left side, see that person at the right side.</h1>
     <InputUser></InputUser>
    </div>
  );
}

export default App;
