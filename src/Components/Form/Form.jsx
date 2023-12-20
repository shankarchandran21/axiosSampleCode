import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Api from '../../axios'
import { useParams } from 'react-router-dom';
function Form() {
const [person,setPerson] = useState({name:'',email:""})

const {id} = useParams()
console.log(id)

const fetchPerson = async ()=>{
  const res = await Api.get(`/user/${id}`)
  setPerson((prev)=>{
      return {...prev,name:res.data.name,email:res.data.email}
  })
}
useEffect(()=>{
  if(id){
      fetchPerson()
  }
},[id])



const changeHandler=(e)=>{

  const name = e.target.name;
  const value = e.target.value
  setPerson((prev)=>{
      return{...prev,[name]:value}
  })
}


const postData = async ()=>{
  try {
    const res = await Api.post(`/user`,person)
    console.log(res)
} catch (error) {
  console.log(error)
}

}

const editUser =async ()=>{
  try {
    const res = await Api.put(`/user/${id}`,person)
    console.log(res)
} catch (error) {
  console.log(error)
}
}

const submitHandler =   (e)=>{
  e.preventDefault()
  // axios.post('http://localhost:3031/User',person)
  // .then((res)=>console.log(res.data))
  // .catch((err)=>console.log(err))

 

 if(id){
    editUser()
 }else{
  postData()
 }
navigator('/dashboard')
 

}



// console.log(person)



  return (
    <div>
        <input type='text' value={person.name} name='name' placeholder='Enter Name' onChange={changeHandler} />
        <input type='text' value={person.email} name='email' placeholder='Enter Email' onChange={changeHandler} />
          <button type='button' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Form