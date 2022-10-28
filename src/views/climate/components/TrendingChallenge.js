import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// <img alt={`${item.name}`} class='w-full h-full' src={`${item.progress.length > 0 ? item.progress[0].image: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=600'}`} />

// <div class='font-sans flex flex-col md:flex-row w-full max-w-[400px] md:max-w-3xl h-full shadow hover:shadow-lg rounded-lg overflow-hidden'>
//     <div class='h-72 w-full md:w-2/5 shadow-md relative overflow-hidden'>
//         <p class='absolute uppercase text-white font-bold text-2xl bg-[#173A82] bg-opacity-25 w-full h-full flex justify-center items-center text-center'>
//         ${item.name}
//         </p>
//         <img class='w-full h-full' alt="creator's challenge image" src="${item.progress.length > 0 ? item.progress[0].image: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=600'}" />
//     </div>
//     <div class='flex flex-col py-2 px-3 h-full w-full'>
//         <div class='mb-auto'>
//             <p class='py-2'>
//             efgui
//                 <span class='text-[#173A82] font-semibold font-orbitron'>Category</span>:
//                 <span class=''>${item.challenge_type}</span>
//             </p>
//             <p class='py-2'>
//                 <span class='text-[#173A82] font-semibold font-orbitron'>Description</span>:
//                 <span class=''>${item.description}</span>
//             </p>
//         </div>
//         <div class='flex justify-center py-2'>
//             <button data-challenge_id='${item.id}' type='button' class='view-challenge-btn w-full md:max-w-xs py-1 px-3 border border-[#173A82] rounded-md font-semibold text-white hover:text-[#173A82] bg-[#173A82] hover:bg-white'>View Challenge</button>
//         </div>
//     </div>
// </div>

const TrendingChallenge = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [challengeContent, setChallengeContent] = useState([]);
      
    const fetchTrendingChallenges = () => {
        console.log('Fetching Trending Challenges...');
        setIsLoading(true)

        fetch('https://learncha.mybluemix.net/trending/all',
          {
            headers: {
              'accept': 'application/json'
            }
          }
          )
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setChallengeContent([]);
            const sortedData = data.sort((a, b) => b.progress.length - a.progress.length);
            console.log(sortedData);
            const filteredData = sortedData.filter((dataItem, index, arr) => index <= 4);
            console.log(filteredData);
            setIsLoading(false)
            filteredData.forEach(dataItem => {
              console.log(dataItem.progress)
              setChallengeContent(prevData => [...prevData, dataItem]);
            })
          })
    }

    useEffect(() => {
        fetchTrendingChallenges();
    }, [])
  return (
    <div>
        { isLoading?
            <div className='w-full flex justify-center items-center py-6'>
                <div className='w-10 h-10 md:w-14 md:h-14 border-2 md:border-4 border-gray-300 border-b-cyan-500 rounded-full animate-spin'></div>
            </div>
            :
            <div className='w-full grid md:grid-cols-2 lg:grid-cols-1 place-items-center gap-8 font-sans'>
                {
                    challengeContent.map(item => {
                        return (
                            <div className='w-full rounded-xl border overflow-hidden'>
                                <div className='shadow-lg py-6 w-full bg-cover h-32'
                                    style={{backgroundImage: `url(${item.progress.length > 0 ? item.progress[0].image: 'https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=600'})`}}>
                                </div>
                                <p className='p-2 text-center'>
                                    {item.name}
                                </p>
                                <p class='py-2 px-2'>
                                    <span class='text-cyan-500 font-semibold font-orbitron'>Category</span>:
                                    <span class=''> {item.challenge_type}</span>
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default TrendingChallenge