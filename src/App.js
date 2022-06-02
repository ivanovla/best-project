import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Menu from "./components/menu";

import AboutPage from "./pages/About";
import VideoPage from "./pages/Video";
import HistoryPage from "./pages/History";
import NewsPage from "./pages/News";
import {Provider} from "mobx-react";
import mainStore from "./stores/mainStore";

import UserContext from './UserContext';

const stores = {
  mainStore
};

const User = {name: 'User1', surname: 'Surname1'};

function App() {
  return (
      <Provider {...stores}>
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
          <Route path="/countries">
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
        </Provider>
        );
}

export default App;
