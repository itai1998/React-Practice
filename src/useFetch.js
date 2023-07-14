import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(()=>{
        // Implement AbortController() method 
        const abortCont = new AbortController();
        
        // Let AbortContolloer.signal as the second arugment in the fetch
        // It will not fetching the data when you navigate the Link
        fetch(url, {signal: abortCont.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data=>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{

                // If the err message is AbortError, log the message
                if(err.name ==='AbortError'){
                    console.log('fetch aborted');
                } else{
                    setIsPending(false); 
                    setError(err.message); 
                }
                
            })

            // Log the message in console
            return () => abortCont.abort();
            

    },[url]);

    return {data, isPending, error}
}

export default useFetch;