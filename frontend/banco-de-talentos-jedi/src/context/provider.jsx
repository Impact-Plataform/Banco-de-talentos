import { useState } from "react"
import { Context } from "./Context"

export const Provider = ({ children }) => {
    const [starData, setStarData] = useState([])

    return (
    <Context.Provider value={{ starData, setStarData }}>
        {children}
    </Context.Provider>
    )
}