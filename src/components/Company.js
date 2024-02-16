import React from 'react'
import { Link } from 'react-router-dom'

const Company = ({ name }) => {    
  return (
          <div className="card box-shadow">
            <Link to={`/company/${name}`}>
                <img src={`${process.env.PUBLIC_URL}/img/companies/logo-${name}.png`} alt={`Logo ${name}`} />
            </Link>
        </div> 
  )
}

export default Company