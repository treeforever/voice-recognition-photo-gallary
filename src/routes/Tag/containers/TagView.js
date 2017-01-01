import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { showAPhoto, showPhotos, flickrPublicPhotos, handleSearch } from '../../../actions/photoActions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from '../../../components/MuiTheme'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './TagView.scss'
import ClauseComponent from '../../../ClauseComponent'
const C = require('clausejs')

// Your contact IDs:
// 122593843@N04 - Images from the Wild
// 9085558@N03 - Outdoortype.photo
// 44351311@N04 - Susan Licht


class TagView extends ClauseComponent {
  // static propSpecs = C.shape({
  //   required: {

  //   },
  //   optional: {

  //   }
  // })

  render () {
    console.log('In TagView')
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      
    }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagView)

