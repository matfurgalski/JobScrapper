import axiosClient from "../axios-client.js";
import React ,{ useState, useEffect }from 'react';
import { useParams } from "react-router-dom"
import Pagination from './Pagination';


export default function Offers() {

    const [offers, setOffers] = useState([]);
    const [page, setPage] = useState({
        number:0,
        size:0,
        totalElements:0,
        totalPages:0
    });
    const [loading, setLoading] = useState(false);
    const {id} = useParams()
    const {city} = useParams()

    useEffect(()=>{
        getOffer();
    },[])
  

  const getOffer = () => {
    if(id || city ){
       
    setLoading(true)
    axiosClient.get(`/offers?page=${Number(id)-1}${city?`&displayWorkplace=${city}`:``}`)
        .then(({data}) => {
            setOffers(data.content)
            setPage(data.page)
            setLoading(false)
        })
        .catch(() => {
            setLoading(false)
        })
    }
    else{
        setLoading(true)
    axiosClient.get(`/offers`)
        .then(({data}) => {
            setOffers(data.content)
            setPage(data.page)
            setLoading(false)
        })
        .catch(() => {
            setLoading(false)
        })
    } 
    
}

    return (
        <>
         {loading? ('loading...'):
         ( 
      <ul role="list" className="divide-y divide-gray-100">
        {offers.map((offer,index) => (
        <div key={index}>

        {offer.jobOffers.length === 1?
        ( 
        <li key={index} >
           <a href={offer.jobOffers[0].offerAbsoluteUri} target="_blank" rel="noreferrer">
          <div  className="flex justify-between gap-x-6 py-5">
               
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src={offer.companyLogoUri} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{offer.jobTitle}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{offer.site}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{offer.jobOffers[0].displayWorkplace}</p>
           
                <div className="mt-1 flex items-center gap-x-1.5">
                  <p className="text-xs leading-5 text-gray-500">{new Date(offer.lastPublicated).toLocaleString()}</p>
                </div>
            
            </div>
            
          </div>
          </a>
          </li>
          )
          :
          (
          <>
            <li key={index} className="flex justify-between gap-x-6 py-5">
                 
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={offer.companyLogoUri} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{offer.jobTitle}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{offer.site}</p>

                  {offer.jobOffers.map((offr) =>(
            
             <a key={offr.offerAbsoluteUri} href={offr.offerAbsoluteUri} target="_blank" rel="noreferrer"><p className="mt-1 truncate text-md leading-5 text-gray-500">{offr.displayWorkplace}</p></a> 
            
            ))}
                </div>
                
              </div>
              
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Multiple Offers</p>
              <p className="text-xs leading-6 text-gray-900">Click on city</p>
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <p className="text-xs leading-5 text-gray-500">{new Date(offer.lastPublicated).toLocaleString()}</p>
                  </div>
              
              </div>
              
            </li>   
  
            
            </>
            
        )}
          </div> 
        ))}
        <Pagination pagee={page} cityy={city}/>
      </ul>

    )}
      
       
      </>
    )
  
  }