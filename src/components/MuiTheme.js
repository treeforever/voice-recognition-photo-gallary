import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { green100, green500, green700 } from 'material-ui/styles/colors'

export const MuiTheme = getMuiTheme({
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
