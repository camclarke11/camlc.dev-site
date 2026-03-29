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

export type ProjectLink = {
	label: string;
	href: string;
	kind: 'github' | 'live' | 'docs' | 'other';
};

export type Project = {
	slug: string;
	title: string;
	tag: string;
	status: 'active' | 'archived' | 'idea';
	summary: string;
	motivation: string;
	description: string[];
	features: string[];
	lessons: string[];
	stack: string[];
	links: ProjectLink[];
};

export const projects: Project[] = [
	{
		slug: 'smart-data-mapping',
		title: 'Smart Data Mapping',
		tag: 'policy / systems',
		status: 'active',
		summary: 'Tools and visualisations exploring how data portability could work across sectors.',
		motivation:
			'Smart Data policy is spread across multiple sectors, each with its own standards and timelines. There was no single view of how these schemes relate to each other or where they share common infrastructure. I wanted to build one.',
		description: [
			'Smart Data schemes give people the right to share their data with authorised third parties. This project maps out how those schemes connect, where the standards overlap, and where they diverge.',
			'The goal is to make the cross-sector landscape legible — which sectors have mandated APIs, what data is portable, and where the gaps are.'
		],
		features: [
			'Interactive map of UK Smart Data schemes and their regulatory status',
			'Cross-sector comparison of API standards, data types, and consent models',
			'Visual timeline of scheme milestones and upcoming deadlines',
			'Filterable by sector, data type, and implementation stage'
		],
		lessons: [
			'Policy data is messy. Half the challenge was deciding what counted as a "scheme" versus a proposal versus a consultation.',
			'D3 force layouts are great for showing relationships but terrible for conveying hierarchy. Ended up using a hybrid approach.',
			'The most useful output turned out to be the simplest — a plain table comparing schemes side by side.'
		],
		stack: ['SvelteKit', 'D3', 'TypeScript'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/camclarke11/smart-data-mapping', kind: 'github' }
		]
	},
	{
		slug: 'ai-course-builder',
		title: 'AI Course Builder',
		tag: 'AI / product',
		status: 'active',
		summary:
			'A system that generates a full learning curriculum on any topic, including chapters, lessons, and progress tracking.',
		motivation:
			'Most AI-generated educational content is flat — a wall of text with no structure. I wanted to see if wrapping LLM output in a proper course framework (chapters, progression, quizzes) would make it actually useful for learning.',
		description: [
			'You give it a topic, it builds a structured course — chapters, lessons, quizzes, and a progress tracker. The content is generated with LLMs but the structure and flow are designed to feel like a real course.',
			'Built as an experiment in whether AI-generated educational content can be useful when it is given enough scaffolding and constraints.'
		],
		features: [
			'Generates a full course outline from a single topic prompt',
			'Each lesson has structured content, key takeaways, and quiz questions',
			'Progress tracking with completion state per lesson and chapter',
			'Adaptive difficulty — later lessons reference earlier material'
		],
		lessons: [
			'The quality of generated content is almost entirely a function of how constrained the prompt is. Open-ended prompts produce generic slop; structured schemas produce something you can actually learn from.',
			'Progress tracking changed how people used it. Without it, they skimmed. With it, they actually worked through lessons in order.',
			'Quizzes are the hardest part to generate well. Multiple-choice distractors need to be plausible but wrong, which LLMs find surprisingly difficult.'
		],
		stack: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/camclarke11/ai-course-builder', kind: 'github' }
		]
	},
	{
		slug: 'clip-detection-ai',
		title: 'Clip Detection AI',
		tag: 'media / ML',
		status: 'archived',
		summary:
			'Experiments analysing livestream chat and video to detect highlight moments automatically.',
		motivation:
			'A typical livestream is 4-8 hours. The highlights are maybe 10 minutes total. Manually scrubbing through footage to find them is painful. I wanted to automate the detection of "something interesting just happened" using signals that are already available.',
		description: [
			'Livestream content is long and mostly uneventful. This project tried to solve the clipping problem: automatically detecting the moments worth saving.',
			'It combined chat velocity spikes, audio peaks, and basic sentiment analysis to score segments and suggest clip boundaries. Worked surprisingly well for gaming streams, less so for talk content.'
		],
		features: [
			'Real-time chat velocity analysis with configurable spike thresholds',
			'Audio peak detection using FFmpeg waveform extraction',
			'Sentiment scoring on chat messages to distinguish hype from noise',
			'Automatic clip boundary suggestion with adjustable padding'
		],
		lessons: [
			'Chat velocity alone gets you 70% of the way. Adding audio and sentiment analysis improved precision but the marginal gain was smaller than expected.',
			'Gaming streams have very clear signal patterns (emote spam, all-caps). Talk streams are much harder because the interesting moments are quieter.',
			'Archived this because the Twitch API changes made the real-time chat ingestion more fragile than it was worth maintaining.'
		],
		stack: ['Python', 'FFmpeg', 'scikit-learn', 'Twitch API'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/camclarke11/clip-detection', kind: 'github' }
		]
	},
	{
		slug: 'internet-experiments',
		title: 'Random Internet Experiments',
		tag: 'scrapers / tools',
		status: 'active',
		summary:
			'Scrapers, dashboards, automation tools, and other things that seemed like a good idea at the time.',
		motivation:
			'Sometimes you just want to answer a question, and the fastest way to answer it is to write a script. This is the collection of scripts that grew into something slightly bigger than a one-off.',
		description: [
			'A loose collection of small projects that do not fit anywhere else. Price trackers, data scrapers, notification bots, dashboard prototypes, and various automation scripts.',
			'Most of these start as "I wonder if I could..." and end up either being genuinely useful or teaching me something interesting about an API or data source.'
		],
		features: [
			'Price tracking scrapers with change notifications',
			'Data pipeline prototypes for various public APIs',
			'Dashboard templates for quick data visualisation',
			'Automation scripts and notification bots'
		],
		lessons: [
			'The best scrapers are the ones you forget about until they send you an alert. Resilience matters more than features.',
			'Public APIs change without warning. The scrapers that survived longest were the ones with the simplest dependencies.',
			'Half of these projects taught me more about rate limiting and retry logic than about the actual data.'
		],
		stack: ['Python', 'Node.js', 'Various APIs'],
		links: [
			{ label: 'GitHub', href: 'https://github.com/camclarke11', kind: 'github' }
		]
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
