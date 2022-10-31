import React from 'react';
import { useState } from 'react';
import Loader from './Loader';

const UpdateChallenegeModal = ({toggleChallengeModal}) => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [challengeID, setChallengeID] = useState(43);
    const [challengeLink, setChallengeLink] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isNext, setIsNext] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    let [validReq, setValidReq] = useState(false);
    const [isCopied, setIsCopied] = useState(false);


    const createChallenge = () => {
        if (category.split(' ')[0] === '' || title.split(' ')[0] === '' || description.split(' ')[0] === '') {
            console.log('Empty Values')
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
                setResponseMessage('Invalid values!');
                setTimeout(() => {
                    setResponseMessage('');
                }, 2000);
                setIsLoading(false);
            }
            return response.json();
            })
            .then(data => {
                console.log(data);
                setIsNext(true);
                setIsLoading(false);
                console.log(data.challenge_link)
                setChallengeID(data.challenge_link.slice(41));
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

    const appendImage = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const uploadImage = (ID) => {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        if (image === null) {
            console.log('No file');
        } else {
            console.log('uploading');
            setIsLoading(true);
            const formData = new FormData();
            formData.append('image', image, image.name);
            fetch(`https://learncha.mybluemix.net/challenge/${challengeID}/progress`,
                {
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: formData
                }
            )
            .then(response => {
                if (response.status === 200) {
                    setValidReq(true);
                    setResponseMessage('Picture uploaded successfully!');
                    setTimeout(() => {
                        setResponseMessage('');
                    }, 2000)
                } else {
                    setValidReq(false);
                    setResponseMessage('Picture upload failed!');
                    setTimeout(() => {
                        setResponseMessage('');
                    }, 2000);
                    setIsLoading(false);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setIsLink(true);
                setIsLoading(false);
                setChallengeLink(`${window.location.href}/challenge_ID=${challengeID}`);
                console.log(data);
            })
            .catch(err => console.log(err));
        }
    }

    const copyLink = () => {
        console.log('Link copied!');
        setIsCopied(prevValue => !prevValue);
        setTimeout(() => {
            setIsCopied(prevValue => !prevValue);
        }, 2000)
        navigator.clipboard.writeText(challengeLink);
        console.log(window.location.href)
    }
    
  return (
    <div style={{fontFamily: 'Gochi Hand'}} className='fixed top-0 flex items-start justify-center items-center py-6 pt-10 px-5 z-50 h-screen w-screen bg-gray-500 bg-opacity-50'>
        {
            <div className='relative w-full bg-white p-5 md:py-6 md:px-8 max-w-2xl rounded-xl'>
                {isLink && <button onClick={() => {isLink? toggleChallengeModal(): createChallenge()}} className='text-xl hover:text-red-500 absolute top-5 right-8 py-2 px-3'><i className='fa fa-times'></i></button>}
                <div>
                    {
                        isLoading?
                        <div className='h-80 flex flex-col items-center justify-center'>
                            <Loader />
                            <span className='font-sans font-semibold text-base animate-pulse'>Creating Challenge</span>
                        </div>
                        :
                        <form>
                            {
                                !isNext &&
                                <div>
                                    <label class="block mb-2 font-medium text-cyan-500 text-xl " for="user_avatar">Upload Challenge Progress</label>
                                    <input accept='.jpeg, .png, .jpg' name='image' onChange={e => appendImage(e)} class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                    <div class="py-3 text-sm text-gray-500" id="user_avatar_help">The first picture sowing you doing performing your aim for the challenge will encourage others to partake...</div>
                                </div>
                        }
                        </form>
                    }
                    <div className='flex justify-between'>
                        <div className='flex justify-between px-2 font-sans font-semibold'>
                            <button  onClick={() => { toggleChallengeModal()}} className={`text-white w-20 md:w-24 py-2 rounded-lg bg-red-400 hover:bg-red-500'}`}>Cancel</button>
                        </div>
                        <div className='flex justify-between px-2 font-sans font-semibold'>
                            <button  onClick={() => { uploadImage()}} className={`text-white w-20 md:w-24 py-2 bg-green-500 rounded-lg'}`}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default UpdateChallenegeModal;