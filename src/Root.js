import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './routes/App.js'
import MovieDetail from './routes/MovieDetail.js'
import MoviesFromCompany from './routes/MoviesFromCompany.js'
import MoviesSuggested from './routes/MoviesSuggested.js'
import NotFound from './components/NotFound.js'

const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/movie/:id" component={MovieDetail}/> {/* :id est la syntaxe pour avoir des valeurs de variables dans l'url qui seront stockées dans un param portant le même nom */}
          <Route path="/company/:name" component={MoviesFromCompany}/>
          <Route exact path="/suggest" component={MoviesSuggested}/>
          <Route component={NotFound} /> {/* Si aucune route ne correspond à ce qui est affiché dans l'url, on affiche le composant NotFound */}
        </Switch>
    </BrowserRouter>
  )
}

export default Root