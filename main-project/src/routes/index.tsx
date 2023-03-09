import { AnimatePresence } from 'framer-motion'
import { Route, Switch } from 'react-router'
import { CharacterPage } from '../pages/Character'
import { Homepage } from '../pages/Homepage'

export function Routes() {
	return (
		<AnimatePresence>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>

				<Route path="/character/:name">
					<CharacterPage />
				</Route>
			</Switch>
		</AnimatePresence>
	)
}
