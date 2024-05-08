
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Navbar2 from './components/Navbar2';
import Card from './components/Card';

//Pictures
import katie from "./assets/img/katie-zaferes..png";
import star from './assets/img/star.png';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Card img = {katie}
              star = {star}                 
              rating="5.0"
              reviewCount={6}
              country="USA"
              title="Life Lessons with Katie Zaferes"
              price={136}
        ></Card>
    </div>
  );
}

export default App;
