import { Route, Switch } from "react-router-dom";
import { CharacterPage } from "../pages/ChracterPage";
import { FilteredCharacters } from "../pages/FilteredCharacters";
import { Home } from "../pages/Home";
import { People } from "../pages/People";

export const Routes = () => (
    <Switch>
        <Route exact path='/'  component={Home}/>
        <Route exact path='/people'  component={People}/>
        <Route exact path='/filter'  component={FilteredCharacters}/>
        <Route exact path='/character/:id'  component={CharacterPage}/>
    </Switch>
)