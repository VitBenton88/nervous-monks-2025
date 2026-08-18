import './sass/style.scss'
import Events from './components/Events'
import Social from './components/Social'
import YoutubeEmbed from './components/YoutubeEmbed'
import Marquee from './components/Marquee'
import React, { useMemo, useState, Suspense } from 'react';

interface ThemeItem {
	name: string;
	element: React.ReactNode;
	header: React.ReactNode;
}

const HEADER_TEXT = 'Nervous Monks';

// Decorative theme components are lazy-loaded so only the one theme that's
// actually picked for this visit ever gets downloaded, instead of all seven
// shipping in every page load.
const LazyWebBadges = React.lazy(() => import('./components/WebBadges'));
const LazyParticles = React.lazy(() => import('./components/Particles'));
const LazyTrippy = React.lazy(() => import('./components/Trippy'));
const LazyOrb = React.lazy(() => import('./components/Orb'));
const LazyVortex = React.lazy(() => import('./components/Vortex'));

// Same idea for the logos: each PNG (up to ~3.6MB) only downloads if its
// theme is the one shown.
const lazyLogo = (importAsset: () => Promise<{ default: string }>): React.LazyExoticComponent<React.FC> =>
	React.lazy(async () => {
		const { default: src } = await importAsset();
		const Logo: React.FC = () => <img className='nm-logo' src={src} alt={HEADER_TEXT} />;
		return { default: Logo };
	});

const LazyNormalLogo = lazyLogo(() => import('./assets/logo-regular.png'));
const LazyTrippyLogo = lazyLogo(() => import('./assets/logo-trippy.png'));
const LazyParrotLogo = lazyLogo(() => import('./assets/logo-parrot.png'));
const LazyVortexLogo = lazyLogo(() => import('./assets/logo-vortex.png'));

const App: React.FC = (): React.ReactNode => {
	const themes = useMemo((): ThemeItem[] => [
		{
			name: 'regular',
			element: null,
			header: <LazyNormalLogo />
		},
		{
			name: 'geo',
			element: <LazyWebBadges />,
			header: <h1>{HEADER_TEXT}</h1>
		},
		{
			name: 'neon',
			element: <LazyParticles />,
			header: <h1>{HEADER_TEXT}</h1>
		},
		{
			name: 'eighties',
			element: null,
			header: <h1>{HEADER_TEXT}</h1>
		},
		{
			name: 'trippy',
			element: <LazyTrippy />,
			header: <LazyTrippyLogo />
		},
		{
			name: 'parrot',
			element: <LazyOrb />,
			header: <LazyParrotLogo />
		},
		{
			name: 'vortex',
			element: <LazyVortex />,
			header: <LazyVortexLogo />
		},
	], []);
	// Picked synchronously on first render, not in an effect — so the themed
	// markup is there on the very first paint, no blank-frame flash.
	const [selectedThemeIndex] = useState<number>(() => Math.floor(Math.random() * themes.length));
	// Computed values
	const isGeoTheme = useMemo((): boolean => themes[selectedThemeIndex].name === 'geo', [selectedThemeIndex, themes]);
	const { header, name, element } = useMemo((): ThemeItem => themes[selectedThemeIndex], [selectedThemeIndex, themes]);

	return (
		<div id='home' className={`App ${name}`}>
			{isGeoTheme ? <Marquee /> : null}
			<Suspense fallback={null}>{element}</Suspense>
			<nav className='container ctas'>
				<Suspense fallback={<h1>{HEADER_TEXT}</h1>}>{header}</Suspense>
				<Social useIcons={!isGeoTheme} />
				<address>
					<h2 className='cta'><a href='mailto:nervousmonks@gmail.com'>Contact</a></h2>
					{isGeoTheme ? <img className='gif' alt='' src='/emailme.gif' /> : null}
				</address>
				<div className='merch'>
					<h2 className='cta'><a href='https://www.teepublic.com/user/nervous-monks' target='_blank' rel='noreferrer'>Merchandise</a></h2>
					{isGeoTheme ? <img className='gif' src='/mchammer.gif' alt='' /> : null}
				</div>
			</nav>
			<section className='container events mt-3'>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 list'>
						<h2 className='mb-3'>Events:</h2>
						<Events />
						{isGeoTheme ? <img className='gif' src='/flames.gif' alt='' /> : null}
					</div>
				</div>
			</section>
			<section className='container media youtube music-video mt-5'>
				<div className='row'>
					<div className='col-12'>
						<YoutubeEmbed />
					</div>
				</div>
			</section>
			<section className='container media soundcloud mt-5'>
				<div className='row d-flex justify-content-center'>
					<div className='col-12 col-md-8 col-lg-6'>
						<iframe src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/448310646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true' title='SoundCloud Player' width='100%' height='450' scrolling='no' frameBorder='no' allow='autoplay' referrerPolicy='strict-origin-when-cross-origin' sandbox='allow-scripts allow-same-origin allow-popups'></iframe>
					</div>
				</div>
				{isGeoTheme ? <img className='counter' src='/counter.gif' alt='' /> : null}
			</section>
		</div>
	)
}

export default App;
