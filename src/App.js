import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Default modules import
// import './index.css';
import { Link, Route, Routes } from 'react-router-dom';

// // Main Sections modules import
// import Home from './Home';
// import About from './views/About';
 
// // Transcribe sections modules import
// import Transcribers from './views/transcribers/Index';
// import TranscribeWords from './views/transcribers/TranscribeWords';
// import TranscribeNumbers from './views/transcribers/TranscribeNumbers';
// import TranscribeSentence from './views/transcribers/TranscribeSentence';
// import TranscribeAlphabet from './views/transcribers/TranscribeAlphabets';

// // Dictionary section module import
// import Dictionary from './views/dictionary/Index';

// // Books section module import
// import Books from './views/books/Index';
// import SelectBook from './views/books/selectBook';

// // Games section modules import
// import Games from './views/games';

// //  DIY Section module import
// import DIY from './views/diy/Index';
// import VideoPreview from './views/diy/VideoPreview';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Resources from './views/resources/Resources';
import TranscribeIndex from './views/transcribers/TranscribeIndex';

function App() {
	useEffect(() => {
        AOS.init();
      }, [])
	return (
		<div  className='scroll-smooth'>
			<div id='wrapper' className='homepage'>
				<div className='wrapper-holder'>
					<Header />
					<Routes>
						{/* Home Route */}
						<Route path="/" element={<Home />} />
						<Route path="/about-us" element={<About />} />

						<Route path="/resources" element={<Resources />} />
						<Route path="/transcribers" element={<TranscribeIndex />} />

						{/* Games Routes */}
						{/* Games Routes */}
					</Routes>

				</div>
				<div className="top-blue-border"></div>
				<Footer id='footer' />
			</div>
			{/*<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />

				// Transcribers Routes
				<Route path="/transcribers" element={<Transcribers />} />
				<Route path="/transcribers/transcribe-words" element={<TranscribeWords />} />
				<Route path="/transcribers/transcribe-numbers" element={<TranscribeNumbers />} />
				<Route path="/transcribers/transcribe-sentence" element={<TranscribeSentence />} />
				<Route path="/transcribers/transcribe-alphabets" element={<TranscribeAlphabet />} />

				// Dictionary Route
				<Route path="/dictionary" element={<Dictionary />} />

				// Books Routes
				<Route path="/books" element={<Books />} />
				<Route path="/select_book" element={<SelectBook />} />
				<Route path="/select_book/:grade" element={<SelectBook />} />

				// Games Routes
				<Route path="/games" element={<Games />} />

				// DIY Routes
				<Route path="/diy" element={<DIY />} />
				<Route path="/diy/:id" element={<VideoPreview />} />
			</Routes>
			*/}
		</div>
	);
}

export default App;