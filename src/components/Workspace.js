import Sidebar from './Sidebar'
import Content from './Content'
import '../styling/Workspace.css'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Home from './Home'

//Passing props into Sidebar and Content appropriately and setting route path for individual element
const Workspace = (props) => {
    const { path } = useRouteMatch();

    return (
        <div className="WorkspaceBody">
            <div className="SidebarBody">
                <Sidebar information={props.information} data={props.data} />
            </div>
            <div className="ContentBody">
                <Switch>
                    <Route path={`${path}/:person`}>
                        <Content information={props.information} data={props.data} />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Workspace
