import React, { Component } from 'react';
import PokidexSearch from './PokedexSearch';
import LayoutStyle from './styles/LayoutStyle';

class MainComponent extends Component {
        render(){
                return(
                      <LayoutStyle>
                            <PokidexSearch
                            name="Test"
                            numberofPokemons={5} 
                            />
                      </LayoutStyle>      
                )
        }
}
   

export default MainComponent;