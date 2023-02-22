import './App.css';
import Navbar from '../src/Component/Navbar'
import Body from './Component/Body';
import Headpart from './Component/Headpart';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Headpart />
      <Body />
    </div>
  );
}

export default App;
