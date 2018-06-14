import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = articles => articles

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
)

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
}

const List = connect(mapStateToProps)(ConnectedList)

export default List
