import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Friends from './components/Friends'
import Login from './components/Login'
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = '/login'
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  
  
  return (
    <Router>
    <div className="App">
      <nav>
          <Link to ='/login'>Login</Link><br></br>
          <Link onClick={logout}>Logout</Link>
      </nav>
    </div>
    
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path ='/protected' component={Friends} />

    </Switch>
  
  
  
  </Router>
  );









}

export default App;
