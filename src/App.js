import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Menu from "./components/menu";

import AboutPage from "./pages/About";
import VideoPage from "./pages/Video";
import HistoryPage from "./pages/History";
import NewsPage from "./pages/News";

import UserContext from './UserContext';

const User = {name: 'User1', surname: 'Surname1'};

function App() {
  
  return (
    <div className="App">
      <UserContext.Provider value={User}>
      <Router>
        <Menu/>
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/history">
            <HistoryPage/>
          </Route>
          <Route path="/video">
            <VideoPage/>
          </Route>
          <Route path="/news">
            <NewsPage/>
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
