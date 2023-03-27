import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";



function App() {
  return (
    <div className="App">
      <main className="movies-body">
        
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;


