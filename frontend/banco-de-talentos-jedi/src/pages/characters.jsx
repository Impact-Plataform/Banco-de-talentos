import CardContainer from "../components/cardcontainer.jsx"
import { useContext } from "react"
import { Context } from "../context/context.jsx"
import SearchBar from "../components/searchbar.jsx"


export function Characters(){
    const {starData} = useContext(Context)

    return (
        <main>
            <SearchBar />
            <section className="main">
                <CardContainer ipage={true} data={starData}/>
            </section>
        </main>
    )
}