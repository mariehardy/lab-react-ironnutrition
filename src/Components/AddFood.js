import React, { Component } from 'react'

class AddMovie extends React.Component {

    state = {
      name: "",
      calories: "",
      id: String(Math.random())
    }

    nameChangeHandler = (event) => {
        let currentInputValue = event.target.value
        this.setState({
            name: currentInputValue
          })
    }

    caloriesChangeHandler = (event) => {
        let currentInputValue = event.target.value
        this.setState({
            calories: currentInputValue
          })
    }  

    formSubmitHandler = (event) => {
        // we stop the browser from its normal behaviour 
        // which would be to generate GET request to backend
        event.preventDefault()
    
        let newFood = this.state
    
        // we need to pass an object that looks like { title: "askldjhasd", director: "alkdhlkashj" }
        this.props.addFoodHandler(newFood) // TODO: pass the newly created movie
    
        // reset to initial (empty) state
        this.setState({
            name: "",
            calories: "",
            id: String(Math.random())
        })
    
      }

    render() {
        return (
          <div>
            <form onSubmit={this.formSubmitHandler}>
              Name: <input name="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
              Calories: <input name="calories" value={this.state.calories} onChange={this.caloriesChangeHandler}></input>
              <button type="submit">Add Food</button>
            </form>
          </div>
        )
      }
}



export default AddMovie;