import React from 'react'
import img from './holi img/fest.jpg'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='container mt-3 mb-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4 '><div className='text-center'><img className='w-50 h-50' src={img} /></div>
                        <br /><IoCall style={{ color: '#5CFF23' }} /> <span className='ff'>+91 6367248340</span><br />
                        <FaLocationDot style={{ color: '#5CFF23' }} /> <span className='ff'>198, Gandhi Path W, Girnar Colony, Block E,  Vaishali Nagar, Jaipur, Rajasthan 302021</span>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center pt-4'><h3 className='fo mb-3'>Home</h3>

                        <p className='ff'>Red</p>
                        <p className='ff'>Green</p>
                        <p className='ff'>Blue</p>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 text-center pt-4'><h3 className='fo mb-3'>Coffee</h3>
                        <p className='ff'>Caffe Latte</p>
                        <p className='ff'>Espresso</p>
                        <p className='ff'>Caffe Mocha</p></div>

                </div>
            </div>
        </div>
    )
}

export default Footer