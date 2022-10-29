import { Loader } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

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
          <Loader />
          :
          <div className='w-full grid md:grid-cols-2 lg:grid-cols-1 place-items-center gap-8 font-sans'>
              {
                  challengeContent.map(item => {
                      return (
                          <div className='w-full max-w-sm rounded-xl border overflow-hidden'>
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