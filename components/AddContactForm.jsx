import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const AddContactForm = () => {
    const navigate = useNavigate()
    const [inputData,setInputData] = useState({
        name:"",
        id:"",
        email:"",
        age:""
    })
    const handleSubmit = (e) =>{
        axios.post("http://localhost:4000/contacts", inputData)
        .then((contacts) => contacts.json())
        .catch(err=>console.log(err))
        e.preventDefault()
        navigate('/')
    }
    console.log(inputData)
    return (
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
                                            <input type='name' className='form-control' placeholder='enter name' onChange={(event)=>setInputData({...inputData,name:event.target.value})} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-3 text-center">
                                            <input type='email' className='form-control' placeholder='enter email' onChange={(event)=>setInputData({...inputData,email:event.target.value})} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col p-3 text-center">
                                            <input type='number' className='form-control' placeholder='enter age' onChange={(event)=>setInputData({...inputData,age:event.target.value})} />
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
    )
}

export default AddContactForm