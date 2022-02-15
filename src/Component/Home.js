import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PhoneBookApi from '../API/PhoneBookApi';

function Home() {

    const[contact,setContact] = useState([]);
    const[searchContact,setSearchContact] = useState('');


    const searchcontact = (e)=>{
        return axios.get(`http://localhost:4000/phonebook?q=${searchContact}`)
                .then(res=>{
                    setContact(res.data);
                    setSearchContact('')
                }).catch(err=>console.log(err.message))
}
const reset = ()=>{
    getContact()
}



    const getContact = ()=>{
        PhoneBookApi.getAll().then(res=>{
            setContact(res.data)
        })
    }

    const deleteHandler = (id)=>{
        if(window.confirm("If U want to Delete Contact " + id + "?")){
            PhoneBookApi.delete(id).then(res=>{
                toast.success("Contact deleted successfully..!");
                window.location.href = `/`
            })
            }else{
                toast.warning("Delete Contact Terminated..!")

        }
    }

    

    useEffect(()=>{
        getContact()

    },[])

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Contacts</h1>

            </div>
            <div className='row'>
               {
                   contact.length === 0 ? (
                       <div className='row'>
                           <h1 className='text-center'>No data found</h1>

                       </div>
                   ) : (
                       <div className='container'>
                           <input type="text" name="search" id="" placeholder='Search contact...' className='form-control m-2 w-75' value={searchContact} onChange={(e)=>{setSearchContact(e.target.value)}} />
                           <button className='btn btn-outline-success m-3' onClick={(e)=>{searchcontact(e)}}>Search</button> <span><button onClick={()=>{reset()}} className='btn btn-outline-danger'>Reset</button></span>
                          <div className='row'>                              
                           {
                               contact.map((item,key)=>{
                                   return(
                                           
                                            <div className='col-md-4 mt-2 mb-2'>
                                                
                                               
                                               <div className='card'>
                                                   <div className='card-header'>
                                                    <h6 className='text-center'>Contact : {item.id}</h6>

                                                   </div>
                                                   <div className='card-body'>
                                                   <ul className='list-group'>
                                                        <li className='list-group-item'>
                                                            <strong>Name :</strong>
                                                            <span className='float-end'>{item.name}</span>

                                                        </li>
                                                        <li className='list-group-item'>
                                                            <strong>Mobile :</strong>
                                                            <span className='float-end'>{item.mobile}</span>

                                                        </li>
                                

                                                    </ul>

                                                   </div>
                                                   <div className='card-footer'>
                                                       <Link to={`/update/${item.id}`} className='btn btn-outline-warning'>Edit</Link>
                                                       <button className='btn btn-outline-danger float-end' onClick={()=>{deleteHandler(item.id)}}>Delete</button>

                                                   </div>

                                               </div>

                                           </div>

                                   
                                                
                                         

                                
                                   )
                               })
                           }
                              </div>  
                              
                       

                       </div>

                      
                       
                   )
               }
            </div>
            
        </div>
    )
}

export default Home
