import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../components/InputField'
import { addDonutOrder, clearForm, handleFieldChange } from '../modules/donuts.js'

class NewDonutOrderFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  // Below function will utilize the donutOrderList from your store and
  // calculates id of next item in place of a database
  calculateNewId() {
    if (this.props.donutOrderList.length === 0) {
      return 1
    } else {
      const donutIds = this.props.donutOrderList.map(donut => donut.id)
      return Math.max(...donutIds) + 1
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()

    // Your code here
    // First, prepare a new donut order object
    // Then, add that object to the store, and clear the form
    const newDonut = {
        id: this.calculateNewId(),
        name: this.props.newName,
        flavor: this.props.newFlavor
      }
      this.props.addDonutOrder(newDonut)
      this.props.clearForm()
    }

  render() {

    return (
      <div className='small-6 columns'>
        <h1>Add a New Donut Order</h1>
        <form onSubmit={this.handleFormSubmit}>
          <InputField
            key='newName'
            label='Your Name'
            type='text'
            name='newName'
            handleChange={this.props.handleFieldChange}
            value={this.props.newName}
          />
          <InputField
            key='newFlavor'
            label='Flavor'
            type='text'
            name='newFlavor'
            handleChange={this.props.handleFieldChange}
            value={this.props.newFlavor}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return{
    newName: state.donuts.newName,
    newFlavor: state.donuts.newFlavor,
    donutOrderList: state.donuts.donutOrderList
  }
}

const mapDispatchToProps = dispatch => {
  return{
    handleFieldChange: (newDonut) => dispatch(handleFieldChange(newDonut)),
    clearForm: () => dispatch(clearForm()),
    addDonutOrder: event => dispatch(addDonutOrder(event))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDonutOrderFormContainer)
