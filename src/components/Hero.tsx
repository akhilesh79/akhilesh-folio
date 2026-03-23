import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import IconLink from './IconLink';
import { useTypewriter } from '../hooks/useTypewriter';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/128993309?v=4';

const Hero = () => {
  const { text } = useTypewriter(['Software Engineer', 'Full Stack (MERN) Developer', 'Building for the Web'], {
    typingMs: 52,
    deletingMs: 28,
    pauseMs: 900,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900' />
      <div className='absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl' />

      <div className='relative section-container'>
        <div className='flex flex-col items-center gap-8'>
          {/* Avatar */}
          <div className='animate-fade-in'>
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300' />
              <img
                src={AVATAR_URL}
                alt='Akhilesh Kumar Mishra'
                className='relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-xl'
              />
            </div>
          </div>

          {/* Content */}
          <div className='text-center max-w-2xl animate-fade-in' style={{ animationDelay: '0.15s' }}>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse-soft' />
              Available for opportunities
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 mb-4'>
              Hi, I'm <span className='gradient-text'>Akhilesh</span>
            </h1>

            <h2 className='text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2 h-8'>
              <span>{text}</span>
              <span className='ml-0.5 inline-block w-[2px] h-6 align-middle animate-blink bg-primary-600 dark:bg-primary-400' />
            </h2>

            <p className='text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-4 mb-8 leading-relaxed'>
              Building scalable web applications with modern technologies. Focused on clean, maintainable code and
              smooth user experiences.
            </p>

            <div className='flex flex-wrap justify-center gap-3 mb-10'>
              <IconLink href='https://github.com/akhilesh79' label='GitHub' icon={<FaGithub />} />
              <IconLink href='https://linkedin.com/in/akhilesh-kumar-mishra' label='LinkedIn' icon={<FaLinkedin />} />
              <IconLink href='mailto:makmishra.99@gmail.com' label='Email' icon={<FaEnvelope />} />
              <IconLink href='tel:+918765120746' label='Call' icon={<FaPhone />} />
            </div>

            <button
              onClick={() => scrollToSection('#about')}
              className='inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors group'
              aria-label='Scroll to about section'
            >
              Scroll to explore
              <FaArrowDown className='text-xs group-hover:translate-y-0.5 transition-transform' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
