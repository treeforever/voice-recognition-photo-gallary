import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { turnOnMic, turnOffMic } from '../../../actions/micActions'
import { hello, showAPhoto, showPhotos, flickrPublicPhotos, handleSearch } from '../../../actions/photoActions'
import Grid from './Grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from '../../../components/MuiTheme'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MicFile from './Mic'
import './HomeView.scss'
import ClauseComponent from '../../../ClauseComponent'
const C = require('clausejs')
import formFlickrUrl from './formFlickrUrl'

// Your contact IDs:
// 122593843@N04 - Images from the Wild
// 9085558@N03 - Outdoortype.photo
// 44351311@N04 - Susan Licht

console.log('annyang', annyang)

class HomeView extends ClauseComponent {
  static propSpecs = C.shape({
    required: {

    },
    optional: {

    }
  })
  handleMicOnClick = () => {
    if (!this.props.micOn) {
      this.props.turnOnMic()
      this.props.flickrPublicPhotos()
    }
  }

  handleMicOffClick = () => {
    if (this.props.micOn) {
      this.props.turnOffMic()
    }
  }

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'hello': function () {
        this.props.hello()
      },
      'show me a photo': function () {
        this.props.showAPhoto()
      },
      'show me all photos': () => {
        this.props.showPhotos()
      }
    }
    annyang.init(commands)

    // Add our commands to annyang
    annyang.addCommands(commands)

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start()
  }

  render () {
    console.log('photo is: ', this.props.photo.photoData, formFlickrUrl(this.props.photo.photoData))
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
          <MicFile.Mic onClick={this.handleMicOnClick} />
          <MicFile.MicOff onClick={this.handleMicOffClick} />
          <RaisedButton
            onTouchTap={() => this.props.handleSearch()}
            label='Search'
             />
          <Grid tilesData={formFlickrUrl(this.props.photo.photoData)} />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      turnOnMic,
      turnOffMic,
      hello,
      showAPhoto,
      showPhotos,
      flickrPublicPhotos,
      handleSearch
    }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    micOn: state.mic.micOn,
    photo: state.photo
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
