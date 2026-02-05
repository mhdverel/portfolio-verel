const CTAHireMe = () => {
  return (
    <section id="contact" className="notion-section">
      <div className="notion-card bg-notion-lightgray text-center py-8">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-3 text-notion-text">
          <span>🚀</span> Ready to Work Together?
        </h2>
        <p className="notion-text mb-6 max-w-xl mx-auto">
          Saya terbuka untuk proyek freelance, kontrak, atau posisi full-time.
          Mari diskusikan bagaimana saya dapat membantu mewujudkan ide digital Anda!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:mhdverel27@gmail.com"
            className="notion-button"
          >
            <span className="mr-2">✉️</span>
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-verel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border-2 border-notion-text text-notion-text rounded-md hover:bg-notion-lightgray transition-all"
          >
            <span className="mr-2">💼</span>
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 border-2 border-notion-text text-notion-text rounded-md hover:bg-notion-lightgray transition-all"
          >
            <span className="mr-2">📄</span>
            Download CV
          </a>
        </div>
      </div>

      <footer className="mt-12 text-center">
        <p className="text-notion-gray text-sm">
          © 2026 Muhammad Verel. Built with <span className="font-bold">Vibe Code</span> inspired by <span className="font-bold">Notion</span>.
        </p>
      </footer>
    </section>
  )
}

export default CTAHireMe
