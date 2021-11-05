import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './componnt/Header/Header';
import Home from './componnt/Home/Home';
import Service from './componnt/Service/Service';
import About from './componnt/About/About';
import NotFound from './componnt/NotFound/NotFound';

function App() {
  return (
  <div>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/service'>
          <Service></Service>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
