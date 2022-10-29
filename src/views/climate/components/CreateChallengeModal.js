import React from 'react';
import { useState } from 'react';
import Loader from './Loader'

const CreateChallengeModal = ({toggleChallengeModal}) => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isNext, setIsNext] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    let [validReq, setValidReq] = useState(false);
    

    const createChallenge = () => {
        if (category.split(' ')[0] === '' || title.split(' ')[0] === '' || description.split(' ')[0] === '') {
            console.log('')
        } else {
            setIsLoading(true);
            const createChallengeFormData = {
                challenge_type: category,
                name: title,
                description
            }
            console.log('Creating challenge');
            fetch('https://learncha.mybluemix.net/challenge',
            {
            method: 'post',
            headers: {
                'accept': 'application',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createChallengeFormData)
            }
            )
            .then(response => {
            if (response.status === 200) {
                setValidReq(true);
                setResponseMessage('Challenge created!');
                setTimeout(() => {
                    setResponseMessage('');
                }, 2000)
            } else {
                setValidReq(false);
                setResponseMessage('Invalid credentials!');
                setTimeout(() => {
                    setResponseMessage('');
                }, 2000);
                setIsLoading(false);
            }
            return response.json();
            })
            .then(data => {
                console.log(data);
                setIsNext(true)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setResponseMessage('No internet connection!');
                setTimeout(() => {
                    setResponseMessage('');
                }, 2000);
                setIsLoading(false);
            })
            
        }
    }

    const uploadImage = () => {
        console.log('Upload Image...');
    }
  return (
    <div style={{fontFamily: 'Gochi Hand'}} className='fixed top-0 flex items-start justify-center items-center py-6 pt-10 px-5 z-50 h-screen w-screen bg-gray-500 bg-opacity-50'>
        <div className='relative w-full bg-white p-5 md:py-6 md:px-8 max-w-2xl rounded-xl'>
            {
                <div>
                    {
                        isLoading?
                        <div className='h-80 flex flex-col items-center justify-center'>
                            <Loader />
                            <span className='font-sans font-semibold text-base animate-pulse'>Creating Challenge</span>
                        </div>
                        :
                        <form>
                            <div className='uppercase text-2xl text-center pb-4 text-cyan-500'>Create Challenge</div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <div className='flex gap-1 font-bold'>
                                        <label for="challenge_type" class="block mb-2 text-xl font-medium text-red-400">Category</label>
                                        <span className='text-red-500 font-sans'>*</span>
                                    </div>
                                    <select onChange={(e) => setCategory(e.target.value)} type="text" id="challenge_type" name='challenge_type' class="create-challenge-name bg-gray-50 border border-gray-300 text-gray-500 text-sm focus:ring-red-300 focus:border-red-300 block w-full p-2.5" placeholder="Type of Challenge" required>
                                        <option disabled selected></option>
                                        <option >Protect the oceans</option>
                                        <option >Severe Fire</option>
                                        <option >Carbon Emission</option>
                                        <option >Water Scarcity</option>
                                        <option >Flooding</option>
                                        <option >Declining Biodiversity</option>
                                        <option >Intenze Drought</option>
                                        <option >Severe Fire</option>
                                    </select>
                                    <div><span className='text-red-500'>Category is required!</span></div>
                                </div>
                                <div>
                                    <div className='flex gap-1 font-bold'>
                                        <label for="title" class="block mb-2 text-xl font-medium text-red-400">Title</label>
                                        <span className='text-red-500 font-sans'>*</span>
                                    </div>
                                    <input onChange={(e) => setTitle(e.target.value)} type="text" id="title" name='title' class="create-challenge-title bg-gray-50 border border-gray-300 text-gray-500 text-sm focus:ring-red-300 focus:border-red-300 block w-full p-2.5" placeholder="Title of Challenge" required />
                                    <div><span className='text-red-500'>Title is required!</span></div>
                                </div>
                            </div>
                            <div class="grid gap-4 mb-4 md:grid-cols-1">
                                <div className='flex gap-1 font-bold'>
                                    <label for="description" class="block text-xl font-medium text-red-400">Description</label>
                                    <span className='text-red-500 font-sans'>*</span>
                                </div>
                                <textarea onChange={(e) => setDescription(e.target.value)} id="description" name='description' rows="8" class="create-challenge-value block px-2 py-3 border-2 focus:border-2 border-gray-300 focus:border-red-400 rounded-lg w-full text-sm text-gray-800 outline-none focus:ring-0" placeholder="Write a description about the challenge..." required></textarea>
                                <div><span className='text-red-500'>Description is required!</span></div>
                            </div>
                        </form>
                    }
                </div>
            }
            {
                responseMessage &&
                <div className='pb-3 pl-2 font-semibold text-base italic'>
                    <span className={`${validReq? 'text-green-500': 'text-red-400'}`}>{responseMessage}</span>
                </div>
            }
            <div className='flex justify-between px-2 font-sans font-semibold'>
                {
                    !isNext &&
                    <button disabled={`${isLoading? 'disabled': ''}`} onClick={() => { !isLoading? toggleChallengeModal(): console.log('Hello')}} className={`text-white w-20 md:w-24 py-2 rounded-lg ${isLoading? 'bg-gray-400': 'bg-red-400 hover:bg-red-500'}`}>Cancel</button>
                }
                <button disabled={`${isLoading? 'disabled': ''}`} onClick={isNext? uploadImage: createChallenge} className='bg-green-500 text-white w-20 md:w-24 py-2 rounded-lg hover:bg-green-600'>{isNext? 'Upload': 'Next'}</button>
            </div>
        </div>
    </div>
  )
}

export default CreateChallengeModal