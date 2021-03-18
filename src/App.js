import logo from './logo.svg';
import './App.css';
import First from './First';
// ./app.js and first.js are in same location
import Second from './Second';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <First/> */}
      {/* jsx syntax */}
      {/* <Second/> */}
      <NavBar/>
    </div>
  );
}

export default App;
