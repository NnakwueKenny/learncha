import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Loader2 from './Loader2';
import rainy from '../images/rainy.png';
import clearWeather from '../images/clearWeather.png';
import sunnyWeather from '../images/sunnyWeather.png';

const WeatherForecast = () => {
    const [ todayWeather, setTodayWeather] = useState([]);
    const [ generalFeeling, setGeneralFeel] = useState('');
    const [ todayAvgTemperature, setTodayAvgTemperature ] = useState('');
    const [ todayMinTemperature, setTodayMinTemperature ] = useState('');
    const [ todayMaxTemperature, setTodayMaxTemperature ] = useState('');
    const [ sunrise, setSunrise] = useState('');
    const [ sunset, setSunset] = useState('');
    const [ dayOfWeek, setDayOfWeek ] = useState('');
    const [ month, setMonth ] = useState('');
    const [ todayDate, setTodayDate ] = useState('');
    const [ narrative, setNarrative] = useState('');

    const getWeather = () => {
        console.log(`'Getting today's weather`);
        fetch(`https://learncha.mybluemix.net/forecast_weather`,
            {
                method: 'post',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `location=kano, Nigeria`
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const todayWeather = [data.day1_day, data.day1_night];
            console.log(todayWeather);
            setTodayAvgTemperature((todayWeather[0].calendarDayTemperatureMax + todayWeather[1].calendarDayTemperatureMin) / 2);
            setSunrise(todayWeather[0].sunriseTimeLocal.split('T')[1].slice(0, 5));
            setSunset(todayWeather[0].sunsetTimeLocal.split('T')[1].slice(0, 5));
            setTodayMinTemperature(todayWeather[0].calendarDayTemperatureMin);
            setTodayMaxTemperature(todayWeather[0].calendarDayTemperatureMax);
            console.log(new Date(todayWeather[0].validTimeUtc));
            setDayOfWeek(todayWeather[0].dayOfWeek);
            console.log(todayWeather[0].dayOfWeek);
            const date = new Date();
            setTodayDate(date.getDate());
            date.setMonth((new Date().getMonth()) - 1);
            setMonth(date.toLocaleString('en-US', { month: 'long' }));
            setNarrative(todayWeather[0].narrative)
            // const
        })
    }

    useEffect(() => {
        getWeather();
    }, []);

  return (
    <div className='main-container px-4 md:px-8 lg:px-10 pt-32 w-full'>
        <div
            style={{fontFamily: `'Open Sans', sans-serif`, background: 'linear-gradient(to bottom, rgb(43,50,178) 0%, rgb(20,136,204) 100%)'}}
            className='bg-gray-400 text-white bg-no-repeat rounded-xl overflow-hidden'>
            <div className='flex flex-col w-full items-center px-3 md:px-6 py-5'>
                <div className='w-full max-w-5xl flex flex-col md:flex-row md:items-baseline items-center md:justify-between px-1 py-3'>
                    <div className='flex flex-col items-center w-full md:items-start pb-4 md:pb-0'>
                        <h2 style={{fontFamily: 'Gochi Hand'}} className='text-red-400 text-3xl'>Kano, Nigeria</h2>
                        <p>{dayOfWeek} {todayDate} {month}</p>
                    </div>
                    <div className='w-full'>
                        <p className='text-gray-100 w-full text-center text-xs md:text-base hidden md:block'>Based on your location</p>
                        <form className='flex justify-center w-full'>
                            <div className='relative w-full max-w-md flex justify-end rounded-2xl overflow-hidden'>
                                <label className='sr-only'>Search Location</label>
                                <button className='absolute top-0 right-0 h-full text-blue-500 flex items-center justify-center px-3'><i className='fa fa-search'></i></button>
                                <input className='rounded w-full text-gray-400 ring-0 outline-none border-0' type='text' placeholder='Search Location' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full max-w-5xl flex flex-col md:flex-row gap-3 p-2 divide-y-2 md:divide-y-0 md:divide-x-2'>
                    <div className='flex justify-around items-center gap-8 md:gap-10 lg:gap-12 py-3 w-full'>
                        <div className='w-20 h-20 overflow-hidden border-2 rounded-full'>
                            {
                                narrative.toLowerCase().includes('sunny') || narrative.toLowerCase().includes('sun') | narrative.toLowerCase().includes('sun')?
                                <img alt='' src={sunnyWeather}/>
                                :
                                narrative.includes('Rain') || narrative.includes('Rainy') || narrative.includes('rain') || narrative.includes('rainy')?
                                <img alt='' src={rainy}/>
                                :
                                <img alt='' src={clearWeather}/>
                            }
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex'>
                                <span className='text-7xl md:text-8xl font-extralight font-sans'>{todayAvgTemperature} F</span>
                            </div>
                            <span>{generalFeeling}</span>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full grid grid-cols-3 place-items-center p-2 gap-2'>
                            <div className='py-3 px-2 w-full flex flex-col items-center justify-center '>
                                <span className='font-semibold text-2xl'>{todayMaxTemperature} F</span>
                                <span>High</span>
                            </div>
                            <div className='py-3 px-2 w-full flex flex-col items-center justify-center '>
                                <span className='font-semibold text-2xl'>7mph</span>
                                <span>Wind</span>
                            </div>
                            <div className='py-3 px-2 w-full flex flex-col items-center justify-center '>
                                <span className='font-semibold text-2xl'>{sunrise}</span>
                                <span>Sunrise</span>
                            </div>
                            <div className='py-3 px-2 w-full flex flex-col items-center justify-center '>
                                <span className='font-semibold text-2xl'>{todayMinTemperature} F</span>
                                <span>Low</span>
                            </div>
                            <div className='py-3 px-2 w-full flex flex-col items-center justify-center '>
                                <span className='font-semibold text-2xl'>0%</span>
                                <span>Rain</span>
                            </div>
                            <div className='py-3 px-2 w-full flex flex-col items-center justify-center '>
                                <span className='font-semibold text-2xl'>{sunset}</span>
                                <span>Sunset</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Today's weather Large screen */}
                <div className='hidden md:flex flex-col gap-3 w-full max-w-5xl p-4'>
                    <h3 className='text-xl'>Today's Weather</h3>
                    <div className='grid grid-cols-7 place-items-center gap-6 md:gap-8'>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>3am</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>6 am</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>9 am</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>12 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>3 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>6 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                        <div className='w-full flex flex-col items-center gap-2 py-2 border-2 rounded-lg text-xl'>
                            <span>8 pm</span>
                            <span className='block w-5 h-5 rounded-full border-2'></span>
                            <span>14<sup>o</sup></span>
                        </div>
                    </div>
                </div>
                {/* Today's weather Large screen */}

                <div className='w-full p-3'>

                    {/* Today's weather Small screen */}
                    <div className='w-full md:hidden md:flex flex-col gap-4 overflow-x-auto'>
                        <h3 className='pb-2'>Today's Weather</h3>
                        <div className='grid grid-cols-5 place-items-center gap-2 md:gap-8'>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>3am</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>6 am</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>9 am</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span className='text-sm'>12 pm</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                            <div className='w-full max-w-24 h-full flex flex-col items-center justify-center gap-2 py-2 border-2 rounded-lg text-xl'>
                                <span>3 pm</span>
                                <span className='block w-5 h-5 rounded-full border-2'></span>
                                <span>14<sup>o</sup></span>
                            </div>
                        </div>
                    </div>
                    {/* Today's weather Small screen */}
                    <div className='w-full hidden md:flex flex-col gap-3'>
                        <h3>Next 5 days</h3>
                        <div className='flex flex-col divide-y border-y'>
                            <div className='grid grid-cols-6 py-3 place-items-center'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>Tue</span>
                                    <span className=''>30/10</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='block border-2 w-10 h-10 rounded-full'></span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>10<sup>o</sup></span>
                                    <span className=''>Low</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>16<sup>o</sup></span>
                                    <span className=''>High</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>12mph</span>
                                    <span className=''>Wind</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>0%</span>
                                    <span className=''>Rain</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-6 py-3 place-items-center'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>Tue</span>
                                    <span className=''>30/10</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='block border-2 w-10 h-10 rounded-full'></span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>10<sup>o</sup></span>
                                    <span className=''>Low</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>16<sup>o</sup></span>
                                    <span className=''>High</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>12mph</span>
                                    <span className=''>Wind</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>0%</span>
                                    <span className=''>Rain</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-6 py-3 place-items-center'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>Tue</span>
                                    <span className=''>30/10</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='block border-2 w-10 h-10 rounded-full'></span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>10<sup>o</sup></span>
                                    <span className=''>Low</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>16<sup>o</sup></span>
                                    <span className=''>High</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>12mph</span>
                                    <span className=''>Wind</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>0%</span>
                                    <span className=''>Rain</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-6 py-3 place-items-center'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>Tue</span>
                                    <span className=''>30/10</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='block border-2 w-10 h-10 rounded-full'></span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>10<sup>o</sup></span>
                                    <span className=''>Low</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>16<sup>o</sup></span>
                                    <span className=''>High</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>12mph</span>
                                    <span className=''>Wind</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>0%</span>
                                    <span className=''>Rain</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-6 py-3 place-items-center'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>Tue</span>
                                    <span className=''>30/10</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='block border-2 w-10 h-10 rounded-full'></span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>10<sup>o</sup></span>
                                    <span className=''>Low</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>16<sup>o</sup></span>
                                    <span className=''>High</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>12mph</span>
                                    <span className=''>Wind</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>0%</span>
                                    <span className=''>Rain</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-6 py-3 place-items-center'>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>Tue</span>
                                    <span className=''>30/10</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='block border-2 w-10 h-10 rounded-full'></span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>10<sup>o</sup></span>
                                    <span className=''>Low</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>16<sup>o</sup></span>
                                    <span className=''>High</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>12mph</span>
                                    <span className=''>Wind</span>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='font-semibold'>0%</span>
                                    <span className=''>Rain</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherForecast