import { FaArrowDown, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import IconLink from './IconLink'
import { useTypewriter } from '../hooks/useTypewriter'

const Hero = () => {
  const { text } = useTypewriter(
    [
      'Software Engineer',
      'Full Stack (MERN) Developer',
    ],
    { typingMs: 52, deletingMs: 28, pauseMs: 900 },
  )

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 py-8"
      // removed min-h-screen + heavy padding to avoid excessive blank space
    >
      <div className="section-container">
        <div className="animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold tracking-widest text-primary-700/90 mb-4">
                FULL STACK • MERN • AWS
              </p>
              <h1 className="text-sm font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-4">
                Hi, I'm{' '}
                <span className="text-primary-700 dark:text-primary-300">Akhilesh Kumar Mishra</span>
              </h1>

              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-6">
                <span className="text-gray-900 dark:text-gray-50">{text}</span>
                <span className="ml-1 inline-block w-[0.5ch] animate-blink text-primary-700 dark:text-primary-300">
                  |
                </span>
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Building scalable web applications with modern technologies. Focused on clean,
                maintainable code and smooth user experiences.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <IconLink
                  href="https://github.com/akhilesh79"
                  label="GitHub"
                  icon={<FaGithub />}
                />
                <IconLink
                  href="https://linkedin.com/in/akhilesh-kumar-mishra"
                  label="LinkedIn"
                  icon={<FaLinkedin />}
                />
                <IconLink
                  href="mailto:makmishra.99@gmail.com"
                  label="Email"
                  icon={<FaEnvelope />}
                />
                <IconLink
                  href="tel:+918765120746"
                  label="Call"
                  icon={<FaPhone />}
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection('#about')}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 transition-colors"
                  aria-label="Scroll to about section"
                >
                  <span className="text-sm font-semibold">Scroll</span>
                  <FaArrowDown className="text-sm" />
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
