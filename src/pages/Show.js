import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';
const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=season&embed[]=cast`)
      .then(results => {
       setShow(results);
    })
  }, [id])
   
  

console.log("show",show)

  return (
      <>
          <h1>This is show page</h1>
   </>
  )
}

export default Show;
