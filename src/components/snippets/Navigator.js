
function Navigator(props){
    return(
    <h3 className={props.className}><a href={props.href} target={props.target}>{props.routeTag}</a></h3>
    )
}

export default Navigator;