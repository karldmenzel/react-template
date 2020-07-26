import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

//Components
import HomePage from './components/HomePage.jsx';
import PageOne from './components/PageOne.jsx';

import {exampleServiceAction} from './redux/Actions';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(exampleServiceAction());
  }

  render() {
    return(
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/page1" exact component={PageOne} />
      </BrowserRouter>
    )
  }
}

export default connect()(App);