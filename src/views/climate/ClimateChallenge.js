import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
import ClimateHeader from './components/ClimateHeader';
import TrendingChallenge from './components/TrendingChallenge';

const ClimateChallenge = () => {
    
    const isActiveUser = AuthUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isActiveUser) {
            console.log('returning: ', isActiveUser);
            navigate("/climate/login");
        }
    });

  return (
    <section className="promo relative w-full flex flex-col items-center py-4x">
        <ClimateHeader title='Climate'/>
        <div className='border-b shadoww-3xl w-full h-[1px] mb-8 mt-2'></div>
        <div className='w-full max-w-6xl border-2 border-dashed rounded-3xl overflow-hidden border-cyan-500'>
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
            <div className='flex px-6 h-screen overflow-auto  justify-center items-center lg:justify-start gap-4 flex-col lg:flex-row'>
                <div className='flex flex-col h-full w-full overflow-auto py-4'>
                    <div className='flex flex-col h-full w-full overflow-auto py-4 border shadow'>
                        <div>Hello</div>
                    </div>
                </div>
                <div className='flex items-start w-full h-full lg:max-w-xs self-start py-4'>
                    <div className='w-full h-full py-2 overflow-auto p-3 rounded-xl shadow'>
                        <h3 style={{fontFamily: 'Gochi Hand'}} className='font-semibold text-xl pb-4 pt-2'>Trending Challenges</h3>
                        <TrendingChallenge />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClimateChallenge