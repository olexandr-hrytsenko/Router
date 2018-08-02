
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';


const User = (params) => {
  return ( 
  <div>
    <h1> Welcome User: {params.username} </h1>
    <h2> PROTECTED </h2>
  </div>
  );
}

class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn  
    }))
  }
  render() {
    return (
      <Router>
        <div className="App">
        
          <p>
            <NavLink to="/" exact activeStyle={
              { color:'red' }
            }>Home</NavLink>
          </p>
          <p>
            <NavLink to="/about" exact activeStyle={
              { color:'orange' }
            }>About</NavLink>
          </p>
          <p>
            <NavLink to="/user/john" exact activeStyle={
              { color:'green' }
            }>User John</NavLink>
          </p>
          <p>
            <NavLink to="/user/peter" exact activeStyle={
              { color:'green' }
            }>User Peter</NavLink>
          </p>


        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle}/>

        <Route path="/" exact strict render={
          () => {
            return ( <h1>Welcome Home</h1>);
          }
        }/>
        <Route path="/about" exact strict render={
          () => {
            return ( <h1>Welcome About</h1>);
          }
        }/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router>
    );
  }
}

export default App;