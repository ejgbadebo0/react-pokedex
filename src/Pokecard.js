import React from 'react';

const API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = (props) => {
    let poke_img = `${API}${props.id}.png`;
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={poke_img} alt=''></img>
            <p>Type: {props.type}</p>
        </div>
    );
}

export default Pokecard;