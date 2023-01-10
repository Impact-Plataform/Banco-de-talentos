import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "./button.jsx"

const Header = ()=>{
    const navigate = useNavigate()
    const [gender, setGender] = useState("")
    const [movie, setMovie] = useState("")
    const [specie, setSpecie] = useState("")
    return (
        <nav>
            <Link onClick={()=>{
                setGender("")
                setMovie("")
                setSpecie("")
            }} to="/characters">
                <h3 className="title"> Star Wars Characters  </h3>
            </Link>
            <div>
                <span className="navTxt">Filter By:   </span>
                
                <Button classN={gender} label="Gender" callback={()=>{
                    navigate("/gender")
                    setGender("Active")
                    setMovie("")
                    setSpecie("")
                    }} />
                <Button classN={movie }label="Movies Appearance" callback={()=>{
                    navigate("/movie")
                    setGender("")
                    setMovie("Active")
                    setSpecie("")
                    }} />
                <Button classN={specie} label="Specie" callback={()=>{
                    navigate("/specie")
                    setGender("")
                    setMovie("")
                    setSpecie("Active")
            }} />
            </div>
        </nav>
    )
}

export default Header