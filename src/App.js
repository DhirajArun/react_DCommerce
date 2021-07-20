import './App.css';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import SimpleNavBar from './components/simpleNavBar';
import Home from './components/home';
import NotFound from './common/not-found';
import SignInForm from './components/signInForm';
import RegisterForm from './components/registerForm';
import SimpleFooter from './components/simpleFooter';


import "./styles/textNLink.css"


function App() {
  const currentPath = useLocation().pathname;

  const navbar = currentPath === "/signin" || currentPath === "/register" ? <SimpleNavBar /> : <Navbar />
  const footer = currentPath === "/signin" || currentPath === "/register" ? <SimpleFooter /> : null;

  return (
    <div className="App">
      {navbar}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
      {footer}
    </div>
  );
}

export default App;
