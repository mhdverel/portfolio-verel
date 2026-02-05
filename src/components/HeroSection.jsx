const HeroSection = () => {
  return (
    <section className="notion-section">
      <div className="flex items-start gap-6 mb-8">
        <div className="flex-shrink-0">
          <div className="w-28 h-28 rounded-full bg-notion-lightgray border-2 border-notion-border overflow-hidden">
            <img src="/profile.png" alt="Muhammad Verel" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1 pt-2">
          <h1 className="text-4xl font-bold mb-2 text-notion-text">
            Muhammad Verel
          </h1>
          <p className="text-xl text-notion-gray mb-4">
            Full Stack Web Developer with AI-Assisted
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://github.com/mhdverel/" className="text-notion-gray hover:text-notion-text transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl">🔗</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-verel/" className="text-notion-gray hover:text-notion-text transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl">💼</span> LinkedIn
            </a>
            <a href="mailto:mhdverel27@gmail.com" className="text-notion-gray hover:text-notion-text transition-colors">
              <span className="text-2xl">✉️</span> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
