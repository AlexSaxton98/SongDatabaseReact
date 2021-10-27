import Home from './pages/home';
import user from './pages/user'
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/user' component={user} />
    </Switch>
    </div>
  );
}

export default App;
