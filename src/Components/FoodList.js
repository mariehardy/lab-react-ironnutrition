import React, { Component } from 'react';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css';
import allFoods from '../foods.json';
import AddFood from './AddFood';
import SearchBar from './SearchBar';

export class FoodList extends Component {
  // constructor() {
  //   super();
    // this.state = {
    state = {
      foodArr: allFoods.slice(0, 5),
      formShown: false,
      searchTerm: ""
    };
  // }

  addFoodHandler = (newFood) => {
    this.setState({
      foodArr: this.state.foodArr.concat(newFood),
      formShown: false
    });
  };

  showForm = (event) => {
    this.setState({
      formShown: true
    });
  };

  searchHandler= (searchTerm) => {
        // let inputValue = event.target.value
    
        this.setState ({
          searchTerm: searchTerm
        })
      }

  render() {
    return (
      <div>
      <div><SearchBar onSearchCallBack={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar>
      </div>
        <div>{this.state.formShown ? <AddFood addFoodCallBack={this.addFoodHandler}></AddFood> : <button onClick="this.showForm">Show Form</button>}</div>
        <ul>
          {this.state.foodArr.filter((el) => el.name.includes(this.state.searchTerm)).map((el) => {
            return (
              <li>
                <FoodBox
                  // key={el.name}
                  {...el}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FoodList;
