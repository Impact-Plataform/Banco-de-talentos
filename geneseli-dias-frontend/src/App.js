import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Container from './Components/Container';
//import Home from './pages/Home';
//import ModalDetails from './pages/ModalDetails';
//import KnowMore from './pages/KnowMore';




function App() {
  return (
    <div className="App">
       <Router>
          <Container />          
             
       </Router>
       
    </div>
  );
}

export default App;
