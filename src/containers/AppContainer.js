import React, { Component, PropTypes } from 'react'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import HomeView from '../routes/Home'
import TagView from '../routes/Tag'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
  
 
      <Provider store={store}>
           

        <div style={{ height: '100%' }}>
          <Header />
          <Router history={browserHistory}>
            <Route path="/" component={HomeView}>
              <Route path="/tag" component={TagView}/>
            </Route>
          </Router>
          
        </div>
      </Provider>
    )
  }
}

export default AppContainer
