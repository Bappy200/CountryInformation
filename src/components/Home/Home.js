import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CountryItem from './CountryItem';
import './Home.css';
function Home() {
    const [countrys, setCountrys] = useState([])

    //get data form api
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountrys(data))
    }, [])
    console.log()
    return (
        <>
        <Header></Header>
         <section className='content'>
             <Grid container spacing={3}>
                {
                    countrys.map(country => <CountryItem key={country.name} {...country}/>)
                }
             </Grid>
            </section>
        </>
        
    )
}

export default Home
