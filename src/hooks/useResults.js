import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm)=> {
    try{
      const response = await yelp.get('/search', {
        params: {
          limit:50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
      console.log('searched for '+searchTerm);
    } catch(err){
      setErrorMessage('Something went wrong');
    }
  }

  // This code is called only once
  // Call search api when component first rendreed
  // useEffect(()=> {searchApi('pasta')});  calls only eeveerytime when the componnt is reloaded
  // useEffect(()=> {searchApi('pasta')}, []);  calls only once during initial loader
  // useEffect(()=> {searchApi('pasta')}, [value]);  calls only when the value changes

  useEffect( ()=> {searchApi('pasta')}, []);
  return [searchApi, results, errorMessage];
};


export default useResults;
