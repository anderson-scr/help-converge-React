import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home'
import Converge from '../Components/Converge/Converge'
import XML from '../Components/XML-page/XML'
import Mensagens from '../Components/user-phrase/UserPhrase'
import HeaderBar from '../Components/headerBar/headerBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderBar />
          <div className='screenChange'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Converge" element={<Converge />} />
                <Route path='/XML' element={<XML />} />
                <Route path='/Mensagens' element={<Mensagens />}/>
              </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
