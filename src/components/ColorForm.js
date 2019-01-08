import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addColor } from '../actions/colors'

class ColorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      color: '#FFFFFF'
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(addColor({
      value: this.state.color,
      name: this.state.name
    }))
    this.setState({
      name: '',
      color: '#FFFFFF'
    })
  }

  render () {
    return (
      <form onSubmit={ this.onSubmit } className="border rounded p-4">
        <div className="form-group">
          <label htmlFor="name">Color Name</label>
          <input
            onChange={ this.onChange }
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={ this.state.name }/>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color Value</label>
          <input
            onChange={ this.onChange }
            type="color"
            className="form-control"
            name="color"
            id="color"
            value={ this.state.color }/>
        </div>
        <button type="submit" className="btn btn-dark text-light">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(ColorForm)

