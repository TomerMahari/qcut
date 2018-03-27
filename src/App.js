import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'react-big-calendar/lib/less/styles.less';
import './styles.less'
import './prism.less'

import Calendar from './Calendar.js'


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="examples">           
              <Calendar />
          </div>
        </div>
      </div>
    );
  }
}






export default App;
