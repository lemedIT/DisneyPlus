import React, { Fragment } from 'react'
import Header from './Header.js'

const NotFound = () => {
  return (
    <Fragment>
      <Header/>
      <h1 className="page404">Erreur 404 : la page demandée n'existe pas !</h1>
    </Fragment>
  )
}

export default NotFound