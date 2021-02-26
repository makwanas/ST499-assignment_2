import { Link } from 'react-router-dom';
import '../styling/People.css'

//Displaying individual planet clicked data
const Planets = (props) => {
    return (
        <div>
            <h1>{props.data[props.key1]['name']}</h1>
            <br />
            <h3>Rotation period: {props.data[props.key1]['rotation_period']}</h3>
            <h3>Orbital period: {props.data[props.key1]['orbital_period']}</h3>
            <h3>Diameter: {props.data[props.key1]['diameter']}</h3>
            <h3>Climate: {props.data[props.key1]['climate']}</h3>
            <h3>Gravity: {props.data[props.key1]['gravity']}</h3>
            <h3>Terrain: {props.data[props.key1]['terrain']}</h3>
            <h3>Surface water: {props.data[props.key1]['surface_water']}</h3>
            <h3>Population: {props.data[props.key1]['population']}</h3>
            <h3>Residents: </h3>
            <ul>
                {props.data[props.key1]['residents'].map((person) => <li><Link className="Links" to={person}>{person}</Link></li>)}
            </ul>
            <h2>Films: </h2>
            <ul>
                {props.data[props.key1]['films'].map((film) => <li><Link className="Links" to={film}>{film}</Link></li>)}
            </ul>
        </div>
    )
}

export default Planets
