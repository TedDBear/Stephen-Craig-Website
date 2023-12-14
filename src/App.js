import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () =>{
  return(<div className='App'>
         <Navbar/>
         <Intro/>
         <Services/>
         <Experience/>
         <Education/>
         <Portfolio/>
         <Contact/>
         <Footer/>
         </div>)
}


export default App;
