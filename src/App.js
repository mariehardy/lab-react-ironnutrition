import React, { Component } from 'react';
import './App.css';

import 'bulma/css/bulma.css';
import FoodList from './Components/FoodList';

class App extends Component {


  render() {

      return (
        <div className="App">
          <FoodList />
        </div>
      );
    }
  // }
}

export default App;
