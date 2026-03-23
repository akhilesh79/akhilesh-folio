import { useMemo, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/128993309?v=4';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const navItems = useMemo(
    () => [
      { name: 'Home', href: '#home', id: 'home' },
      { name: 'About', href: '#about', id: 'about' },
      { name: 'Skills', href: '#skills', id: 'skills' },
      { name: 'Projects', href: '#projects', id: 'projects' },
      { name: 'Experience', href: '#experience', id: 'experience' },
      { name: 'Education', href: '#education', id: 'education' },
      { name: 'Contact', href: '#contact', id: 'contact' },
    ],
    [],
  );

  const activeId = useActiveSection(navItems.map((i) => i.id));

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/50 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className='max-w-6xl mx-auto px-5 sm:px-8 lg:px-10'>
        <div className='flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <a
              href='#home'
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className='inline-flex items-center gap-2.5 transition-transform hover:scale-[1.02]'
              aria-label='Go to Home'
            >
              <img
                src={AVATAR_URL}
                alt='Avatar'
                className='h-9 w-9 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm'
              />
              <span className='hidden sm:block text-sm font-bold text-gray-900 dark:text-gray-50'>
                Akhilesh<span className='text-primary-600 dark:text-primary-400'>.</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-1'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={[
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                  activeId === item.id
                    ? 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-800/50',
                ].join(' ')}
              >
                {item.name}
              </a>
            ))}

            <div className='w-px h-5 bg-gray-200 dark:bg-gray-700 mx-2' />

            <button
              type='button'
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
              className={[
                'inline-flex h-9 w-9 items-center justify-center rounded-lg',
                'text-gray-500 dark:text-gray-400',
                'transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
              ].join(' ')}
            >
              {theme === 'dark' ? <FaSun className='text-sm' /> : <FaMoon className='text-sm' />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center gap-2'>
            <button
              type='button'
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
              className='inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
            >
              {theme === 'dark' ? <FaSun className='text-sm' /> : <FaMoon className='text-sm' />}
            </button>

            <button
              className='inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <FaTimes className='h-5 w-5' /> : <FaBars className='h-5 w-5' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-3 p-3 rounded-2xl border border-gray-100 dark:border-gray-800/60 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl animate-slide-down shadow-lg'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                aria-current={activeId === item.id ? 'page' : undefined}
                className={[
                  'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  activeId === item.id
                    ? 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50',
                ].join(' ')}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
