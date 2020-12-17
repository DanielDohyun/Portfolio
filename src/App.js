import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
