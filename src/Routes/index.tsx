import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import CharacterDetails from "../Pages/CharacterDetails";
import Home from "../Pages/Home";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterDetails />}></Route>
      </Switch>
    </Router>
  );
}

export default MainRoutes;