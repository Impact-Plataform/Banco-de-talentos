import CardContainer from "../components/cardcontainer.jsx"
import { useContext } from "react"
import { Context } from "../context/context.jsx"


export function Characters(){
    const {starData} = useContext(Context)

    return (
        <main>
        <section className="main">
            <CardContainer data={starData}/>
        </section>
        </main>
    )
}