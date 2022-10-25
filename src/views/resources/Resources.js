
import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Resources = () => {
    const [isShowBooks, setIsShowBooks] = useState(true);
    const [isDisplayBooksByGrade, setIsDisplayBooksByGrade] = useState(false);
    const toggleIsShowBooks = (e) => {
        e.preventDefault()
        setIsShowBooks(prevValue => !prevValue)
    }
    const [booksByGrade, setBooksByGrade] = useState([])

    const showGrade = (e) => {
        console.log(e.currentTarget.dataset.grade_level);
        const targetGrade = e.currentTarget.dataset.grade_level;
        setBooksByGrade([]);
        let statusCode;
        fetch(`https://learncha.mybluemix.net/books/retrieve/grade_${targetGrade}`)
        .then(response => {
            statusCode = response.status;
            return response.json();
        })
        .then(data => {
            console.log(data);
            setIsDisplayBooksByGrade(prevValue => !prevValue)
            if (statusCode === 200) {
                setBooksByGrade(data)
            } else {
                setBooksByGrade([])
            }
        })
        .catch(err => {
            setBooksByGrade([]);
            console.log(err)
        })
    }
  return (
    <section className="promo flex flex-col items-center justify-center w-full pb-6">
        <div>
            <h1>Resources</h1>
        </div>
        <div className='w-full max-w-5xl px-5'>
            <h2 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-xl text-center'>Get access to wide range of study resources/materials, books, in various formats (like pdf) read, download and share at will. You can also use our dicrionary to assist you in your learning journey...</h2>
        </div>
        <div className='flex flex-col items-center w-full py-8 px-4 md:px-8 gap-4 md:gap-8 xl:gap-12'>
            <div className='flex flex-col justify-center w-full max-w-5xl items-center py-6 px-4 border-2 rounded-xl overflow-hidden border-dashed border-cyan-500'>
                <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-cyan-500 text-4xl pb-4'>Books</h3>
                { isShowBooks ?
                    <div data-aos="fade-right" className='flex flex-col md:flex-row gap-4 px-6 py-4 rounded-xl shadow'>
                        <div className='w-full'>
                            <img className='w-full h-64 md:h-80' alt='' src='https://images.pexels.com/photos/3747576/pexels-photo-3747576.jpeg?auto=compress&cs=tinysrgb&w=600' />
                        </div>
                        <div className='flex flex-col gap-4 w-full items-center py-4'>
                            <p className='mb-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                                itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus itaque culpa soluta ...
                            </p>
                            <a href='/resources' className='btn blue border-2 rounded-3xl border-cyan-400 text-cyan-500 hover:text-white hover:bg-cyan-500' onClick={(e) => toggleIsShowBooks(e)}>View Books</a>
                        </div>
                    </div>
                    :
                    <div data-aos="fade-left">
                        { !isDisplayBooksByGrade?
                            <div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6 md:gap-10 max-w-3xl'>
                                <button type='button' onClick={(e) => showGrade(e)} data-grade_level='one' className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                    <div className='absolute h-full w-full flex items-center justify-center text-cyan-500 text-3xl'>
                                        <span style={{fontFamily: `'Gochi Hand', cursive`}}
                                        className='px-2 bg-white bg-opacity-75 rounded-lg font-semibold text-4xl animate-pulse'>Grade 1</span>
                                    </div>
                                    <img alt='' src='https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                </button>
                                <button type='button' onClick={(e) => showGrade(e)} data-grade_level='two' className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                    <div className='absolute h-full w-full flex items-center justify-center text-cyan-500 text-3xl'>
                                        <span style={{fontFamily: `'Gochi Hand', cursive`}}
                                        className='px-2 bg-white bg-opacity-75 rounded-lg font-semibold text-4xl animate-pulse'>Grade 2</span>
                                    </div>
                                    <img alt='' src='https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                </button>
                                <button type='button' onClick={(e) => showGrade(e)} data-grade_level='three' className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                    <div className='absolute h-full w-full flex items-center justify-center text-cyan-500 text-3xl'>
                                        <span style={{fontFamily: `'Gochi Hand', cursive`}}
                                        className='px-2 bg-white bg-opacity-75 rounded-lg font-semibold text-4xl animate-pulse'>Grade 3</span>
                                    </div>
                                    <img alt='' src='https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                </button>
                                <button type='button' onClick={(e) => showGrade(e)} data-grade_level='four' className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                    <div className='absolute h-full w-full flex items-center justify-center text-cyan-500 text-3xl'>
                                        <span style={{fontFamily: `'Gochi Hand', cursive`}}
                                        className='px-2 bg-white bg-opacity-75 rounded-lg font-semibold text-4xl animate-pulse'>Grade 4</span>
                                    </div>
                                    <img alt='' src='https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                </button>
                                <button type='button' onClick={(e) => showGrade(e)} data-grade_level='five' className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                    <div className='absolute h-full w-full flex items-center justify-center text-cyan-500 text-3xl'>
                                        <span style={{fontFamily: `'Gochi Hand', cursive`}}
                                        className='px-2 bg-white bg-opacity-75 rounded-lg font-semibold text-4xl animate-pulse'>Grade 5</span>
                                    </div>
                                    <img alt='' src='https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                </button>
                                <button type='button' onClick={(e) => showGrade(e)} data-grade_level='six' className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                    <div className='absolute h-full w-full flex items-center justify-center text-cyan-500 text-3xl'>
                                        <span style={{fontFamily: `'Gochi Hand', cursive`}}
                                        className='px-2 bg-white bg-opacity-75 rounded-lg font-semibold text-4xl animate-pulse'>Grade 6</span>
                                    </div>
                                    <img alt='' src='https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=600' />
                                </button>
                            </div>
                            :
                            <div>
                                {
                                    booksByGrade.length > 0? 
                                    <div className='grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6 md:gap-10 max-w-3xl'>
                                        {
                                            booksByGrade.map(book => {
                                            return <div data-book-url={book.url}  key={book.url} className='relative shadow-md hover:shadow-xl rounded-2xl overflow-hidden'>
                                                        <span className='absolute top-0 left-0 w-full h-full flex justify-center items-center font-bold text-3xl text-cyan-500 text-center drop-shadow-2xl'>{book.filename}</span>
                                                        <div className='absolute bottom-0 w-full flex justify-around items-center py-4'>
                                                            <button className='text-2xl text-cyan-500'><i class="fa-solid fa-book-open-reader"></i></button>
                                                            <button className='text-2xl text-cyan-500'><i className='fa fa-download'></i></button>
                                                        </div>
                                                        <div><img alt={book.url} src='https://cdn.pixabay.com/photo/2013/07/13/11/53/file-158878__340.png' /></div>
                                                    </div>
                                            })
                                        }
                                    </div>:
                                    <div className='w-full text-center'>No book(s) found for this grade</div>
                                }
                            </div>
                        }
                    </div>
                }
            </div>
            <div className='flex flex-col justify-center w-full max-w-5xl items-center py-6 px-4 border-2 rounded-xl overflow-hidden border-dashed border-cyan-500'>
                <h3 style={{fontFamily: `'Gochi Hand', cursive`}} className='text-cyan-500 text-4xl pb-4'>Dictionary</h3>
                <div className='flex flex-col md:flex-row gap-4 px-6 py-4 rounded-xl shadow'>
                    <div className='w-full h-full flex bg-red-500 object-fit'>
                        <img src='https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    </div>
                    <div className='w-full text-center py-4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus
                            itaque culpa soluta, optio, deserunt, officia voluptas labore assumenda? Aspernatur, libero. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Neque fugiat quo amet delectus atque eaque non ipsam nihil accusamus itaque culpa soluta, optio, deserunt,
                            officia voluptas labore assumenda? Aspernatur, libero.
                        </p>
                    </div>
                </div>
                :
                <div>

                    </div>
            </div>
        </div>
    </section>
  )
}

export default Resources