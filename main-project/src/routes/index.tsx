import { Route, Switch } from 'react-router'
import { Homepage } from '../pages/Homepage'

export function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Homepage />
			</Route>
		</Switch>
	)
}
