import { useState, useEffect } from "react";
import axiosClient from "./axios-client.js";


export default function PolandCity() {

   // const [polandCity, setpolandCity] = useState([]);

    useEffect(()=>{
        axiosClient.get(`/offers/city`)
            .then(({data}) => {
              //  setpolandCity(data)
              console.log(data)
                return data;
                
            })  
    },[])

  

  }