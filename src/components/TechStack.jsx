import StackIcon from 'tech-stack-icons'

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs2' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'expressjs' },
        { name: 'Laravel', icon: 'laravel' },
      ],
    },
    {
      title: 'Database & ORM',
      technologies: [
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Supabase', customIcon: 'https://cdn.jsdelivr.net/gh/supabase/supabase@master/apps/www/public/images/supabase-logo-icon.svg' },
        { name: 'Prisma ORM', icon: 'prisma' },
        { name: 'Redis', icon: 'redis' },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      technologies: [
        { name: 'Docker', icon: 'docker' },
        { name: 'GitHub Actions', icon: 'github' },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'AWS', icon: 'aws' },
        { name: 'GCP', icon: 'gcloud' },
      ],
    },
    {
      title: 'AI & LLM Tools',
      technologies: [
        { name: 'OpenAI', icon: 'openai' },
        { name: 'Gemini', customIcon: '/gemini-icon.svg' },
        { name: 'Claude', icon: 'claude' },
        { name: 'Perplexity', icon: 'perplexity' },
      ],
    },
    {
      title: 'Development & API Tools',
      technologies: [
        { name: 'Trae', customIcon: '/trae-icon.png' },
        { name: 'Antigravity', customIcon: '/antigravity-icon.svg' },
        { name: 'Cursor', icon: 'cursor' },
        { name: 'Postman', icon: 'postman' },
        { name: 'Insomnia', customIcon: '/insomnia-icon.svg' },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="notion-section">
      <h2 className="flex items-center gap-2 notion-heading mb-6">
        <span>⚙️</span> Tech Stack
      </h2>
      <div className="space-y-6">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-sm font-semibold text-notion-gray uppercase tracking-wider mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="notion-card flex items-center gap-2 px-3 py-2 cursor-pointer hover:shadow-md transition-shadow"
                >
                  {tech.customIcon ? (
                    <img src={tech.customIcon} alt={tech.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <StackIcon name={tech.icon} variant={tech.variant} className="w-6 h-6" />
                  )}
                  <span className="font-medium text-notion-text text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
