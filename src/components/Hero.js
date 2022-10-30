import React from 'react';
import { Link } from 'react-router-dom';
import child_1 from '../images/child_1.png';
import child_2 from '../images/child_2.png';
import child_3 from '../images/child_3.png';
import child_4 from '../images/homeclimate.jpg';
import games from '../images/games.jpg';
import cartoonWeather from '../images/cartoon-weather.jpg';
import welcomeVideo from '../videos/welcomeVideo.mp4';
import welcomeVideoBg from '../images/welcomeVideoBg.png';
import lego from '../images/lego.jpeg';
import stem from '../images/stem.jpg';
import last from '../images/last.jpg';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';

const Hero = () => {
  return (
    <div className='border-t-2 md:border-none border-red-400 rounded-t-xl pt-5 px-2 sm:px-3'>
        <section className="promo pb-8">
            <div className="slider-wrap flex flex-col justify-center items-center gap-4">
                <div className='w-full relative'>
                    <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1" ></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="active" aria-label="Slide 2" ></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="active" aria-label="Slide 3" ></button>
                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="h-full max-h-[400px] carousel-item active relative float-left w-full">
                                <img src={slide1} class="block w-full object-cover hidden lg:block" alt="..." />
                                <img src={slide1} class="block w-full h-full object-cover lg:hidden" alt="..." />
                                <div class="hidden flex flex-col lg:flex-row lg:px-8 carousel-caption absolute text-green-700 left-0 top-0 bg-gray-100 bg-opacity-25 w-full">
                                    <div class="w-full lg:w-2/3 h-full flex flex-col lg:flex-row">
                                        <div class="flex flex-col items-center gap-y-4 md:gap-y-6 p-2">
                                            <h5 class="text-xl md:2xl lg:text-6xl">Register and get your PVC today</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="h-full max-h-[400px] carousel-item relative float-left w-full">
                                <img src={slide2} class="block w-full object-cover hidden lg:block" alt="..." />
                                <img src={slide2} class="block w-full h-full object-cover lg:hidden" alt="..." />
                                <div class="hidden flex flex-col lg:flex-row lg:px-8 carousel-caption absolute text-green-500 left-0 top-0 bg-gray-100 bg-opacity-25 w-full">
                                    <div class="w-full lg:w-2/3 h-full flex flex-col lg:flex-row">
                                        <div class="flex flex-col items-center gap-y-4 md:gap-y-6 p-2">
                                            <h5 class="text-xl md:2xl lg:text-6xl">Register and get your PVC today</h5>
                                            <p class="text-base md:text-xl lg:text-3xl text-slate-50 bg-green-500 bg-opacity-50 px-4 py-2 rounded-lg">
                                                Join our celebrities and millions of other well-meaning Nigerians to participate in the voting process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="h-full max-h-[400px] carousel-item relative float-left w-full">
                                <img src={slide3} class="block w-full object-cover hidden lg:block" alt="..." />
                                <img src={slide3} class="block w-full h-full object-cover lg:hidden" alt="..." />
                                <div class="hidden flex flex-col lg:flex-row lg:px-8 carousel-caption absolute text-green-500 left-0 top-0 bg-gray-100 bg-opacity-25 w-full">
                                    <div class="w-full lg:w-2/3 h-full flex flex-col lg:flex-row">
                                        <div class="flex flex-col items-center gap-y-4 md:gap-y-6 p-2">
                                            <h5 class="text-xl md:2xl lg:text-6xl">SabiVoters Challenge</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <ul className="slider grid gap-4 md:gap-8 lg:gap-10 max-w-6xl">
                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full rounded-xl' alt='' src={games}/>
                        </div>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8'>
                                <h1><Link href="/games" className='animate animate-pulse text-red-500'>Games for kids</Link></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                    Discover the best educational games for kids various different subjects areas like Math, Science, Art and more. Educational games are a great alternative for choildren who don't learn best through paper and pencil instructions.
                                </p>
                                <a className="btn red" ><Link to='/games'>Learn more</Link></a>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className="h-96 w-full">
                            <div className='flex flex-col items-center justify-center h-96 w-full p-8'>
                                <h1><a href="#" className='animate animate-pulse text-red-500'>Education for kids</a></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                Discouraging your child to spend their screen time playing educational
                                Video games for kids in various subjects but can also help transform them into lifelong learners
                                </p>
                                <a className="btn red"><Link to='/resources'>Learn more</Link></a>
                            </div>
                        </div>
                        <div className='w-full h-96 overflow-hidden'>
                        <img className='w-full h-full md:rounded-l-full rounded-t-xl' src={child_2}/>
                        </div>
                    </li>

                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className='w-full overflow-hidden bg-center md:py-40 md:rounded-2xl' style={{backgroundImage: `url(${child_4})`}}>
                            
                        </div>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8 md:py-24'>
                                <h1><a href="#" className='animate animate-pulse text-red-500'>Climate Challenge</a></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                Discouraging your child to spend their screen time playing educational
                                Video games for kids in various subjects but can also help transform them into lifelong learners
                                </p>
                                <a className="btn red"><Link to='/climate'>Learn more</Link></a>
                            </div>
                        </div>
                    </li>

                    <li className='flex flex-col md:flex-row border-2 border-red-400 p-2 border-dashed rounded-2xl overflow-hidden'>
                        <div className="h-full w-full">
                            <div className='flex flex-col items-center justify-center h-full w-full p-8'>
                                <h1><a href="#" className='animate animate-pulse text-red-500'>Weather Updates</a></h1>
                                <p className='text-white text-gray-600 text-center mb-6'>
                                Discouraging your child to spend their screen time playing educational
                                Video games for kids in various subjects but can also help transform them into lifelong learners
                                </p>
                                <a className="btn red" href="#">Learn more</a>
                            </div>
                        </div>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full rounded-xl' src={cartoonWeather}/>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>
        <div class="dvdr"></div>
        <section id="main">
            <div class="widget-boxes w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
                <div class="box">
                    <a href="#">
                        <div class="box-info experience">
                            <h2>Our experience</h2>
                            <p>Help your child discover their passion for <span className='font-semibold'>STEM</span>
                                (<span className='font-semibold italic'>Science, Technology, Engineering and Mathematics</span>)
                                with our engaging offline and online gamifying platform.
                            </p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="#">
                        <div class="box-info about">
                            <h2>About Learncha</h2>
                            <p>Learncha is a educational Gamifying Paltform designed for kids that helps to instill the love of learning in a child.
                                This applies whether they've learning through homeschooling, online learning, offline traditional classroom setting...
                            </p>
                        </div>
                    </a>
                </div>
                <div class="box">
                    <a href="#">
                        <div class="box-info fun">
                            <h2>Big fun for kids!</h2>
                            <p>Designed by leading learning experts, your child can practice Math, reading, speaking, phonics, Transcribing, Dictionary and more...</p>
                        </div>
                    </a>
                </div>
            </div>
                <div class="widget-boxes news">
                    <h2>Updates</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4'>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src={lego} alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">This is interesting!!!</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-17">17.04.14</time>
                                    <span>Prince Achoja</span>
                                </div>
                                <p>Introducing our STEM Learning center in Kano Nigeria. Designed by learning experts, your 
                                child can now practice math, reading phones and more. Step-by-step learning path designed to
                                help kids learn math, reading, Science and more(...)</p>
                            </div>
                        </div>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src={stem} alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">We have Lego</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-16">16.04.14</time>
                                    <span>Salma Gambo</span>
                                </div>
                                <p>Join our lego Robotics Hub Hub Classes every Saturday. Find the right instructor for you,
                                    choose from many topics, skill levels and languages(...)</p>
                            </div>
                        </div>
                        <div class="box">
                            <a class="news-img" href="#">
                                <img src={last} alt="" />
                                <div class="mask"></div>
                            </a>
                            <div class="box-info">
                                <h3><a href="#">Our impact so far</a></h3>
                                <div class="metadata">
                                    <time datetime="2014-04-13">13.04.14</time>
                                    <span>Muhammad Abubakar</span>
                                </div>
                                <p>We have partnered with Kano state library board to introduce a platform where you can create
                                a new picture, storybook, translate a story, adapt a story for a different level and build your
                                own story collection(...)</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Hero