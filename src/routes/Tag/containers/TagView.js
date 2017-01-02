import React from 'react'
// import { showAPhoto, showPhotos, flickrPublicPhotos, handleSearch } from '../../../actions/photoActions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from '../../../components/MuiTheme'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './TagView.scss'
import ClauseComponent from '../../../ClauseComponent'
const C = require('clausejs')

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
        hello world
        </div>
      </MuiThemeProvider>
    )
  }
}

export default TagView

