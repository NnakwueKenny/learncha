import React from 'react'
import { Link } from 'react-router-dom'
import Intro from '../climate/components/Intro'
import MainHead from '../transcribers/components/MainHead';

import imago_quad from './images/imago_quad.png';

const GamesIndex = () => {

  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <MainHead title='Games' />
        <Intro />
        <div className='w-full flex max-w-5xl'>
            <div class="dvdr"></div>
            <div className='w-full py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 sm:p-6 md:p-8'>
                <div className='flex flex-col border-2 border-dashed border-green-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-green-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Imago Quad</h3>
                    </div>
                    <Link to='/games/imago_quad'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl' alt='' src={imago_quad} />
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-red-400 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-red-400 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>L4 Game</h3>
                    </div>
                    <Link to='/transcribers/transcribe-alphabets'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src='https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-yellow-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-yellow-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Words</h3>
                    </div>
                    <Link to='/transcribers/transcribe-words'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src='https://images.pexels.com/photos/9085647/pexels-photo-9085647.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
                <div className='flex flex-col border-2 border-dashed border-cyan-500 rounded-xl shadow-md p-2 overflow-hidden cursor-pointer'>
                    <div className='text-center text-3xl text-cyan-500 py-2' style={{fontFamily: 'Gochi Hand'}}>
                        <h3>Transcribe Sentence</h3>
                    </div>
                    <Link to='/transcribers/transcribe-sentences'>
                        <img className='w-full h-72 md:h-64 rounded-b-xl'  alt='' src='https://images.pexels.com/photos/5745014/pexels-photo-5745014.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GamesIndex