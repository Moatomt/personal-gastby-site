import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Moatomt:</strong>{' '}
      <span>Tech log, cyber security journey and personal space</span>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
