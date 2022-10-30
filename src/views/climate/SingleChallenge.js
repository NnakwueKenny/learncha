import React from 'react'
import { Link, useParams } from 'react-router-dom';

const SingleChallenge = () => {
	const { challenge } = useParams();
  const currentChallenge = challenge.split('=')[1];
  console.log(currentChallenge);
  
  return (
    <section className="promo w-full flex flex-col items-center py-4x">
        <div className='border-b shadow-3xl w-full h-[1px] mb-8 mt-2'></div>
        <div className='relative w-full max-w-6xl border-2 border-dashed rounded-3xl overflow-hidden border-cyan-500'>
            <div className='flex flex-col items-center md:flex-row md:justify-between gap-3 py-4 shadow px-4 md:px-8'>
                <div style={{fontFamily: 'Gochi Hand'}} className='text-cyan-500 font-semibold text-3xl text-center md:text-start'>Climate Challenge</div>
                <form className='relative flex w-full max-w-md md:max-w-xs'>
                    <div className='w-full flex justify-center'>
                        <label className='sr-only'>Search Climate</label>
                        <input id='search_challenge' placeholder='Search Challenges...' className='border rounded-xl w-full py-2.5 px-2' />
                    </div>
                    <button className='absolute right-0 flex justify-center items-center h-full px-3'><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className='flex px-6 py-4 h-full overflow-auto justify-center items-start lg:justify-start gap-4 flex-col lg:flex-row'>
              <div className='py-2'>
                <Link to='/climate/challenge' className='text-2xl hover:text-cyan-500'><i className='fa fa-arrow-left'></i></Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default SingleChallenge