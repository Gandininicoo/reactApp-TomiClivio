export default function Input(props){
    return(
        <label className={props.className}><p>{props.label}</p>
        <input type={props.type} name={props.name}  value={props.value} required></input></label>
    )
}