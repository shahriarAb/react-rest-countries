import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flags, name, capital, region, population } = props.country;
    return (
        <div className="country-style">
            <img src={flags[0]} alt="" />
            <h2>{name}</h2>
            <p>Capital: <b>{capital}</b></p>
            <p><small>Region: <b>{region}</b></small></p>
            <p>population: <b>{population}</b></p>
        </div>
    );
};

export default Country;