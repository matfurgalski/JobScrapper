import React ,{ useState, useEffect }from 'react';
import WorkPlaceFilter from "./WorkPlaceFilter"

export default function Filters({workplace,filterWp}) {


  
  return (
    <>
    <WorkPlaceFilter cityInit={workplace} filteredWorkplace={(city)=> filterWp(city)}/>
        
    </>
  )
}