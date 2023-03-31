import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import Navbar from './Container/Navbar/Navbar';
import AboutMe from './Container/AboutMe/AboutMe';
import ContuctMe from './Container/ContuctMe/ContuctMe';
import Projects from './Container/Projects/Projects';
import Blogs from './Container/Blogs/Blogs';
import MySkills from './Container/MySkills/MySkills';
import Accomplishments from './Container/Accomplishments/Accomplishments';

function App() {
  return (
    <div>
      <div className=''>
        <Navbar></Navbar>
        <div style={{
          backgroundImage: "linear-gradient(45deg, #A75D5D, #0081B4)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}>
          <Home></Home>
          <Projects></Projects>
          <MySkills></MySkills>
          <AboutMe></AboutMe>
          <Accomplishments></Accomplishments>
          <ContuctMe></ContuctMe>
          <Blogs></Blogs>
        </div>
      </div>
    </div>
  );
}

export default App;
