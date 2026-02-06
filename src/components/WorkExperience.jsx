const WorkExperience = () => {
    const experiences = [
        {
            title: 'Freelance Digital Marketing',
            company: 'Self-employed',
            period: 'Jan 2021 - Nov 2025',
            description: 'Meta Ads advertiser helping businesses drive website traffic and conversions through strategic digital campaigns.',
            responsibilities: [
                'Managed SEO-based content to improve website visibility.',
                'Managed Facebook Ads campaigns focusing on traffic and engagement.',
                'Designed digital announcement systems to support public services.',
                'Assisted operational activities and digital transformation within the institution.'
            ],
            emoji: '📈'
        },
        {
            title: 'Web Developer Intern',
            company: 'UPTD. Pengujian Kendaraan Bermotor (KIR) Kota Blitar',
            period: 'Jan 2023 - Feb 2023',
            description: 'Built a WhatsApp Gateway system using third-party API for automated communications and reminders.',
            responsibilities: [
                'Developed a web-based automation system using Laravel.',
                'Integrated third-party WhatsApp API for automated notifications and reminders',
                'Integrated third-party WhatsApp API',
                'Created admin dashboard for message management'
            ],
            emoji: '💻'
        }
    ]

    return (
        <section id="experience" className="notion-section">
            <h2 className="flex items-center gap-2 notion-heading mb-6">
                <span>💼</span> Work Experience
            </h2>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="notion-card">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">{exp.emoji}</span>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-notion-text">
                                    {exp.title}
                                </h3>
                                <p className="text-notion-gray text-sm">{exp.company}</p>
                                {exp.period && (
                                    <p className="text-notion-gray text-xs mt-1">
                                        📅 {exp.period}
                                    </p>
                                )}
                                <p className="text-notion-gray text-sm mt-3">
                                    {exp.description}
                                </p>
                                <ul className="mt-3 space-y-1">
                                    {exp.responsibilities.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-sm text-notion-gray flex items-start gap-2">
                                            <span className="text-notion-text">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience
