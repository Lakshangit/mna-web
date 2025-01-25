import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Services />
      <MyFooter />
    </div>
  );
}

export default App;
