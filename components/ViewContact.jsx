import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'


const ViewContact = () => {
    const {id} =useParams()
    const [data1, setData1] = useState({})
    useEffect(()=> {
        axios.get('http://localhost:4000/contacts/'+id)
        .then(res=>{
            setData1(res.data)
        })
        .catch(err => console.log(err))
      }, [])
  return (
    <div className='conatiner'>
        
    </div>
  )
}

export default ViewContact