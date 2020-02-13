import React, { Component } from 'react'
import User from './User.interface';

export class PokedexSearch extends Component<User> {
    render() {
        const { name, numberofPokemons} = this.props;
        return (
            <div>
                    <p>User {name} has {numberofPokemons && <span>has {numberofPokemons} pokemons</span>} </p>
            </div>
        )
    }
}

export default PokedexSearch;
