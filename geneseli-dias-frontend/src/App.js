import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import MovieDetails from './Pages/MovieDetails';

function App() {

  return (
    <div className="App">
      <main className="movies-body">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
