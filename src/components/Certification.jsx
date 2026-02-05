const Certification = () => {
  const certifications = [
    {
      name: 'Microsoft Office Specialist',
      issuer: 'Universitas Islam Balitar',
      date: '2024',
      credentialUrl: 'https://drive.google.com/file/d/1B-FDptIgEzdwKlIB_51aEf-PyUeC5JaS/view?usp=sharing',
      icon: '📊',
    },
    {
      name: 'Intro to Software Engineering',
      issuer: 'RevoU',
      date: '2025',
      credentialUrl: 'https://drive.google.com/file/d/1roit0ujNPRzewDKifx5Of_x3YRjgxA70/view?usp=sharing',
      icon: '💻',
    },
    {
      name: 'Belajar Dasar AI',
      issuer: 'Dicoding',
      date: '2025',
      credentialUrl: 'https://www.dicoding.com/certificates/L4PQ2K5OOZO1',
      icon: '🤖',
    },
    {
      name: 'Belajar Dasar Cloud dan Gen AI di AWS',
      issuer: 'Dicoding',
      date: '2025',
      credentialUrl: 'https://www.dicoding.com/certificates/07Z6J9DW2XQR',
      icon: '☁️',
    },
  ]

  return (
    <section className="notion-section">
      <h2 className="flex items-center gap-2 notion-heading mb-4">
        <span>🏆</span> Certification
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {certifications.map((cert, index) => (
          <div key={index} className="notion-card">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{cert.icon}</span>
              <div>
                <h3 className="font-semibold text-notion-text text-sm">
                  {cert.name}
                </h3>
                <p className="text-notion-gray text-xs mt-1">{cert.issuer} ({cert.date})</p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline mt-1 inline-block"
                >
                  🔗 View Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certification
