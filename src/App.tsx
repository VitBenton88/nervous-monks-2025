import './sass/style.scss'
import Particles from './components/Particles'
import Social from './components/Social'
import YoutubeEmbed from './components/YoutubeEmbed'
import Vortex from './components/Vortex'
import Orb from './components/Orb'
import RedLogo from './logo-red.png'
import NormalLogo from './logo-regular.png'
import React from 'react';
import VortexLogo from './logo-vortex.png'
import TrippyLogo from './logo-trippy.png'
import Trippy from './components/Trippy'

interface ThemeItem {
	name: string;
	element: React.ReactNode;
	header: React.ReactNode;
}

const App: React.FC = (): React.ReactNode => {
	const header_text = "Nervous Monks" as string;
	const themes: ThemeItem[] = [
		{
			name: 'regular',
			element: null,
			header: <img className="nm-logo" src={NormalLogo} alt={header_text} />
		},
		{
			name: 'neon',
			element: <Particles />,
			header: <h1>{header_text}</h1>
		},
		{
			name: 'eighties',
			element: null,
			header: <h1>{header_text}</h1>
		},
		{
			name: "trippy",
			element: <Trippy />,
			header: <img className="nm-logo" src={TrippyLogo} alt={header_text} />
		},
		{
			name: "red",
			element: <Orb />,
			header: <img className="nm-logo" src={RedLogo} alt={header_text} />
		},
		{
			name: "vortex",
			element: <Vortex />,
			header: <img className="nm-logo" src={VortexLogo} alt={header_text} />
		},
	]

	const { header, name, element } = themes[Math.floor(Math.random() * themes.length)];

	return (
		<div id="home" className={`App ${name}`}>
			{element}
			<nav className="container">
				{header}
				<Social />
				<h2 className="cta"><a href="mailto:nervousmonks@gmail.com">Contact</a></h2>
				<h2 className="cta"><a href="https://www.teepublic.com/user/nervous-monks" target="_blank" rel="noreferrer">Merchandise</a></h2>
			</nav>
			<section className="container events mt-5">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 list">
						<h2>Events</h2>
						<h3 className="cta"><time dateTime="2018-03-23">3.23.25</time> - <a href="https://www.eventbrite.com/e/sundaze-music-arts-fest-tickets-1225604208179" target="_blank" rel="noreferrer">Sundaze Music & Arts Festival</a></h3>
					</div>
				</div>
			</section>
			<section className="container media youtube music-video mt-5">
				<div className="row">
					<div className="col-12">
						<YoutubeEmbed embedId="9XjjFLAchb0" />
					</div>
				</div>
			</section>
			<section className="container media soundcloud mt-5">
				<div className="row d-flex justify-content-center">
					<div className="col-12 col-md-8 col-lg-6">
						<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/448310646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="SoundCloud Player" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"></iframe>
					</div>
				</div>
			</section>
		</div>
	)
}

export default App;