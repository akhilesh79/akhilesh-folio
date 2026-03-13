import { useMemo, useState } from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  const navItems = useMemo(
    () => [
      { name: 'Home', href: '#home', id: 'home' },
      { name: 'About', href: '#about', id: 'about' },
      { name: 'Skills', href: '#skills', id: 'skills' },
      { name: 'Experience', href: '#experience', id: 'experience' },
      { name: 'Education', href: '#education', id: 'education' },
      { name: 'Contact', href: '#contact', id: 'contact' },
    ],
    [],
  )

  const activeId = useActiveSection(navItems.map((i) => i.id))

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/80 backdrop-blur shadow-sm py-3'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="inline-flex items-center gap-2 transition-transform hover:scale-[1.02]"
              aria-label="Go to Home"
            >
              <img
                src="/avatar.svg"
                alt="Avatar"
                className="h-10 w-10 rounded-full border border-white/50 dark:border-gray-800 shadow-sm"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={[
                  'text-sm font-medium transition-colors duration-200',
                  activeId === item.id
                    ? 'text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300',
                ].join(' ')}
              >
                {item.name}
              </a>
            ))}

            <button
              type="button"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
              className={[
                'inline-flex h-10 w-10 items-center justify-center rounded-xl',
                'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60',
                'text-gray-800 dark:text-gray-50',
                'transition-all hover:-translate-y-0.5 hover:shadow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                'focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950',
              ].join(' ')}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
              className={[
                'inline-flex h-10 w-10 items-center justify-center rounded-xl',
                'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60',
                'text-gray-800 dark:text-gray-50',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
                'focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950',
              ].join(' ')}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/80 backdrop-blur animate-slide-down">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={[
                  'block py-2 text-sm font-medium transition-colors',
                  activeId === item.id
                    ? 'text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300',
                ].join(' ')}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
