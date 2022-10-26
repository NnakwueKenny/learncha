
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';

const Books = () => {
    
  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <div>
            <h1>Resources</h1>
        </div>
        <div className='w-full max-w-5xl px-5'>
            <h2 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-xl text-center'>Get access to wide range of study resources/materials, books, in various formats (like pdf) read, download and share at will. You can also use our dicrionary to assist you in your learning journey...</h2>
        </div>
        <div className='flex flex-col items-center w-full py-8 px-2 md:px-8 gap-4 md:gap-8 xl:gap-12'>
            <div className='relative flex flex-col justify-center w-full max-w-5xl items-center py-6 border-2 rounded-xl overflow-hidden border-dashed border-red-500'>
                <Nav backwardLink='/resources' forwardLink='/resources/dictionary' color='red-100' hoverColor='red'/>
                <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-red-400 font-semibold text-5xl pb-4'>Books</h3>
                <div className='grid xl:grid-cols-2 gap-8 py-8 px-6'>
                    <div className='w-full md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row xl:flex-col gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-3xl text-red-400'>Grade 1</h3>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit (...)
                            </p>
                            <div className='flex justify-around gap-2'>
                                <Link to='/resources/books/grade_one' className='btn border-2 border-dashed rounded-3xl border-red-400 text-red-500 hover:text-white hover:bg-red-500'>View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row xl:flex-col gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-3xl text-blue-400'>Grade 2</h3>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit (...)
                            </p>
                            <div className='flex justify-around gap-2'>
                                <Link to='/resources/books/grade_two' className='btn border-2 border-dashed rounded-3xl border-blue-400 text-blue-500 hover:text-white hover:bg-blue-500'>View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row xl:flex-col gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-3xl text-green-400'>Grade 3</h3>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit (...)
                            </p>
                            <div className='flex justify-around gap-2'>
                                <Link to='/resources/books/grade_three' className='btn blue border-2 border-dashed rounded-3xl border-green-400 text-green-500 hover:text-white hover:bg-green-500'>View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row xl:flex-col gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-3xl text-yellow-400'>Grade 4</h3>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit (...)
                            </p>
                            <div className='flex justify-around gap-2'>
                                <Link to='/resources/books/grade_four' className='btn blue border-2 border-dashed rounded-3xl border-yellow-400 text-yellow-500 hover:text-white hover:bg-yellow-500'>View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row xl:flex-col gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-3xl text-amber-700'>Grade 5</h3>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit (...)
                            </p>
                            <div className='flex justify-around gap-2'>
                                <Link to='/resources/books/grade_five' className='btn blue border-2 border-dashed rounded-3xl border-amber-500 text-amber-600 hover:text-white hover:bg-amber-600'>View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:max-w-2xl lg:max-w-3xl flex flex-col md:flex-row xl:flex-col gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-3xl text-fuchsia-400'>Grade 6</h3>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit (...)
                            </p>
                            <div className='flex justify-around gap-2'>
                                <Link to='/resources/books/grade_six' className='btn blue border-2 border-dashed rounded-3xl border-fuchsia-400 text-fuchsia-500 hover:text-white hover:bg-fuchsia-500'>View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*<img src='https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600' />*/}
        </div>
    </section>
  )
}

export default Books