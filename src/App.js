import {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import Product from './Components/Product'
import Cart from './Components/Cart'

function App() {
  const [index, setIndex] = useState()

  const childState = (state) => {
    setIndex(state)
  }

  return (
    <Router>
      <div className="app">
        <div className="app-wrap">
          <Header />
          <Switch>
            <Route exact path="/"><Body parentClickProduct={childState} /></Route>
            <Route path="/product"><Product index={index} /></Route>
            <Route path="/cart"><Cart /></Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
