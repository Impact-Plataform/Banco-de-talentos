import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Container from './Components/Container';
import Header from './Components/Header';
//import Home from './pages/Home';
//import ModalDetails from './pages/ModalDetails';
//import KnowMore from './pages/KnowMore';




function App() {
  return (
    <div className="App">
       <Router>
          <Container>
            <Header />

          </Container>          
             
       </Router>
       
    </div>
  );
}

export default App;
