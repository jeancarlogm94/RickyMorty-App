import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
// import Logo from '../assets/img/Logo.png'

const Location = () => {

    const [ location, setLocation ] = useState({})
    const [ id, setId ] = useState("")

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
          axios.get(`https://rickandmortyapi.com/api/location/${random}`)
          .then(res => setLocation(res.data))
    }, [])

    console.log("",location)
    
    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then((res) => setLocation(res.data));
      };

    return (
        <div className='Nav'>
            <h1>Rick and Morty App</h1>
            <img className='logo' src="https://preview.redd.it/o6cwlzg3exk41.png?auto=webp&s=eaad71f0c76522a309978bbd65b1a06902e56970" alt="" />
            {/* <img src={Logo} alt="" /> */}
            <h2>Location {location.name}</h2>
            <h3>ID {location.id}</h3>
            <p><b>Type: </b>{location.type}</p>
            <p><b>Dimension: </b>{location.dimension}</p>
            <p><b>Population: </b>{location.residents?.length}</p>
        <div className='card'>
            <input type="text" placeholder='Search for ID location (1-126)' onChange={(e) => setId(e.target.value)} value={id} />
            <button className='btnSearch' onClick={searchType}>Search</button>
            <ul>
                {
                location.residents?.map((urls) => (
                <ResidentInfo url={urls} key={urls}/>
                ))}
            </ul>
         </div>
        </div>
    );
};

export default Location;