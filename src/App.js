import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";

import StorePage from "./components/layouts/StorePage";
import GamePage from "./components/layouts/Games/GamePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/games/:id" component={GamePage} />
        <Route path="/" component={StorePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
