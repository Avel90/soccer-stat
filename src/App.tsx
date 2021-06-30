import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import LeagueList from './pages/LeagueList';
import LeagueCalendar from './pages/LeagueCalendar';
import TeamCalendar from './pages/TeamCalendar';
import CommandList from './pages/CommandList';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/LeagueList">
              <LeagueList />
            </Route>
            <Route path="/CommandList">
              <CommandList />
            </Route>
            <Route path="/LeagueCalendar">
              <LeagueCalendar />
            </Route>
            <Route path="/TeamCalendar">
              <TeamCalendar />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
