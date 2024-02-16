import React, { Component } from 'react'
import { Tag } from 'antd'

export default class MovieDetail extends Component {

    state = {
        movie : {} 
    }

    //Méthode appelée après le premier rendu du component
    componentDidMount() { //Via le componentDidMount, on appelle la méthode asynchrone
        this.getMovie(this.props.match.params.id);
    }

    // Méthode asynchrone pour récupérer les données d'un membre provenant d'une API
    async getMovie(id) {
        const data = await fetch("https://elorri.fr/api/disney-plus/movie/" + id).then(response => response.json());
        // Il ne reste plus qu'à mettre à jour le state pour injecter les données de l'API dans le tableau movie
        this.setState({
            movie:data
        })
   }

    render() {
        return (
            <div class="container">               
                <div class="cover box-shadow"><img src={this.state.movie.poster}></img></div>
                <div class="text">
                    <h1>{this.state.movie.title}</h1>
                    <Tag color="#00b9dc">{this.state.movie.company}</Tag>
                    <p>{this.state.movie.description}</p>
                </div>
            </div>
        )
    }
}
