import { Filters } from './components/Filters'
import { GroupCharacters } from './components/GroupCharacters'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

function App() {
	return (
		<div className="p-5 flex flex-col gap-4">
			<Header />
			<SearchBar />
			<Filters />
			<GroupCharacters />
		</div>
	)
}

export default App
