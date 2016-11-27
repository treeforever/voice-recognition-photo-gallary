import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { turnOnMic, turnOffMic } from '../../../actions/micActions'
import { hello, showAPhoto, showPhotos } from '../../../actions/photoActions'
import Grid from './Grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from '../../../components/MuiTheme'
import MicFile from './Mic'
import './HomeView.scss'
import SpeckyComponent from '../../../SpeckyComponent'
const S = require('specky')

const tilesData = [
  {
    img: 'http://www.demilked.com/magazine/wp-content/uploads/2015/05/adorable-bird-animal-owl-photography-sasi-smith-fb.jpg',
    title: 'owl babies',
    author: 'jill111'
  },
  {
    img: 'http://static.boredpanda.com/blog/wp-content/uploads/2016/07/best-iphone-photography-awards-winners-2016-fb__700-png.jpg',
    title: 'Smiling foxes',
    author: 'pashminu'
  },
  {
    img: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/12/rain-street-photography-glass-raindrops-oil-paintings-eduard-gordeev-17.jpg',
    title: 'Blurred city',
    author: 'Danson67'
  },
  {
    img: 'https://static1.squarespace.com/static/5620463ee4b0d17f9945b588/t/57b39cbb8419c221bca284a7/1471388913639/Moments-by-lauren-Photographer-Hamilton-Ontario-Wedding-Lifestyle-Photography',
    title: 'Cameras are ready',
    author: 'fancycrave1'
  }
]
console.log('aaaaa', annyang)

class HomeView extends SpeckyComponent {
  static propSpecs = S.props({
    required: {

    },
    optional: {

    }
  })
  handleMicOnClick = () => {
    if (!this.props.micOn) {
      this.props.turnOnMic()
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
    return (
      <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
          <MicFile.Mic onClick={this.handleMicOnClick} />
          <MicFile.MicOff onClick={this.handleMicOffClick} />
          <Grid tilesData={tilesData} />
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
      showPhotos
    }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    micOn: state.mic.micOn,
    state: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
