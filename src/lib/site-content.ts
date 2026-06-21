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
		slug: 'prepr',
		title: 'prepr',
		tag: 'pwa / product',
		status: 'active',
		summary:
			'A shared grocery list, recipe box, meal planner, and pantry — an offline-first PWA with no account needed.',
		motivation:
			'The weekly food shop is a mess of half-remembered lists, duplicated items, and "do we already have pasta?". I wanted one calm place to save recipes, plan the week, and build a shared list that still works with no signal in the supermarket.',
		description: [
			'prepr is an installable PWA with four connected pieces: a categorised shopping list, a searchable recipe box, a Mon–Sun meal planner, and a pantry of staples. Data lives on the device, so it loads instantly and works fully offline — no sign-up.',
			'The pieces feed each other: assign recipes to days, then add the whole week to your list with quantities aggregated across meals and pantry staples skipped automatically.'
		],
		features: [
			'Categorised, colour-coded shopping list with one-tap "in cart" and undo',
			'Recipe box searchable by name or ingredient, scalable by serving count',
			'Mon–Sun meal planner that adds an entire week to the list at once',
			'Pantry of staples that are skipped automatically when adding recipes',
			'Installable, offline-first PWA with light/dark themes and JSON export/import'
		],
		lessons: [
			'Keeping the core logic in pure, unit-tested functions — separate from the React layer — made the list/recipe/pantry interactions far easier to reason about and change.',
			'Offline-first with local storage is liberating for a personal app: no auth, no backend, instant loads. The trade-off is that every hard problem (merging, import/export) moves into the client.',
			'A shopping app lives or dies on speed in the aisle. Optimising for one-tap actions mattered more than any single feature.'
		],
		stack: ['React', 'TypeScript', 'Vite', 'PWA / Workbox', 'Vitest'],
		links: [
			{ label: 'Live', href: 'https://prepr.camlc.dev', kind: 'live' },
			{ label: 'GitHub', href: 'https://github.com/camclarke11/prepr', kind: 'github' }
		]
	},
	{
		slug: 'world-cup-league',
		title: 'World Cup 2026 Prediction League',
		tag: 'full-stack / web app',
		status: 'active',
		summary:
			'A private prediction league for the 2026 World Cup — call every scoreline before kickoff and climb the leaderboard.',
		motivation:
			'I wanted a prediction game to run with friends for the 2026 World Cup, but the existing ones are clunky, ad-heavy, or demand an account for everything. So I built a small private league: join with a share code, predict scorelines, compete on a leaderboard.',
		description: [
			'Members join a private league via a share code and predict the scoreline of every match before kickoff. Points are awarded by accuracy — 5 for an exact score, 3 for the right result and goal difference, 1 for the right result — and the leaderboard updates as results land.',
			'Two rules carry the integrity of the game, and both are enforced in the data layer rather than just the UI: predictions lock at kickoff (checked against the stored kickoff time on the server) and stay hidden from other members until a match has started.'
		],
		features: [
			'Private leagues joined with a share code, with a live leaderboard',
			'Tiered scoring (exact / result + goal difference / result) with server-enforced kickoff locking',
			'Predictions hidden from others until kickoff, enforced in the data layer',
			'Passwordless magic-link sign-in, plus optional passkeys and Google',
			'Automated results sync on a Cloudflare cron, with admin manual entry as the source of truth'
		],
		lessons: [
			'Correctness rules like "lock at kickoff" and "hide predictions" have to live in the data layer. If they only exist in the UI, they are not really enforced.',
			'Idempotent scoring matters: a finished match should never be silently re-scored, whether the result arrives from the API or an admin. Designing the sync to be a safe no-op without an API key kept it robust.',
			'Running Next.js on Cloudflare Workers via OpenNext is great on the free tier, but the toolchain has sharp edges — Turbopack server chunks fail at runtime, so the build has to stay on webpack.'
		],
		stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'D1', 'better-auth', 'Tailwind'],
		links: [{ label: 'Live', href: 'https://wc.camlc.dev', kind: 'live' }]
	},
	{
		slug: 'housetrackr',
		title: 'HouseTrackr',
		tag: 'scraping / tools',
		status: 'active',
		summary:
			'A private house-hunting tracker that scrapes listings into one shared, synced dataset with map, table, and compare views.',
		motivation:
			'House-hunting means the same listings scattered across portals, spreadsheets, and screenshots, with no shared view between two people looking together. I wanted one place that pulls listings in automatically and keeps a single synced dataset we could both annotate.',
		description: [
			'A Playwright scraper pulls property listings into a shared dataset in Cloudflare KV that syncs across devices, so two people always see the same data. The app presents it as cards, a sortable table, a map, a calendar of viewings, a side-by-side compare view, and an inbox of new listings.',
			'Cloudflare Workers AI extracts floor area from listing text, web push sends alerts when new properties appear, and the whole thing sits behind Cloudflare Access so it stays private.'
		],
		features: [
			'Playwright scraper that pulls listings into a single shared dataset',
			'Cards, table, map, calendar, compare, and inbox views over the same data',
			'Cross-device sync via Cloudflare KV',
			'Floor-area extraction with Cloudflare Workers AI',
			'Web-push alerts for new listings, all behind Cloudflare Access'
		],
		lessons: [
			'Shared state is deceptively hard. The first sync design lost data under concurrent edits (last-write-wins); fixing that properly was most of the work.',
			'A scraper is only as good as its resilience. Validating scraped data before it touches the dataset saved a lot of cleanup later.',
			'Workers AI on the free tier is a surprisingly practical way to turn messy listing text into a structured field like floor area.'
		],
		stack: ['Cloudflare Workers', 'KV', 'Workers AI', 'Playwright', 'React'],
		links: []
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
