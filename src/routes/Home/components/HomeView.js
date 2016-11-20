import React from 'react'
import { connect } from 'react-redux'
import Grid from './Grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTheme from '../../../components/MuiTheme'
import MicFile from './Mic'
import './HomeView.scss'

export const HomeView = () => (
  <MuiThemeProvider muiTheme={MuiTheme}>
    <div>
      <MicFile.Mic />
      <MicFile.MicOff />
      <Grid />
    </div>
  </MuiThemeProvider>
)

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
