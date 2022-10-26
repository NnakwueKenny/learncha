import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link, Route, Routes, useParams } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Resources from './views/resources/Resources';
import TranscribeIndex from './views/transcribers/TranscribeIndex';
import TranscribeNumbers from './views/transcribers/TranscribeNumbers';
import TranscribeWords from './views/transcribers/TranscribeWords';
import TranscribeSentence from './views/transcribers/TranscribeSentence';
import TranscribeAlphabets from './views/transcribers/TranscribeAlphabet';
import Books from './views/resources/Books';
import Dictionary from './views/resources/Dictionary';
import BookGrade from './views/resources/BookGrade';

function App() {
	useEffect(() => {
        AOS.init();
      }, []);
	  const { grade } = useParams();
	return (
		<div  className='scroll-smooth'>
			<div id='wrapper' className='homepage'>
				<div className='wrapper-holder'>
					<Header />
					<Routes>
						{/* Home Route */}
						<Route path="/" element={<Home />} />
						<Route path="/about-us" element={<About />} />

						{/* Resources Routes */}
						<Route path="/resources" element={<Resources />} />
						<Route path="/resources/books" element={<Books />} />
						<Route path="/resources/books/:grade" element={<BookGrade grade={grade}/>} />
						<Route path="/resources/dictionary" element={<Dictionary />} />

						{/* Transcribers Routes*/}
						<Route path="/transcribers" element={<TranscribeIndex />} />
						<Route path="/transcribers/transcribe-numbers" element={<TranscribeNumbers />} />
						<Route path="/transcribers/transcribe-words" element={<TranscribeWords />} />
						<Route path="/transcribers/transcribe-sentences" element={<TranscribeSentence />} />
						<Route path="/transcribers/transcribe-alphabets" element={<TranscribeAlphabets />} />

						{/* Games Routes */}
					</Routes>

				</div>
				<div className="top-blue-border"></div>
				<Footer id='footer' />
			</div>
		</div>
	);
}

export default App;