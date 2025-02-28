import './sass/style.scss'
import Events from './components/Events'
import Particles from './components/Particles'
import Social from './components/Social'
import YoutubeEmbed from './components/YoutubeEmbed'
import WebBadges from './components/WebBadges'
import Vortex from './components/Vortex'
import Orb from './components/Orb'
import RedLogo from './assets/logo-red.png'
import NormalLogo from './assets/logo-regular.png'
import React, { useMemo, useEffect, useState, useCallback } from 'react';
import VortexLogo from './assets/logo-vortex.png'
import TrippyLogo from './assets/logo-trippy.png'
import Trippy from './components/Trippy'
import Marquee from './components/Marquee'

interface ThemeItem {
	name: string;
	element: React.ReactNode;
	header: React.ReactNode;
}

const App: React.FC = (): React.ReactNode => {
	const header_text = 'Nervous Monks' as string;
	const themes: ThemeItem[] = [
		{
			name: 'regular',
			element: null,
			header: <img className='nm-logo' src={NormalLogo} alt={header_text} />
		},
		{
			name: 'geo',
			element: <WebBadges/>,
			header: <h1>{header_text}</h1>
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
			name: 'trippy',
			element: <Trippy />,
			header: <img className='nm-logo' src={TrippyLogo} alt={header_text} />
		},
		{
			name: 'red',
			element: <Orb />,
			header: <img className='nm-logo' src={RedLogo} alt={header_text} />
		},
		{
			name: 'vortex',
			element: <Vortex />,
			header: <img className='nm-logo' src={VortexLogo} alt={header_text} />
		},
	];
	// State
	const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	// Computed Values
	const selectRandomTheme = useCallback(() => setSelectedThemeIndex(Math.floor(Math.random() * themes.length)), [themes]);
	const isGeoTheme = useMemo(() => themes[selectedThemeIndex].name === 'geo', [selectedThemeIndex]);
	const { header, name, element } = useMemo(() => themes[selectedThemeIndex], [selectedThemeIndex]);

	useEffect(() => {
		selectRandomTheme();
		setLoading(false);
	}, []);

	if (loading) return (<div></div>)

	return (
		<div id='home' className={`App ${name}`}>
			{isGeoTheme ? <Marquee /> : null }
			{element}
			<nav className='container ctas'>
				{header}
				<Social useIcons={!isGeoTheme} />
				<address>
					<h2 className='cta'><a href='mailto:nervousmonks@gmail.com'>Contact</a></h2>
					{isGeoTheme ? <img className='gif' alt='email animation' src='/emailme.gif' /> : null }
				</address>
				<div className='merch'>
					<h2 className='cta'><a href='https://www.teepublic.com/user/nervous-monks' target='_blank' rel='noreferrer'>Merchandise</a></h2>
					{isGeoTheme ? <img className='gif' src='/mchammer.gif' alt='mc hammer animation'  /> : null }
				</div>
			</nav>
			<section className='container events mt-5'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 list'>
						<h2 className='mb-3'>Events:</h2>
						<Events />
						{isGeoTheme ? <img className='gif' src='/flames.gif' alt='flames animation' /> : null }
					</div>
				</div>
			</section>
			<section className='container media youtube music-video mt-5'>
				<div className='row'>
					<div className='col-12'>
						<YoutubeEmbed embedId='9XjjFLAchb0' />
					</div>
				</div>
			</section>
			<section className='container media soundcloud mt-5'>
				<div className='row d-flex justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6'>
						<iframe src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/448310646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true' title='SoundCloud Player' width='100%' height='450' scrolling='no' frameBorder='no' allow='autoplay'></iframe>
					</div>
				</div>
				{isGeoTheme ? <img className='counter' src='/counter.gif' alt='counter animation' /> : null }
			</section>
		</div>
	)
}

export default App;