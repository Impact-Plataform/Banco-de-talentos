import { Route, Switch } from 'react-router'
import { CharacterPage } from '../pages/Character'
import { Homepage } from '../pages/Homepage'

export function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Homepage />
			</Route>

			<Route path="/character/:name">
				<CharacterPage />
			</Route>
		</Switch>
	)
}
