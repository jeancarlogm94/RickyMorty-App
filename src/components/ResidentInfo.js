import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [ location, setLocationId ] = useState({})
    const [color, setColor] = useState("green");
 
    useEffect(() => {
      axios.get(url)
      .then(res => setLocationId(res.data))
      if (location.status === "Alive") {
        setColor("green");
      } else if (location.status === "Dead") {
        setColor("red");
      } else {
        setColor("gray");
    } 
    }, [url, location.status])

    // console.log("", location)

    return (
        <div className='residents'>
            <h3>{location.name}</h3>
            <button style={{backgroundColor: `${color}`}}>{location.status}</button>
            <img src={location.image} alt="" />
            <p><b>Origin: </b> {location.origin?.name}</p>
            <p><b>Number of episodes: </b>{location.episode?.length}</p>
            {/* <li>
                {url}
            </li> */}
        </div>
    );
};

export default ResidentInfo;
