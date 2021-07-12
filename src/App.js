import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import NotFound from './common/not-found';
import SSlider from './components/sSlider';

import SocialNavbar from './components/socialNavbar';

function App() {
  return (
    <div className="App">
      <SocialNavbar />
      <SSlider />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
    </div>
  );
}

export default App;
