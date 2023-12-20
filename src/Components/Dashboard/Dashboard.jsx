import React, { useEffect, useState } from 'react'
import Api from '../../axios'
import { useNavigate } from "react-router-dom";

function Dashboard() {
const [data,setData] =useState([])
const navigator =  useNavigate()
const fetchData = async ()=>{
  try {
      const res = await Api('/user')
      setData(res.data)
  } catch (error) {
      console.log(error)
  }
}


useEffect(()=>{
  fetchData()
},[])


const editButton =(id)=>{
    navigator(`/${id}`)
}

const deleteButton = async (id)=>{

  try {
    const res = await Api.delete(`/user/${id}`)
    console.log(res)
} catch (error) {
  console.log(error)
}

}



if(true){
  return<h1>SHANKAR</h1>
}



  return (
    <div>{
        data.map(({id,name,email})=>{
            return<div key={id}>
              <h1>{name}</h1>
              <h5>{email}</h5>
                <button onClick={()=>editButton(id)}>Edit</button>
                <button onClick={()=>deleteButton(id)}>Delete</button>
            </div>
        })

      }</div>
  )
}

export default Dashboard