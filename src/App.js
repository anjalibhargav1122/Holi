import React from 'react'
import Home from './holi/Home'
import Coffee from './holi/Coffee'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function card() {

  

  return (
  
      <div className='card border-0'>
          <div className='card-body'>
              <h1 className='text-center fm'>HOLI</h1>
              <p className='fp'>
                  Holi marks the change in agricultural seasons and the beginning of a good harvest. Additionally, it signifies the importance of the ancient stories and traditions mentioned in Hindu scriptures. The festival is crucial for fostering social unity and love. On this day, people play with colors and make a commitment to rid themselves of evil.</p>
              <div className='row'>
                  <div className='col-sm-12 col-md-3 col-lg-3'></div>

                  <div className='col-sm-12 col-md-6 col-lg-6'>
                      <button className='btn btn-warning me-2 '  >Buy Color</button>
                      <button className='btn btn-outline-success'>Our Services</button></div>
                  <div className='col-sm-12 col-md-3 col-lg-3'></div>


              </div>
          </div>
      </div>
     
  )

}


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home cd={card}/>}/>
      <Route path='/coffee' element={<Coffee cd={card}/>}/>
      </Routes></BrowserRouter>
    </div>
  )
}

export default App