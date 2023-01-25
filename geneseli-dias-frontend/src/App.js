import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CharacterDetails from "./Pages/CharacterDetails";

function App() {
  return (
    <div className="App">
      <main className="movies-body">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/:id" component={CharacterDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
