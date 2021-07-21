import "./App.css";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutUs from "./views/AboutUs/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about-us" exact component={() => <AboutUs />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
