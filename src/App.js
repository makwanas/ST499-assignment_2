import './App.css';
import Navbar from './components/Navbar.js';
import Workspace from './components/Workspace.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

//App function
function App() {
  //Parsing JSON files and storing them in variable
  var peopleData = require('./data/people.json');
  var planetsData = require('./data/planets.json');
  var filmsData = require('./data/films.json');
  var data = { 1: peopleData, 2: planetsData, 3: filmsData };
  var peopleArray, planetsArray, filmsArray = [];
  for (var key in data) {
    var tempArray = []
    for (var second_key in data[key]) {
      tempArray.push(data[key][second_key])
    }
    if (key == 1) {
      peopleArray = tempArray
    } else if (key == 2) {
      planetsArray = tempArray
    } else if (key == 3) {
      filmsArray = tempArray
    }
  }

  //Storing the state using useState hook
  const [peopleState, setPeople] = useState(peopleArray);
  const [planetsState, setPlanets] = useState(planetsArray);
  const [filmsState, setFilms] = useState(filmsArray);

  //Setting the routes and passing props accordingly
  return (
    <BrowserRouter >
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route path="/people">
              <Workspace information="people" data={peopleState} />
            </Route>
            <Route path="/planets">
              <Workspace information="planets" data={planetsState} />
            </Route>
            <Route path="/films">
              <Workspace information="films" data={filmsState} />
            </Route>
            <Route exact path="/">
              <Workspace information="home" data="home" />
            </Route>
            <Route path="/home">
              <Redirect to="/" />
            </Route>
            <Route path="*">
              <Workspace information="error" data="error" />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
