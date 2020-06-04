import React, { Component } from 'react'
import FoodBox from './FoodBox'
import 'bulma/css/bulma.css';
import allFoods from '../foods.json';
import AddFood from './AddFood';


export class FoodList extends Component {
    constructor() {
        super();
        this.state = {
          foodArr: allFoods.slice(0, 5),

        };
      }

      addFoodHandler = (newFood) => {

        this.setState({
            foodArr: this.state.foodArr.concat(newFood)
        })
    
      }

    render() {
        return (
            <div>
            {/* <button onClick={() => this.showAddFood()}>
            ADD YOUR FAVOURITE FOOD
            </button> */}
            <AddFood addFoodHandler={this.addFoodHandler}></AddFood>
                <ul>
                {this.state.foodArr.map((el) => {
          return (
            <li>
            <FoodBox
              key={el.id}
              {...el}
              />
              </li>
          );
        })}
                    
                </ul>
            </div>
        )
    }
}

export default FoodList
