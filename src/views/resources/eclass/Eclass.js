
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import vid2 from '../../../images/learn2.mp4';

const Eclass = () => {

  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <div className='w-full flex'>
            <Link to='../resources/'>
                <span className='flex items-center justify-center text-xl w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-blue-500 hover:border-blue-400 rounded-full text-blue hover:text-blue-400'>
                    <i className='fa fa-arrow-left'></i>
                </span>
            </Link>
            <div className='w-full flex justify-center'>
                <h3 style={{fontFamily: 'Gochi Hand'}} className='text-blue-400 font-semibold text-4xl pb-4'>e-classroom</h3>
            </div>
        </div>
            <div className='w-full py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Mathematics</h3>
                    </div>
                    <video className='w-full h-72 md:h-64 rounded-b-xl' controls>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Mathematics</h3>
                    </div>
                    <video className='w-full h-72 md:h-64 rounded-b-xl' controls>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Mathematics</h3>
                    </div>
                    <video className='w-full h-72 md:h-64 rounded-b-xl' controls>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Mathematics</h3>
                    </div>
                    <video className='w-full h-72 md:h-64 rounded-b-xl' controls>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Mathematics</h3>
                    </div>
                    <video className='w-full h-72 md:h-64 rounded-b-xl' controls>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Mathematics</h3>
                    </div>
                    <video className='w-full h-72 md:h-64 rounded-b-xl' controls>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>
            </div>
    </section>
  )
}

export default Eclass