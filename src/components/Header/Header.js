import React from 'react'
import { IndexLink, Link } from 'react-router'
// import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import OwlImage from '../../routes/Home/assets/owl.jpg'
// import HomeView from '../../routes/Home'
// import TagView from '../../routes/Tag'
import './Header.scss'

export const Header = () => (
  <div>
    <span id='app-title'>Owl my photos</span>
    <img
      alt='This is a owl!'
      className='owl'
      src={OwlImage}
      width='200px'
      height='200px' />
 <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/tag' activeClassName='route--active'>
      Tag
    </Link>

    </div>
)

export default Header


