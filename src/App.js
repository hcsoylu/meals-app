import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import RandomMeal from "./pages/RandomMeal";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/random">
          <RandomMeal />
        </Route>
        <Route exact path="/meal/:id">
          <DetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
