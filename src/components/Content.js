import { useParams } from 'react-router-dom';
import People from './People';
import Planets from './Planets';
import Films from './Films';
import Error from './Error';

//Getting the matched index by CheckingPropDetails and then displaying content appropraitely by DisplayContent function
const Content = (props) => {
    const { person } = useParams();
    const key1 = CheckingPropDetails(props, person);
    return (
        <div>
            <DisplayContent information={props.information} data={props.data} key1={key1} />
        </div>
    )
}

//Returning the index of the array where url matched in the object for the path, if not match, then return -1
const CheckingPropDetails = (props, id) => {
    if (props.information == "people" || props.information == "planets" || props.information == "films") {
        var url = "/" + props.information + "/" + id + "/"
    }
    for (let key = 0; key < props.data.length; key++) {
        if (props.data[key]['url'] == url) {
            return key
        }
    }
    return -1
}

//Displaying content appropariately to props
const DisplayContent = (props) => {
    if (props.information == "people") {
        return (
            <div>
                {props.key1 == -1 ? <h1>Missing person</h1> : <People data={props.data} key1={props.key1} />}
            </div>
        )
    }
    else if (props.information == "planets") {
        return (
            <div>
                {props.key1 == -1 ? <h1>Missing planet</h1> : <Planets data={props.data} key1={props.key1} />}
            </div>
        )
    }
    else if (props.information == "films") {
        return (
            <div>
                {props.key1 == -1 ? <h1>Missing Film</h1> : <Films data={props.data} key1={props.key1} />}
            </div>
        )
    }
    else if (props.information == "error") {
        return (
            <Error />
        )
    }
}

export default Content
