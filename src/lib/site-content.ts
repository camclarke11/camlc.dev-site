export type SocialLinkKind = 'linkedin' | 'github' | 'email';

export const introParagraphs = [
	"Hi, I'm Cam.",
	'I work on data, technology, and policy - mostly figuring out how data should move between companies and people without everything breaking.',
	"By day I'm in the UK government working on Smart Data and digital markets. By night I'm usually building something: websites, AI tools, small data experiments, or ideas that may or may not become startups.",
	"If it involves data, APIs, open ecosystems, or weird internet projects, I'm probably interested."
];

export const socialLinks = [
	{
		kind: 'linkedin' as const,
		label: 'LinkedIn',
		value: 'Cam Clarke',
		href: 'https://www.linkedin.com/in/your-profile/'
	},
	{
		kind: 'github' as const,
		label: 'GitHub',
		value: 'camclarke11',
		href: 'https://github.com/camclarke11'
	},
	{
		kind: 'email' as const,
		label: 'Email',
		value: 'camlc@proton.me',
		href: 'mailto:camlc@proton.me'
	}
];

export const interests = [
	{
		title: 'Smart Data',
		meta: 'data rights',
		summary: 'How people access and control the data companies hold about them.'
	},
	{
		title: 'Digital markets',
		meta: 'platform power',
		summary: 'What happens when large platforms become infrastructure.'
	},
	{
		title: 'APIs and data ecosystems',
		meta: 'plumbing',
		summary: 'The boring plumbing that actually makes open systems work.'
	},
	{
		title: 'AI as a tool for thinking',
		meta: 'models',
		summary: 'Using models to explore ideas, generate structures, and build faster.'
	},
	{
		title: 'Internet side projects',
		meta: 'experiments',
		summary: 'Sometimes useful, sometimes pointless, usually fun.'
	}
];

export const projects = [
	{
		title: 'Smart Data Mapping',
		tag: 'policy / systems',
		href: '/projects',
		summary: 'Tools and visualisations exploring how data portability could work across sectors.'
	},
	{
		title: 'AI Course Builder',
		tag: 'AI / product',
		href: '/projects',
		summary:
			'A system that generates a full learning curriculum on any topic, including chapters, lessons, and progress tracking.'
	},
	{
		title: 'Clip Detection AI',
		tag: 'media / ML',
		href: '/projects',
		summary:
			'Experiments analysing livestream chat and video to detect highlight moments automatically.'
	},
	{
		title: 'Random Internet Experiments',
		tag: 'scrapers / tools',
		href: '/projects',
		summary:
			'Scrapers, dashboards, automation tools, and other things that seemed like a good idea at the time.'
	}
];

export const writingTopics = [
	{
		slug: 'smart-data-policy',
		title: 'Smart Data policy',
		meta: 'policy / essays',
		href: '/blog#smart-data-policy',
		summary: 'How data portability, access, and safeguards can work in real systems.',
		focus:
			'Usually about switching, consent, interoperability, and where the policy logic breaks under delivery pressure.'
	},
	{
		slug: 'digital-markets',
		title: 'Digital markets',
		meta: 'platforms / notes',
		href: '/blog#digital-markets',
		summary: 'Notes on platform power, infrastructure, and how markets become rules.',
		focus:
			'The recurring theme is what happens when a private platform starts behaving like public infrastructure.'
	},
	{
		slug: 'data-ecosystems-in-practice',
		title: 'Data ecosystems in practice',
		meta: 'systems / explainers',
		href: '/blog#data-ecosystems-in-practice',
		summary: 'What actually has to happen behind the scenes to make open ecosystems usable.',
		focus:
			'Less theory, more on standards, APIs, incentives, governance, and the awkward plumbing underneath.'
	},
	{
		slug: 'building-projects-in-public',
		title: 'Building projects in public',
		meta: 'build log / notes',
		href: '/blog#building-projects-in-public',
		summary: 'Things I am learning while building web apps, tools, and experiments.',
		focus:
			'Mostly short notes on shipping quickly, finding useful abstractions, and learning by making.'
	}
];

export const philosophyNotes = [
	{
		title: 'Between disciplines',
		meta: 'philosophy',
		href: '/about',
		summary: 'I tend to think the most interesting work happens between disciplines.'
	},
	{
		title: 'Policy should meet product',
		meta: 'philosophy',
		href: '/about',
		summary: "Policy people often do not build things. Builders often ignore how systems actually get governed."
	},
	{
		title: 'That is the useful space',
		meta: 'philosophy',
		href: '/about',
		summary: "The interesting space is where those two meet, and that is where I'm trying to spend more time."
	}
];

export const photoFrames = [
	{
		src: '/pics/IMG_5779.jpg',
		alt: 'Portrait-oriented photo from the gallery.',
		label: 'frame 01',
		meta: 'portrait'
	},
	{
		src: '/pics/IMG_5486.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 02',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5914.jpg',
		alt: 'Portrait-oriented photo from the gallery.',
		label: 'frame 03',
		meta: 'portrait'
	},
	{
		src: '/pics/IMG_5488.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 04',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5489.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 05',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5603.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 06',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5604.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 07',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5697.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 08',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5780.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 09',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5781.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 10',
		meta: 'landscape'
	},
	{
		src: '/pics/IMG_5782.jpg',
		alt: 'Landscape photo from the gallery.',
		label: 'frame 11',
		meta: 'landscape'
	}
] as const;
