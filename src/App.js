import React, { Component } from 'react';
import './App.css';

import 'bulma/css/bulma.css';
import allFoods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodList from './Components/FoodList';
import AddFood from './Components/AddFood';

class App extends Component {
  // state = {
  //   addFood: false,
  // };

  // showAddFood = () => {
  //   this.setState({
  //     addFood: true,
  //   });
  // };



  render() {
    // if (this.state.addFood === true) {
    //   console.log('addFood is TRUE' + this.state.addFood);
    //   return <AddFood />;
    // } else {
      return (
        <div className="App">
          
          <FoodList />
        </div>
      );
    }
  // }
}

export default App;
