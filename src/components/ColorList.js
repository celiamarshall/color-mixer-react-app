import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { selectColor } from '../actions/colors'

const ColorList = ({ colors, dispatch }) => {
  const lis = colors.map((color, i) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      className="list-group-item text-dark"
      key={ i }
      style={ style }
      onClick={ () => dispatch(selectColor(i)) }>{ color.name }</li>
  })

  return <ul className="list-group">{ lis }</ul>
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addColor,
//     selectColor
//   }, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(ColorList)
