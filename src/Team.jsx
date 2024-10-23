import { useState } from "react"

export default function Team (){
    const [team ,setTeam] = useState(11)

    const handleAdd =()=>{
        const newtTeam = team+1;
        setTeam(newtTeam)
    }
    const handleRemove = () =>{
        const newTeam =team-1;
        setTeam(newTeam)
    }
    const teamStyle ={
        margin:"15px",
        padding :"15px",
        border :"2px solid yellow",
        borderRadius:"15px"
    }
    return(
        <div style={teamStyle}>
            <h3>Player : {team}</h3>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRemove}>-</button>
        </div>
    )
}