import React, { Component } from 'react'

class AddMovie extends React.Component {

    state = {
      name: "",
      calories:0,
      id: String(Math.random())
    }


    changeHandler = (event) => {
      let currentInputValue = event.target.value
      let inputName = event.target.name

      // let obj = {}
      // obj[inputName] = currentInputValue  //{ calories: 999}
      // this.setState(obj);

      this.setState({
        [inputName] : currentInputValue
        })
  }

    formSubmitHandler = (event) => {
        // we stop the browser from its normal behaviour 
        // which would be to generate GET request to backend
        event.preventDefault()
    
        let newFood = this.state
    
        // we need to pass an object that looks like { title: "askldjhasd", director: "alkdhlkashj" }
        this.props.addFoodCallBack(newFood) // TODO: pass the newly created movie
    
        // reset to initial (empty) state
        this.setState({
            name: "",
            calories: 0,
            id: String(Math.random())
        })
    
      }

    render() {
        return (
          <div>
            <form onSubmit={this.formSubmitHandler} key={this.state.name}>
              Name: <input name="name" value={this.state.name} onChange={this.changeHandler}></input>
              Calories: <input name="calories" type="number" value={this.state.calories} onChange={this.changeHandler}></input>
              <button type="submit">Add Food</button>
            </form>
          </div>
        )
      }
}



export default AddMovie;