import React from 'react'
import { IndexLink, Link } from 'react-router'
import OwlImage from '../../routes/Home/assets/owl.jpg'
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
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
)

export default Header
