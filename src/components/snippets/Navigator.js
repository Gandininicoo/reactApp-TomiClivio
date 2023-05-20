import {Link} from 'react-router-dom'
function Navigator(props){
    return(
    <h3 onClick={props.onClick} className={props.className} ><Link className='linkeffect' to={props.href} target={props.target}>{props.routeTag}</Link></h3>
    )
}

export default Navigator;