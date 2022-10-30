import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
import ClimateHeader from './components/ClimateHeader';
import CreateChallengeModal from './components/CreateChallengeModal';
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

    const [showChallengeModal, setShowChallengeModal] = useState(false);
    const toggleChallengeModal = () => {
        console.log('Modal toggled')
        setShowChallengeModal(prevValue => !prevValue);
    }

  return (
    <section className="promo w-full flex flex-col items-center py-4x">
        <ClimateHeader title='Climate'/>
        {
            showChallengeModal && 
            <CreateChallengeModal
                toggleChallengeModal = {toggleChallengeModal}
            />
        }
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
            <div className='flex px-6 h-full overflow-auto justify-center items-start lg:justify-start gap-4 flex-col lg:flex-row'>
                <div className='flex h-full overflow-y-auto flex-col w-full overflow-auto py-4'>
                    <div className='flex flex-col gap-4 w-full overflow-auto'>
                        <div className='font-sans border rounded-xl shadow p-4'>
                            <h2 className='font-semibold text-2xl pb-4'>About Climate Challenge</h2>
                            <p className='text-justify pb-2'>
                                Cities and local communities around the world have been focusing on solving their own climate problems.
                                They are working to build flood defenses, plan for heat waves and higher temperatures, install better-draining
                                pavements to deal with floods and stormwater, and improve water storage and use.
                            </p>
                            <p className='text-justify'>
                                And the best way to achieve this is by joining forces together because 'Together we can make the world a better place'.
                                This platform aims at bringing people together, to tackle the various issues faced by our climate today, in order to mitigate
                                obvious threats that these issues pose to us.
                            </p>
                        </div>
                        <div className='font-sans border rounded-xl shadow p-4'>
                            <h2 className='font-semibold text-2xl pb-4'>Challenge Categories</h2>
                            <p className='pb-3 text-base'>There are many categories of the challenges that you can join, create and/or invite family, friends, colleauges to partake of
                            in order to '<span className='font-semibold text-cyan-500 italic'>make the world a better place for us to live in</span>':</p>
                            <ul className='px-4 pl-6'>
                                <li className='list-disc'>Protect the oceans</li>
                                <li className='list-disc'>Severe Fire</li>
                                <li className='list-disc'>Carbon Emission</li>
                                <li className='list-disc'>Water Scarcity</li>
                                <li className='list-disc'>Flooding</li>
                                <li className='list-disc'>Declining Biodiversity</li>
                                <li className='list-disc'>Intenze Drought</li>
                                <li className='list-disc'>Severe Fire</li>
                            </ul>
                            <p className='text-base font-semibold'>Create a challenge today by clicking the button below</p>
                            <button onClick={toggleChallengeModal} className='inline-block text-base font-semibold px-3 py-2 my-3 border border-dashed border-cyan-400 rounded-lg text-cyan-500 hover:text-white hover:bg-cyan-500'>Create Challenge</button>
                        </div>
                        <div className='font-sans border rounded-xl shadow p-4'>
                            <h2 className='font-semibold text-2xl pb-4'>All challenges</h2>
                            <p className='pb-3 text-base'>There are many categories of the challenges that you can join, create and/or invite family, friends, colleauges to partake of
                            in order to '<span className='font-semibold text-cyan-500 italic'>make the world a better place for us to live in</span>':</p>
                            <ul className='px-4 pl-6'>
                                <li className='list-disc'>Protect the oceans</li>
                                <li className='list-disc'>Severe Fire</li>
                                <li className='list-disc'>Carbon Emission</li>
                                <li className='list-disc'>Water Scarcity</li>
                                <li className='list-disc'>Flooding</li>
                                <li className='list-disc'>Declining Biodiversity</li>
                                <li className='list-disc'>Intenze Drought</li>
                                <li className='list-disc'>Severe Fire</li>
                            </ul>
                        </div>
                        <div className='border rounded-xl shadow p-4'>Hello</div>
                    </div>
                </div>
                <div className='flex items-start justify-center w-full h-auto lg:h-[768px] lg:max-w-xs self-start py-4'>
                    <div className='w-full max-w-3xl h-full py-2 overflow-auto p-3 rounded-xl shadow'>
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