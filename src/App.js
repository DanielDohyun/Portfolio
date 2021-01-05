import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Footer />
          </Route>
          <Route path="/">
            <Work />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
