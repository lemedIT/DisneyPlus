import React, { Component, Fragment } from 'react';
import Movie from '../components/Movie.js';

export default class MoviesSuggested extends Component {

    state = {
        movies : []
    }

    //Méthode appelée après le premier rendu du component
    componentDidMount() { //Via le componentDidMount, on appelle la méthode asynchrone
        this.getMoviesSuggested();
    }

    // Méthode asynchrone pour récupérer les données d'un membre provenant d'une API
    async getMoviesSuggested() {
        const data = await fetch("https://elorri.fr/api/disney-plus/suggest").then(response => response.json());
        // Il ne reste plus qu'à mettre à jour le state pour injecter les données de l'API dans le tableau movie
        this.setState({
            movies:data.slice(0,3)
        })
   }

    render() {
        const listMoviesSuggested = this.state.movies.map((movie) => {
            return (
              <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.cover}/> // <- Ceci est un composant
            )
        });

        return (
            <Fragment>{listMoviesSuggested}</Fragment>
        )
    }
}