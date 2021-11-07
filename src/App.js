import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './componnt/Header/Header';
import Home from './componnt/Home/Home';
import Service from './componnt/Service/Service';
import About from './componnt/About/About';
import NotFound from './componnt/NotFound/NotFound';
import Footer from './componnt/Footer/Footer';
import Login from './componnt/Login/Login';
import AuthProvider from './componnt/Context/AuthProvider';
import PrivetRouter from './componnt/PrivetRouter/PrivetRouter';

function App() {
  return (
  
    <AuthProvider>
       <Router>
        <Header></Header>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
            <Login></Login>
        </Route>
        <PrivetRouter path='/service'>
          <Service></Service>
        </PrivetRouter>
        <PrivetRouter path='/about'>
          <About></About>
        </PrivetRouter>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
   

    
      
  
  );
}

export default App;
