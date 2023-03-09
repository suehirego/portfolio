import './app.scss';
import './style/light.scss';
import Navbar from '../src/components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/aboutme/About';
import Portfolio from './components/myprojects/Portfolio';
import Contact from './components/contact/Contact';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';


function App() {

    const { darkMode } = useContext(DarkModeContext);


    return (
        <div  className={darkMode ? "app" : "app light"}>
            <Navbar />
            <div className='container' id="container">
                <Intro />
                <About />
                <Portfolio />
                <Contact fffff/>
            </div>
        </div>
    );
}

export default App;
