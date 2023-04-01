import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateContact = () => {
    const [inputData,setInputData] = useState({
        name: "",
        age:"",
        email:""
    })
    const navigate= useNavigate()
    const {id}= useParams()
    useEffect(()=> {
        axios.get('http://localhost:4000/contacts/'+id)
        .then(res=>setInputData(res.data))
        .catch(err => console.log(err))
      }, [])
    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.put("http://localhost:4000/contacts/"+id,inputData)
        .then(res=>{
            alert("updated")
            navigate('/')
        })
        .catch(err=>console.log(err))

    }
  return (
    <div>
        <div className='container'>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 border rounded  my-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3>Fill the contacts</h3>
                            </div>
                            <div className="row">
                                <div className="col bg-light my-2 p-3 text-center">
                                    <div className="row">
                                        <div className="col p-3 text-center">
                                            <input type='name' className='form-control' value={inputData.name} placeholder='enter name' onChange={(event)=>setInputData({...inputData,name:event.target.value})} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-3 text-center">
                                            <input type='email' className='form-control' value={inputData.email} placeholder='enter email' onChange={(event)=>setInputData({...inputData,email:event.target.value})} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-3 text-center">
                                            <input type='number' className='form-control' value={inputData.age} placeholder='enter age' onChange={(event)=>setInputData({...inputData,age:event.target.value})} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-3 text-end">
                                            <button className="btn btn-primary mx-2" onClick={() => navigate(-1)}>cancel</button>
                                            <button className="btn btn-primary" onClick={(e)=>handleSubmit(e)} >submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>

        </div>

    </div>
  )
}

export default UpdateContact