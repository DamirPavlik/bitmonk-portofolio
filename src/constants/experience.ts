export interface SideBarLink {
	title: string;
	panelId: string;
    content: Array<string>;
}

export const sideBarLinks: SideBarLink[] = [
	// {
	// 	title: "Foundations",
	// 	panelId: "foundations",
    //     content: [
	//         "My journey into development started early, but it wasn’t linear.",
	// 	    "I first encountered programming at 12 through basic web development in school, but it didn’t fully click until later. In high school, I enrolled in an IT program where I was introduced to C. It was difficult—frustrating at times—but that challenge is what pulled me deeper into programming.",
    //         "Instead of stopping there, I went home and started learning on my own. I explored Python briefly, then transitioned into web development where things started to make more sense.",
    //         "From there, I built my foundation step by step:",
    //         "Before I ever got my first job, I had already gone through the full cycle of learning how to build complete web applications—from frontend to backend.",
    //         "What defined this phase wasn’t just learning syntax, but developing the habit of figuring things out independently and understanding how things work under the hood.",
    //     ]
	// },
	{
		title: "Funteron",
		panelId: "funteron",
        content: [
            "Senior Full-Stack Software Engineer · June 2026 - Present · United Kingdom (Remote)",
            "At Funteron I work on a betting platform, mostly on the backend in Go and Java, with some frontend and mobile work in React, TypeScript, and Flutter.",
            "My work includes:",
            "- leading the restructuring of 20+ microservices into a modular monolith, consolidating per-operator consumers and connectors into shared monorepos with reusable libraries",
            "- designing and building the complete accumulator (multi-bet) backend on my own, which helped bring around 1,000 users to the platform",
            "- designing and building a canonical data service, then migrating 6 bookmaker integrations to a unified event model with a zero-downtime cutover (~95K requests per week, zero ingestion errors after the migration)",
            "- building data-quality tooling and event-matching logic that removed 170+ duplicate teams and events and brought kickoff-time mismatches down from ~4% to near zero",
            "- building and maintaining integrations with 6 betting operators: authentication, balances, odds feeds, bet placement, and settlement",
            "- delivering Rugby and Darts support end-to-end, from backend models and market mapping to APIs and frontend",
            "- writing backend services with goroutines, Redis caching, rate limiting, and retries, tested with Go testing, JUnit, and Mockito",
            "- supporting AWS infrastructure and deployments with PostgreSQL, Docker, and GitHub Actions, and troubleshooting EKS workloads and networking",
        ]
	},
	{
		title: "Omnistreak",
		panelId: "omnistreak",
        content: [
            "Full-Stack Engineer · June 2023 - June 2026 · Slovakia (Remote)",
            "At 18, right after finishing high school, I joined Omnistreak and immediately started working on real production systems across 5 client projects.",
            "My work included:",
            "- migrating the backend of an established app with ~1.5 million users from WordPress to Python, fixing performance bottlenecks and modernizing the architecture",
            "- integrating OpenAI APIs into a Python Data Lake project, processing JSON from external APIs with AI-assisted data transformation",
            "- designing REST APIs, custom backend services, and third-party integrations: payments, webhooks, authentication flows, and e-commerce features",
            "- building a restaurant reservation service with interactive 2D seat selection, real-time availability, and integration with the restaurant's reservation system",
            "- leading a team of 5 engineers, doing code reviews, and mentoring junior developers",
            "- owning technical onboarding for all new hires, cutting ramp-up time from 2 weeks to 1 week",
            "My stack there was PHP, Python (FastAPI, Django), React, TypeScript, and JavaScript.",
        ]
	},
	{
		title: "Client Work",
		panelId: "client-work",
        content: [
            "Before entering a full-time role job at 16 I started worked directly with clients.",
            "I wasn’t just writing code, I handled the full process:",
            "- communicating with clients",
            "- understanding requirements",
            "- designing and structuring websites",
            "- developing both frontend and backend",
            "- optimizing for SEO and performance",
            "The work ranged from landing pages to fully functional apps. Every project required balancing technical decisions with real-world business needs.",
            "This experience taught me how to:",
            "- translate vague ideas into working products",
            "- take ownership of projects end-to-end",
            "- deliver solutions that people actually use",
        ]
	},
];
