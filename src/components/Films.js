import { Link } from 'react-router-dom';
import '../styling/People.css'

//Displaying Individual clicked film data
const Films = (props) => {
    return (
        <div>
            <h1>{props.data[props.key1]['title']}</h1>
            <br />
            <h3>Episode ID: {props.data[props.key1]['episode_id']}</h3>
            <h3>Opening crawl: {props.data[props.key1]['opening_crawl']}</h3>
            <h3>Director: {props.data[props.key1]['director']}</h3>
            <h3>Producer: {props.data[props.key1]['producer']}</h3>
            <h3>Release date: {props.data[props.key1]['release_date']}</h3>
            <h3>Characters: </h3>
            <ul>
                {props.data[props.key1]['characters'].map((person) => (<li>< Link className="Links" to={person}>{person}</Link></li>))}
            </ul>
            <h2>Planets: </h2>
            <ul>
                {props.data[props.key1]['planets'].map((planet) => (<li>< Link className="Links" to={planet}>{planet}</Link></li>))}
            </ul>
        </div>
    )
}

export default Films
