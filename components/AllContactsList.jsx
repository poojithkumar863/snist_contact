import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllContactsList = () => {

    const [data, setData] = useState([])
    const [flag,setFlag] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:4000/contacts")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [flag])
    console.log(data)
    const handleDelete = (id,e) =>{
        const confirm =window.confirm("R u sure to delete")
        if(confirm){
            axios.delete('http://localhost:4000/contacts/'+id)
            .then(
                res=>{alert("deleted")}
            )
            .catch(err=>console.log(err))
            e.preventDefault()
            setFlag(!flag);
        }
    }


    return (
        <div className='container p-3 m-2'>
            <div className="row">
                <div className="d-flex col border rounded bg-light">
                    <div className="container">
                        <div className="row">
                            <div className='col-6'>
                                <h1>All Contacts List</h1>
                            </div>
                            <div className='col-6 text-end py-2'>
                                <Link to='add-contacts' className='btn btn-outline-primary'>Add Contact+</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table>
                        <tbody>
                            <tr>
                                {data.map(contact => {
                                    return(
                                        <div>
                                            <td><h4>{contact.name}</h4>
                                            <p>{contact.email}</p></td>
                                            <div className='justify-content-end'>
                                            <td className='text-end'>
                                                <Link to={`view-contact/${contact.id}`} className="btn btn-info mx-2">View</Link>
                                                <Link to={`update-contact/${contact.id}`} className="btn btn-primary mx-2">edit</Link>
                                                <button  onClick={(e)=>{handleDelete(contact.id,e)}} className="btn btn-danger mx-2">Danger</button>
                                            </td>
                                            </div>
                                        </div>
                                    );
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllContactsList