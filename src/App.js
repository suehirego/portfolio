import './app.scss';
import './style/light.scss';
import Intro from './components/intro/Intro';
import About from './components/aboutme/About';
import Contact from './components/contact/Contact';
import Navbar from '../src/components/navbar/Navbar';
import Portfolio from './components/myprojects/Portfolio';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';



function App() {

    const { darkMode } = useContext(DarkModeContext);


    return (
        <div  className={darkMode ? "app light" : "app"}>
            <Navbar />
            <div className='container' id="container">
                <Intro />
                <About />
                <Portfolio />
                <Contact/>
            </div>
        </div>
    );
}

export default App;
