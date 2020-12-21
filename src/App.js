import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="/"></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
