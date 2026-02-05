const Education = () => {
  const educations = [
    {
      degree: "Bachelor’s Degree in Informatics Engineering",
      institution: 'Universitas Islam Balitar',
      period: '2020 - 2024',
      icon: '🎓',
      description: 'Focus on Software Engineering and Intelligent System'
    }
  ]

  return (
    <section id="education" className="notion-section">
      <h2 className="flex items-center gap-2 notion-heading mb-4">
        <span>📚</span> Education
      </h2>
      <div className="space-y-4">
        {educations.map((edu, index) => (
          <div key={index} className="notion-card">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{edu.icon}</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-notion-text">
                  {edu.degree}
                </h3>
                <p className="text-notion-gray">{edu.institution}</p>
                <p className="text-sm text-notion-gray mt-1">{edu.period}</p>
                <p className="notion-text mt-2 text-sm">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
