
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Resources = () => {


    useEffect(() => {
        let speakData = new SpeechSynthesisUtterance();
        speakData.volume = 1; // From 0 to 1
        speakData.rate = 1; // From 0.1 to 10
        speakData.pitch = 2; // From 0 to 2
        speakData.lang = 'en';
        speechSynthesis.cancel();
    }, []);

  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <div>
            <h1>Resources</h1>
        </div>
        <div className='flex flex-col items-center w-full py-8 px-4 md:px-8 gap-4 md:gap-8 xl:gap-12'>
            <div className='flex flex-col justify-center w-full max-w-5xl items-center py-6 px-4 border-2 rounded-xl overflow-hidden border-dashed border-red-500'>
                <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-red-400 font-semibold text-5xl pb-4'>Books</h3>
                <div data-aos="fade-right" className='flex flex-col md:flex-row gap-4 px-6 py-4 rounded-xl shadow'>
                    <div className='w-full'>
                        <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                    <div className='flex flex-col gap-4 w-full items-center py-4'>
                        <p className='mb-auto font-bold text-2xl text-center'>Go through our various collection of children books ranging from science to mathematics english etc. for children from grade 1-6</p>
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
                        <p className='mb-auto font-bold text-2xl text-center'>Find the meaning to words and also learn new word in a fun way by using our embedded text to speech API</p>
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