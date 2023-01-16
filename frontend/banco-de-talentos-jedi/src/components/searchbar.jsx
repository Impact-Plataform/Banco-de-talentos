import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../context/context"

const SearchBar = ()=>{
    const [id, setId] = useState(false)
    const {starData} = useContext(Context)
    const ref = starData.map((element)=>element.name.toLowerCase())
    const nav = useNavigate()
    return(
    <form>
        <label>Name:</label> <input className="inputTxt" type="text" onChange={(e)=>{
            const name = e.target.value.toLowerCase()
            if(ref.indexOf(name)>=0){
                setId(ref.indexOf(name))
            }else{
                const search = ref.map((element)=> {
                    return element.includes(name)
                })
                setId(search.indexOf(true))
            }
        }}/> 
        <button onClick={(e)=>{
            e.preventDefault()
            if(id>=0){
                nav(`/card/${id}`)
            }else{
                alert("This name not found")
            }
        }}>Search</button>
    </form>
    )
}

export default SearchBar