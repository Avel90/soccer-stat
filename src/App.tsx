import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path={'/'} exact>
              <Start />
            </Route>
            <Route path={"/list-lig"}>
              <ListLig />
            </Route>
            <Route path={'/list-command'}>
              <ListCommand />
            </Route>
            <Route path={'/calendar-lig'}>
              <CalendarLig />
            </Route>
            <Route path={'/calendar-one-command'}>
              <CalendarOneCommand />
            </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
