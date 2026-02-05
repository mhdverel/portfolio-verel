import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'About', href: '#about', icon: '👤' },
        { name: 'Tech Stack', href: '#tech-stack', icon: '⚙️' },
        { name: 'Projects', href: '#projects', icon: '📁' },
        { name: 'Education', href: '#education', icon: '📚' },
        { name: 'Contact', href: '#contact', icon: '✉️' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const navbarHeight = 56 // height of navbar (h-14 = 56px)
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'smooth'
            })
        }
        setIsMenuOpen(false)
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-notion-border">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    {/* Logo / Name */}
                    <a
                        href="#"
                        className="flex items-center gap-2 font-semibold text-notion-text hover:opacity-70 transition-opacity"
                    >
                        <span className="text-xl">📄</span>
                        <span>Verel's Portfolio</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-notion-gray hover:bg-notion-lightgray hover:text-notion-text rounded-md transition-all"
                            >
                                <span>{link.icon}</span>
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-notion-gray hover:bg-notion-lightgray rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-2 border-t border-notion-border">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex items-center gap-2 px-3 py-2 text-notion-gray hover:bg-notion-lightgray hover:text-notion-text rounded-md transition-all"
                            >
                                <span>{link.icon}</span>
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
