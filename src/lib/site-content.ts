export type SocialLinkKind = 'linkedin' | 'github' | 'email';

export const introParagraphs = [
	'I work on Smart Data policy that has to function in the real world.',
	'I care about clear decisions, practical delivery plans, and interfaces that do not get in their own way.'
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

export const projects = [
	{
		title: 'Smart Data Policy Framework',
		tag: 'current',
		href: '/projects',
		summary:
			'Framework for scheme scope, safeguards, interoperability needs, and phased implementation choices.'
	},
	{
		title: 'Portfolio Platform',
		tag: 'site',
		href: '/projects',
		summary: 'A cleaner structure for writing, projects, and personal context.'
	},
	{
		title: 'Physics Research Track',
		tag: 'archive',
		href: '/projects',
		summary: 'Work that shaped how I handle uncertainty, argument, and evidence.'
	}
];

export const openSource = [
	{
		title: 'Policy Notes',
		meta: 'drafts / writing',
		href: '/projects',
		summary: 'Short essays and working notes on delivery, policy, and systems.'
	},
	{
		title: 'UI Experiments',
		meta: 'frontend / structure',
		href: '/projects',
		summary: 'Small interface studies focused on hierarchy, restraint, and interaction.'
	}
];

export const posts = [
	{
		date: 'Oct 12, 2024',
		href: '/blog',
		preview:
			'A working note on building policy systems that can survive operational detail, institutional constraints, and delivery sequencing.',
		title: 'The Future of Smart Data Policy'
	},
	{
		date: 'Aug 5, 2024',
		href: '/blog',
		preview:
			'How a physics background shaped my approach to uncertainty, evidence, and making cleaner decisions in live policy work.',
		title: 'From Physics to Policy'
	},
	{
		date: 'May 20, 2024',
		href: '/blog',
		preview:
			'Notes on reducing visual noise, tightening hierarchy, and making a personal site feel more like an index than a landing page.',
		title: 'Building This Portfolio'
	}
];

export const talks = [
	{
		date: 'Apr 2024',
		href: '/blog',
		preview:
			'A short talk on surfacing delivery constraints early enough that teams can make better tradeoffs before policy hardens.',
		title: 'Making delivery constraints visible earlier'
	},
	{
		date: 'Jan 2024',
		href: '/blog',
		preview:
			'An argument for clearer decision structures so policy work stays legible across mixed teams, owners, and timelines.',
		title: 'Clearer structure for policy decisions'
	},
	{
		date: 'Sep 2023',
		href: '/blog',
		preview:
			'Reflections on handling complexity without theatricality: evidence first, structure second, polish last.',
		title: 'Complexity, evidence, and practical execution'
	}
];

export const principles = [
	'Make complexity usable.',
	'Keep delivery visible.',
	'Prefer signal over performance.',
	'Align mixed teams quickly.'
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
