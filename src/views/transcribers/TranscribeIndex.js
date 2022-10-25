import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import Intro from './components/Intro';
import MainHead from './components/MainHead';
import TranscribeNumber from './TranscribeNumbers';

const TranscribeIndex = () => {
  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <MainHead title='Transcribers' />
        <Intro />
        <div className='w-full flex max-w-5xl'>
            <div class="dvdr"></div>
            <div className='w-full py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col rounded-xl shadow-md overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Numbers</h3>
                    </div>
                    <Link to='/transcribers/transcribe-numbers' className='bg-yellow-500'>
                        <img className='w-full h-72 md:h-64' alt='' src='https://images.pexels.com/photos/1314536/pexels-photo-1314536.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
                <div className='flex flex-col rounded-xl shadow-md overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-red-400 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Alphabets</h3>
                    </div>
                    <Link to='/transcribers/transcribe-alphabets' className='bg-yellow-500'>
                        <img className='w-full h-72 md:h-64'  alt='' src='https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
                <div className='flex flex-col rounded-xl shadow-md overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-yellow-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Words</h3>
                    </div>
                    <Link to='/transcribers/transcribe-words' className='bg-yellow-500'>
                        <img className='w-full h-72 md:h-64'  alt='' src='https://images.pexels.com/photos/9085647/pexels-photo-9085647.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
                <div className='flex flex-col rounded-xl shadow-md overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-green-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Sentence</h3>
                    </div>
                    <Link to='/transcribers/transcribe-sentences' className='bg-yellow-500'>
                        <img className='w-full h-72 md:h-64'  alt='' src='https://images.pexels.com/photos/5745014/pexels-photo-5745014.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TranscribeIndex