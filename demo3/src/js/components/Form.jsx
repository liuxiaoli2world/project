import React, { Component } from 'react'
import uuidv1 from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addArticle } from '../actions/index'

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const id = uuidv1()
    const title = this.state.title
    console.log(`${id}:${title}`)
    this.props.addArticle({ id, title })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="">title</label>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
          id="title"
          value={this.state.title}
        />
        <button type="submit">add</button>
      </form>
    )
  }
}

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)
export default Form
