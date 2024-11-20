
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import ExamPage from './Pages/ExamPage';


import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Maths from './Pages/Syllabus/Maths';
import Contact from './Pages/Contact';



function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>

            <Routes>
            <Route path="/" element={<Home/>} ></Route>  
            <Route path="/pages/exampage" element={<ExamPage/>} ></Route>
            <Route path="/pages/about" element={<About/>} ></Route>
            <Route path="/pages/contact" element={<Contact/>} ></Route>
            <Route path="/pages/Syllabus/Maths" element={<Maths/>} ></Route>


            </Routes>
          <Footer/>
        </Router>

    </div>
  );
}

export default App;
