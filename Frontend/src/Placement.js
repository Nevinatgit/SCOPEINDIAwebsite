import React from 'react'
import './styles/PStyles.css'
import Header from './Header'
import Footer1 from './footer'
import PCard from './PCard'

export default function Placement() {
  return (
    <div>
        <Header/>
        <div className='PTop1'>
          
            <div>
           <h1>Placement</h1>
           <p>SCOPE India has trained and placed 100s of aspiring students</p>
           </div>
          
           <img alt="" width="575px" height="500px" src="H.jpg"/>
          
          
        </div>
        <div className='PTop2'>
            <br/>
            <br/>
            <h1>1000s placed and counting ....</h1>
            <div>
            <PCard post="Software Developer" logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard post="Web Developer" logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard post="Web Designer" logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard post="Web Designer" logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard post="Web Designer" logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            <PCard logo="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Name="Student X"/>
            </div>
        </div>
        <Footer1/>
    </div>
  )
}
