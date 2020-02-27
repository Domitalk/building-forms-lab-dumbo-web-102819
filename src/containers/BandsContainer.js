import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import manageBand from '../reducers/manageBand'

class BandsContainer extends Component {
  // new able to acceess the dispatch as this.props.manageBand(newband)
  mapAllBands = () => {
    return this.props.bands.map(band => {
        return <li> {band.name} </li>
    })
  }
  render() {
    console.log(this.props.addBand)
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.mapAllBands()}
        </ul> 
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (newBand) => {
      dispatch({
        type: 'ADD_BAND',
        band: newBand
      })
    }, 
  }
}
// const mapStateToProps = state => {
//   return {
//     bands: state.bands 
//   }
// }

export default connect(state => ({ bands: state.bands }), mapDispatchToProps)(BandsContainer)
