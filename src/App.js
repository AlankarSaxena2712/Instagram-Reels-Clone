import { useEffect, useState } from 'react';
import './App.css';
import db from './Firebase';
import VideoCard from './VideoCard';

function App() {

	const [reels, setReels] = useState([]);
	useEffect(() => {
		db.collection('reels').onSnapshot(snapshot => (
			setReels(snapshot.docs.map(doc => doc.data()))
		))
	}, [])

	return (
		// BEM Naming Convention
		<div className="app">
			<div className="app__videos">
				{
					reels.map((reel) => (
						<VideoCard
							key={reel.id}
							channel={reel.channel}
							avatarSrc={reel.avatarSrc}
							song={reel.song}
							url={reel.url}
							likes={reel.likes}
							shares={reel.shares}
						/>
					))
				}
			</div>
		</div>
	);
}

export default App;
