export interface SideBarLink {
	title: string;
	panelId: string;
    content: Array<string>;
}

export const sideBarLinks: SideBarLink[] = [
	{
		title: "Foundations",
		panelId: "foundations",
        content: [
	        "My journey into development started early, but it wasn’t linear.",
		    "I first encountered programming at 12 through basic web development in school, but it didn’t fully click until later. In high school, I enrolled in an IT program where I was introduced to C. It was difficult—frustrating at times—but that challenge is what pulled me deeper into programming.",
            "Instead of stopping there, I went home and started learning on my own. I explored Python briefly, then transitioned into web development where things started to make more sense.",
            "From there, I built my foundation step by step:",
            "Before I ever got my first job, I had already gone through the full cycle of learning how to build complete web applications—from frontend to backend.",
            "What defined this phase wasn’t just learning syntax, but developing the habit of figuring things out independently and understanding how things work under the hood.",
        ]
	},
	{
		title: "Client Work",
		panelId: "client-work",
        content: [
            "Before entering a full-time role job at 17 I started worked directly with clients, building websites from the ground up.",
            "I wasn’t just writing code, I handled the full process:",
            "- communicating with clients",
            "- understanding requirements",
            "- designing and structuring websites",
            "- developing both frontend and backend",
            "- optimizing for SEO and performance",
            "The work ranged from landing pages to fully functional websites. Every project required balancing technical decisions with real-world business needs.",
            "This experience taught me how to:",
            "- translate vague ideas into working products",
            "- take ownership of projects end-to-end",
            "- deliver solutions that people actually use",
            "It also gave me an early understanding that writing code is only part of the job solving problems is what really matters.",
        ]
	},
	{
		title: "Omnistreak",
		panelId: "omnistreak",
        content: [
            "At 18, right after finishing high school, I joined Omnistreak and immediately started working on real production systems.",
            "In many cases, I worked independently, handling tasks end-to-end. This pushed me to grow quickly, both technically and professionally.",
            "My work includes:",
            "- building and maintaining APIs",
            "- developing backend systems",
            "- creating frontend interfaces",
            "- working with WordPress",
            "- implementing integrations between different services",
            "- integrating AWS lambda functions into our apps",
            "My core stack revolves around JavaScript, PHP, React, and WordPress, but more importantly, I focus on understanding the underlying systems rather than relying only on tools.",
        ]
	},
];