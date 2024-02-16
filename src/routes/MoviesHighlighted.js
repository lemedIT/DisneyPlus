import React, { Component, Fragment } from 'react';
import Movie from '../components/Movie.js';

export default class MoviesHighlighted extends Component {

    state = {
        movies : []
    }

    //Méthode appelée après le premier rendu du component
    componentDidMount() { //Via le componentDidMount, on appelle la méthode asynchrone
        this.getMoviesHighlighted();
    }

    // Méthode asynchrone pour récupérer les données d'un membre provenant d'une API
    async getMoviesHighlighted() {
        const data = await fetch("https://elorri.fr/api/disney-plus/movies").then(response => response.json());
        
        // Utilisez la méthode filter pour obtenir uniquement les films avec highlighted: true
        const highlightedMovies = data.filter(movie => movie.highlighted === true);

        // Il ne reste plus qu'à mettre à jour le state pour injecter les données de l'API dans le tableau movie
        this.setState({
            movies:highlightedMovies
        })
   }

    render() {
        const listMoviesHighlighted = this.state.movies.map((movie) => {
            return (
              <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.cover}/> // <- Ceci est un composant
            )
        });

        return (
            <Fragment>{listMoviesHighlighted}</Fragment>
        )
    }
}