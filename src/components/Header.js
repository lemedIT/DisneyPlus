import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {    
    return (
        <header>
            <div className="container">
            <Link to={`/`}><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo Disney +" /></Link>
            </div>
        </header>
    )
  }
  
  export default Header