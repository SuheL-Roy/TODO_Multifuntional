
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('sylhet');

    useEffect( () => {
        const fetchapi = async () => {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`
            const response = await fetch(url);
            const resjson = await response.json();
            setCity(resjson.main);
 
        };
        fetchapi();
    },[search])

    return(
        <>
           <div className="box">
               <div className="inputData">
                   <input type="search"
                   className="inputFeild"
                   onChange={(event)=>{
                       setSearch(event.target.value)

                   }}
                   />

               </div>

               { !city ? (
                   <p> No Data Found</p>
               ):
               
               (

                <div>
               <div className="info">
               <h2 className="location">
               <i className="fas fa-street-view"></i> {search}
               </h2>
               <h1 className="temp">
                  {city.temp}&deg;C
               </h1>
               <h3 className="tempmin_max">
                  Min: {city.temp_min}&deg;C | Max: {city.temp_max} &deg;C 
               </h3>

           </div>
           <div className="wave -one"></div>
           <div className="wave -two"></div>
           <div className="wave -three"></div>


           </div>


               )}
           </div>



        </>
    );
    
};

export default Home;