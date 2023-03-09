import { AnimatedContainer } from '../../components/AnimatedContainer'
import { Filters } from '../../components/Filters'
import { GroupCharacters } from '../../components/GroupCharacters'
import { GroupPaginationButtons } from '../../components/GroupPaginationButtons'
import { Header } from '../../components/Header'
import { SearchBar } from '../../components/SearchBar'

export function Homepage() {
	return (
		<AnimatedContainer>
			<Header />
			<SearchBar />
			<Filters />
			<GroupPaginationButtons />
			<GroupCharacters />
			<GroupPaginationButtons />
		</AnimatedContainer>
	)
}
