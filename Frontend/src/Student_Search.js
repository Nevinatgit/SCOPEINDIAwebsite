import React, { useState } from 'react'
import './styles/Style.css'
import './styles/SStyles.css'
import Card from './Card'
import axios from 'axios'
import { useAppContext } from './Context'

export default function Student_Search() {
  let [query,setquery] = useState("")
  let [courselist,setcourselist]= useState([])
  let API = async (e)=>{
    e.preventDefault()
    let result=await axios.post("http://localhost:8000/api/Student/searchCourse",{
      query:query
    })
    console.log(result.data.searchResult)
    if(result.data.searchResult){
    setcourselist(result.data.searchResult)
    }else{
      setcourselist([])
    }
  }
  return (
    <div>
        <div className='SSTop1'>
        <div className='Tag'>
        <h1>Search For Courses</h1>
      </div>
    <br/>
            <form className='d-flex cc' onSubmit={API}>
              <input className='form-control me-2' style={{borderColor:"red"}} type="search" aria-label="Search" onChange={(e)=>setquery(e.target.value)} />
              <button className='btn btn-outline-danger' type="submit" >Search</button>
            </form>
        </div>
        <hr/>
        <div>
        <div className='cards1'>
          {
          courselist.map((course)=>{
      
            return(
            
              <Card rbutton={true}  Type={course.Type} duration={course.Duration} Fee={course.fee} Name={course.Name} logo={"/images/"+course.imageName+".png"}/>
            )
          })
        }
        </div>
        </div>
    </div>
  )
}
