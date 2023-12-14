import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
const App = () =>{
  return(<div className='App'>
         <Navbar/>
         <Intro/>
         <Services/>
         <Experience/>
         <Education/>
         </div>)
}


export default App;
