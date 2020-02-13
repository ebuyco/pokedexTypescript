import React, { Component, RefObject, createRef} from 'react'
import User from './User.interface';
import SearchState from './Search.interface',
import PokeStyle from './styles/PokeStyle';

export class PokedexSearch extends Component<User, SearchState> {
    pokemonRef: RefObject<HTMLInputElement>;
    constructor(props: User){
        super(props);
        this.state = {
            error: false,
            name: '',
            numberofAbilites: 0,
            baseExperience: 0,
            imageUrl: ''
        }
        this.pokemonRef = createRef();
    }
    onSearchClick= () => {
            const inputValue = this.pokemonRef.current.value;
            fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(res => {
                    if(res.status !== 200){
                            this.setState({ error: true });
                            return;
                    }
                    res.json().then(data => {
                           this.setState ({
                                error: false,
                                name: data.name,
                                numberofAbilites: data.abilities.length,
                                baseExperience: data.base_experience,
                                imageUrl: data.sprites.front_default
                           })
                    })
            })
    }

    render() {
        const { name: userName, numberofPokemons} = this.props;
        const { error, name, numberofAbilites, baseExperience, imageUrl} = this.state;
        
        let resultMarkup;

        if(error){
            resultMarkup = <p>Pokemon not found please try again</p>
        } else {
            resultMarkup = 
            <div>
                    <img src={imageUrl} 
                    alt="pokemon" 
                    className="pokemon__image__style"
                    />
                    <p>
                        {name} has {numberofAbilites} and {baseExperience} base experience points.
                    </p>
            </div>
        }
        return (
            <PokeStyle>
                  
                    <p>User {userName}{''} has {numberofPokemons && <span>has {numberofPokemons} pokemons</span>} </p>
                    <input 
                    type="text" 
                    ref={this.pokemonRef}
                    className="text__style"
                    />
                    <button 
                    onClick={this.onSearchClick}
                    className="button__style"
                    >
                        Search
                    </button>   
                     {resultMarkup}
            </PokeStyle>
        )
    }
}

export default PokedexSearch;
