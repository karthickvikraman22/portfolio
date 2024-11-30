import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
