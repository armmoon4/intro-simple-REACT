import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries , setVisitedCountries] = useState([]);

    const countries = use(countriesPromise);


    const handleVisitedCountries = (country) => {
        console.log("country visited clicked to be added" , country);
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }

    console.log(countries);
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Travel so far: {visitedCountries.length}</h3>
            <ol>
                {visitedCountries.map(country=> <li>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        handleVisitedCountries= {handleVisitedCountries}
                         country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;