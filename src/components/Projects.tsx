import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  highlights: string[];
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: 'Dev Tinder',
    emoji: '💻',
    description:
      'A full-stack social platform for developers to connect, match, and network — inspired by Tinder. Features real-time feed, user authentication, profile management, and connection requests.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Tailwind CSS', 'DaisyUI', 'AWS EC2'],
    github: 'https://github.com/akhilesh79',
    highlights: [
      'JWT-based auth with secure cookie handling',
      'Swipe-based feed to send/ignore connection requests',
      'Accept or reject incoming requests in real-time',
      'Edit profile with live preview & toast notifications',
      'Deployed on AWS EC2 with Nginx reverse proxy',
    ],
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Swiggy Clone',
    emoji: '🍔',
    description:
      'A feature-rich food ordering app built from scratch, cloning core Swiggy functionality. Includes restaurant listing, live search, cart management, and responsive design.',
    tech: ['React', 'Redux Toolkit', 'Parcel', 'Tailwind CSS', 'DaisyUI', 'Jest', 'React Testing Library'],
    github: 'https://github.com/akhilesh79',
    highlights: [
      'Live restaurant data via Swiggy API integration',
      'Search & filter restaurants with shimmer loading UI',
      'Cart management with Redux Toolkit state',
      'Unit & integration tests with Jest + RTL',
      'Custom hooks for data fetching and optimization',
    ],
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Movies App',
    emoji: '🎬',
    description:
      'A monorepo movie discovery application with a Node.js backend and React frontend. Browse, search, and explore movies with a clean, responsive interface.',
    tech: ['React', 'Node.js', 'Express', 'REST API', 'Monorepo'],
    github: 'https://github.com/akhilesh79',
    highlights: [
      'Monorepo architecture with client & server',
      'RESTful API backend for movie data',
      'Responsive movie browsing experience',
    ],
    gradient: 'from-violet-500 to-purple-600',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='section-container'>
      <h2 className='section-title text-center'>Projects</h2>
      <p className='section-subtitle text-center'>Real-world applications I've built from scratch</p>

      <div className='max-w-5xl mx-auto space-y-8'>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className='card group overflow-hidden animate-slide-up'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Top gradient bar */}
            <div className={`h-1 -mx-5 -mt-5 mb-5 bg-gradient-to-r ${project.gradient}`} />

            <div className='flex flex-col md:flex-row gap-6'>
              {/* Left — info */}
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-3 mb-3'>
                  <span className='text-2xl'>{project.emoji}</span>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-gray-50'>{project.title}</h3>
                </div>

                <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>{project.description}</p>

                {/* Tech tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className='px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800/30'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-3'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
                    >
                      <FaExternalLinkAlt className='text-xs' />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right — highlights */}
              <div className='md:w-72 flex-shrink-0'>
                <p className='text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3'>
                  Key Features
                </p>
                <ul className='space-y-2'>
                  {project.highlights.map((h, i) => (
                    <li key={i} className='flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300'>
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
