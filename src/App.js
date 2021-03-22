import logo from './logo.svg';
import './App.css';
import First from './First';
// ./app.js and first.js are in same location
import Second from './Second';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
