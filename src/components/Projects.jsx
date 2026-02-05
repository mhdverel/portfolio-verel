const Projects = () => {
    const projects = [
        {
            title: 'DIGIMURA',
            description: 'A comprehensive platform for purchasing digital products and subscriptions like Netflix, Spotify, Canva, YouTube Premium, and more.',
            image: '/projects/digimura.jpg',
            techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Prisma'],
            demoUrl: 'https://www.digimura.store',
            status: 'Live',
            emoji: '🛒'
        },
        {
            title: 'DOGTOWNLADS',
            description: 'Mini e-commerce platform for a streetwear and casual football culture clothing brand. Features product listings, checkout flow, and admin management.',
            image: '/projects/dogtownlads.jpg',
            techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Prisma'],
            demoUrl: 'https://www.dogtownlads.com',
            status: 'In Development',
            emoji: '👕'
        }
    ]

    return (
        <section id="projects" className="notion-section">
            <h2 className="flex items-center gap-2 notion-heading mb-6">
                <span>📁</span> Projects
            </h2>

            <div className="space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="notion-card">
                        {/* Project Header */}
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-2xl">{project.emoji}</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-lg font-semibold text-notion-text">
                                        {project.title}
                                    </h3>
                                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${project.status === 'Live'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-notion-gray text-sm mt-1">{project.description}</p>
                            </div>
                        </div>

                        {/* Project Image */}
                        <div className="mb-4 rounded-lg overflow-hidden border border-notion-border">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-video object-cover"
                            />
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-2 py-1 text-xs bg-notion-lightgray text-notion-gray rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Link */}
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-notion-gray hover:text-notion-text transition-colors"
                        >
                            <span>🔗</span>
                            <span className="underline">View Project →</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
