import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;