const Button = (props)=>{
    return(
        <button className={props.classN} onClick={(e)=>{
            e.preventDefault() 
            props.callback()
        }}>{props.label}</button>
    )
}

export default Button