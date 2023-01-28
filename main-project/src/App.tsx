import { Filters } from './components/Filters'
import { GroupCharacters } from './components/GroupCharacters'
import { GroupPaginationButtons } from './components/GroupPaginationButtons'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

function App() {
	return (
		<div className="p-5 flex flex-col gap-4">
			<Header />
			<SearchBar />
			<Filters />
			<GroupPaginationButtons />
			<GroupCharacters />
		</div>
	)
}

export default App
