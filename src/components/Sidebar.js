import { NavLink } from 'react-router-dom';
import '../styling/Sidebar.css';

//Displaying information according to data received by Checkingprops function
const Sidebar = (props) => {
    const data = CheckingProps(props);
    return (
        <div>

            {typeof data != "string" ? <div className="SidebarScroll">{data.map((name) => (<h3 className="SideText"><NavLink className="SideNavLink" to={name[1]}>{name[0]}</NavLink></h3>))}</div> : null}

        </div >
    )
}

//Checking props and accordingly returning data to be displayed in Sidebar function
const CheckingProps = (props) => {
    if (props.information == "people" || props.information == "planets") {
        return (props.data.map((person) => [person['name'], person['url']]))
    } else if (props.information == "films") {
        return (props.data.map((film) => [film['title'], film['url']]))
    } else {
        return (props.data)
    }
}

export default Sidebar
