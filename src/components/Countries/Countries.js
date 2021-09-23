import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h2>World Tour... Traveling to the world!</h2>
            <div className="container">
                {
                    countries.map(country => <Country
                        key={country.alpha3Code}
                        country={country}
                    ></Country>)
                }
            </div>
        </div >
    );
};

export default Countries;