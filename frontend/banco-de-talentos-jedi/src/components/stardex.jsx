import { useNavigate } from "react-router-dom"
const Stardex = (props)=>{
    const navigate = useNavigate()
    return (
        <div className="stardex" onClick={()=>navigate(`/card/${props.id}`)}>
            {props.name}
        </div>
    )
}

export default Stardex