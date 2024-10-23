export default function Friend({friend}){
    const {id,name,email} = friend;
    return(
        <div className="box">
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
            
        </div>
    )
}