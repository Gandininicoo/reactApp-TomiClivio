
function NavBtn(props){
    return(
        <a href={props.href} target={props.target} >
            <button style={{backgroundImage: `url(${props.backgroundImage})`}} className={props.className}>{props.routeTag}</button>
        </a>
    )
}
export default NavBtn