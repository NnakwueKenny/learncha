
import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Resources = () => {

  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <div>
            <h1>Resources</h1>
        </div>
        <div className='w-full max-w-5xl px-5'>
            <h2 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-xl text-center'>Get access to wide range of study resources/materials, books, in various formats (like pdf) read, download and share at will. You can also use our dicrionary to assist you in your learning journey...</h2>
        </div>
        <div className='flex flex-col items-center w-full py-8 px-4 md:px-8 gap-4 md:gap-8 xl:gap-12'>
            <div className='flex flex-col justify-center w-full max-w-5xl items-center py-6 px-4 border-2 rounded-xl overflow-hidden border-dashed border-red-500'>
                <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-red-400 font-semibold text-5xl pb-4'>Books</h3>
                <div data-aos="fade-right" className='flex flex-col md:flex-row gap-4 px-6 py-4 rounded-xl shadow'>
                    <div className='w-full'>
                        <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                    <div className='flex flex-col gap-4 w-full items-center py-4'>
                        <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                            itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus itaque culpa soluta ...
                        </p>
                        <Link to='/resources/books'>
                            <a className='btn blue border-2 border-dashed rounded-3xl border-red-400 text-red-500 hover:text-white hover:bg-red-500' >View Books</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full max-w-5xl items-center py-6 px-4 border-2 rounded-xl overflow-hidden border-dashed border-green-500'>
                <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-green-500 text-4xl pb-4'>Dictionary</h3>
                <div data-aos="fade-right" className='flex flex-col md:flex-row gap-4 px-6 py-4 rounded-xl shadow'>
                    <div className='w-full'>
                        <img src='https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                    <div className='flex flex-col gap-4 w-full items-center py-4'>
                        <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                            itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus itaque culpa soluta ...
                        </p>
                        <Link to='/resources/dictionary' className='btn blue border-2 border-dashed rounded-3xl border-green-400 text-green-500 hover:text-white hover:bg-green-500'>Search</Link>
                    </div>
                </div>
            </div>
            
            {/*<img src='https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600' />*/}
        </div>
    </section>
  )
}

export default Resources