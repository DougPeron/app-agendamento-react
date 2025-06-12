import React from 'react'
import { FiPhone } from 'react-icons/fi'
import './HeaderHome.scss'

const HeaderHome = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="header-contact">
        <FiPhone style={{ color: '#0056b3', marginRight: '8px', verticalAlign: 'middle' }} />
        <span>(11) 99999-9999</span>
      </div>
      <div className="header-login">
        <button>Login</button>
      </div>
    </header>
  )
}

export default HeaderHome
