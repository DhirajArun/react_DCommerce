import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import NotFound from './common/not-found';
import SSlider from './components/sSlider';
import SignInForm from './components/signInForm';

import SocialNavbar from './components/socialNavbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInForm} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
    </div>
  );
}

export default App;
