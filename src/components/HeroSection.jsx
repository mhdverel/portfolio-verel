const HeroSection = () => {
  return (
    <section className="notion-section">
      {/* Mobile: Stack vertically, Desktop: Side by side */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-notion-lightgray border-2 border-notion-border overflow-hidden">
            <img src="/profile.png" alt="Muhammad Verel" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left pt-0 sm:pt-2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-notion-text">
            Muhammad Verel
          </h1>
          <p className="text-lg sm:text-xl text-notion-gray mb-4">
            Full Stack Web Developer with AI-Assisted
          </p>
          <div className="flex justify-center sm:justify-start gap-4 sm:gap-3 mt-4">
            <a href="https://github.com/mhdverel/" className="text-notion-gray hover:text-notion-text transition-colors flex flex-col sm:flex-row items-center gap-1" target="_blank" rel="noopener noreferrer">
              <span className="text-xl sm:text-2xl">🔗</span>
              <span className="text-xs sm:text-base">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-verel/" className="text-notion-gray hover:text-notion-text transition-colors flex flex-col sm:flex-row items-center gap-1" target="_blank" rel="noopener noreferrer">
              <span className="text-xl sm:text-2xl">💼</span>
              <span className="text-xs sm:text-base">LinkedIn</span>
            </a>
            <a href="mailto:mhdverel27@gmail.com" className="text-notion-gray hover:text-notion-text transition-colors flex flex-col sm:flex-row items-center gap-1">
              <span className="text-xl sm:text-2xl">✉️</span>
              <span className="text-xs sm:text-base">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
