import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import FA from './components/fa';
import NotFound from './common/not-found';

function App() {
  return (
    <div className="App">
      <Navbar />'
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/freelance-101-academy" component={FA}/>
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found"/>
      </Switch>
    </div>
  );
}

export default App;
