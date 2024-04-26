import React from 'react'
import Header from './Header'
import img from './holi img/wis.jpg'
import Footer from './Footer'



const Home = ({cd}) => {
    

    return (
        <div>
            <header><Header /></header>
            <section> <div className='container-fluid bl pt-5 pb-5 mt-1'>  <div className='container pt-5 pb-5 '>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>{cd()}</div>
                    <div className='col-sm-12 col-md-6 col-lg-6 '><div className='bg' style={{ backgroundImage: `url(${img})` }}></div></div>

                </div>
            </div></div></section>
            <footer><Footer /></footer>
        </div>
    )
}

export default Home