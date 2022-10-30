module.exports = {
	github: 'https://github.com/musketgeeks/docs',
	docsRepositoryBase: 'https://github.com/musketgeeks/docs/blob/master',
	titleSuffix: ' | musketgeeks',
	logo: (
		<>
			<span className={'mr-2 hidden font-extrabold md:inline'}>musketgeeks</span>
			<span className={'hidden font-normal text-gray-600 md:inline'}>
				Project Documentation
			</span>
		</>
	),
	head: (
		<>
			<meta content={'#ffffff'} name={'msapplication-TileColor'} />
			<meta content={'#ffffff'} name={'theme-color'} />
			<meta content={'width=device-width, initial-scale=1.0'} name={'viewport'} />
			<meta content={'en'} httpEquiv={'Content-Language'} />
			<meta content={'musketgeeks: Project Documentation'} name={'description'} />
			<meta content={'musketgeeks: Project Documentation'} name={'og:description'} />
			<meta content={'summary_large_image'} name={'twitter:card'} />
			<meta content={'https://musketgeeks.netlify.app/og.png'} name={'twitter:image'} />
			<meta content={'musketgeeks.netlify.app'} name={'twitter:site:domain'} />
			<meta content={'https://musketgeeks.netlify.app/'} name={'twitter:url'} />
			<meta content={'musketgeeks: Project Documentation'} name={'og:title'} />
			<meta content={'https://musketgeeks.netlify.app/og.png'} name={'og:image'} />
			<meta content={'musketgeeks'} name={'apple-mobile-web-app-title'} />
			<link href={'/favicon-180x180.png'} rel={'apple-touch-icon'} sizes={'180x180'} />
			<link href={'/favicon-192x192.png'} rel={'icon'} sizes={'192x192'} type={'image/png'} />
			<link href={'/favicon-32x32.png'} rel={'icon'} sizes={'32x32'} type={'image/png'} />
			<link href={'/favicon-96x96.png'} rel={'icon'} sizes={'96x96'} type={'image/png'} />
			<link href={'/favicon-16x16.png'} rel={'icon'} sizes={'16x16'} type={'image/png'} />
			<meta content={'/favicon-144x144.png'} name={'msapplication-TileImage'} />
		</>
	),
	search: true,
	floatTOC: true,
	prevLinks: true,
	nextLinks: true,
	footer: true,
	footerEditLink: false,
	footerText: (
		<>
			MIT <strong>{new Date().getFullYear()} © musketgeeks.</strong>
		</>
	),
	unstable_faviconGlyph: '👋'
};
