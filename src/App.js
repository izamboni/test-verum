import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Details from './components/details';
import Footer from './components/commons/footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;


