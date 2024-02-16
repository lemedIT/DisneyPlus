import React, { Component, Fragment } from 'react';
import Header from '../components/Header.js';
import Movie from '../components/Movie.js';


export default class MoviesFromCompany extends Component {

    state = {
        movies : []
    }

    //Méthode appelée après le premier rendu du component
    componentDidMount() { //Via le componentDidMount, on appelle la méthode asynchrone
        this.getMoviesFromCompany(this.props.match.params.name);
    }

    // Méthode asynchrone pour récupérer les données d'un membre provenant d'une API
    async getMoviesFromCompany(name) {
        const data = await fetch("https://elorri.fr/api/disney-plus/company/" + name).then(response => response.json());
        // Il ne reste plus qu'à mettre à jour le state pour injecter les données de l'API dans le tableau movie
        this.setState({
            movies:data
        })
   }

    render() {
        const listMoviesFromCompany = this.state.movies.map((movie) => {
            return (
              <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster}/> // <- Ceci est un composant
            )
        });

        return (
            <Fragment>
                <Header/>
                <div className="container bannerCompany">
                    <img src={`${process.env.PUBLIC_URL}/img/companies/logo-${this.props.match.params.name}.png`} alt={`Logo ${this.props.match.params.name}`} />
                    <div className="">vous présente tout son catalogue</div>
                </div>
                <div className="container">
                    {listMoviesFromCompany}
                </div>
            </Fragment>
        )
    }
}
