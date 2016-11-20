import React from 'react'
import Grid from './Grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import MuiTheme from '../../../components/MuiTheme'
import './HomeView.scss'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { green100, green500, green700 } from 'material-ui/styles/colors'

const MuiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
    fontFamily: 'Josefin Sans'
  }
}, {
  avatar: {
    borderColor: null
  },
  userAgent: 'all'
})

export const HomeView = () => (
  <div>

    <MuiThemeProvider muiTheme={MuiTheme}>
      <Grid />
    </MuiThemeProvider>
  </div>
)

export default HomeView
