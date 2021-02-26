
import { Link } from 'react-router-dom';
import '../styling/People.css';

//Displaying individual person clicked data
const People = (props) => {
    return (
        <div>
            <h1>{props.data[props.key1]['name']}</h1    >
            <br />
            <h3>Height: {props.data[props.key1]['height']}</h3>
            <h3>Mass: {props.data[props.key1]['mass']}</h3>
            <h3>Hair Color: {props.data[props.key1]['hair_color']}</h3>
            <h3>Skin Color: {props.data[props.key1]['skin_color']}</h3>
            <h3>Eye Color: {props.data[props.key1]['eye_color']}</h3>
            <h3>Birth Year: {props.data[props.key1]['birth_year']}</h3>
            <h3>Gender: {props.data[props.key1]['gender']}</h3>
            <h3>Home world: <Link className="Links" to={props.data[props.key1]['homeworld']}>{props.data[props.key1]['homeworld']}</Link></h3>
            <h3>Films: </h3>
            <ul>
                {props.data[props.key1]['films'].map((film) => (<li>< Link className="Links" to={film}>{film}</Link></li>))}
            </ul>
        </div>
    )
}

export default People
