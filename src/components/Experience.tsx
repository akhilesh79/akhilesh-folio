import { FaBriefcase } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'UPRIO',
    position: 'Software Engineer',
    duration: 'Mar 2024 – Present',
    location: 'Bengaluru, India',
    achievements: [
      'Led end-to-end development of a Parent Dashboard with real-time student progress, live classes, and performance analytics.',
      'Built a real-time analytics engine using AWS SQS for chapter-level comprehension scoring and student classification.',
      'Designed an AI-powered skill suggestion system using Google Gemini AI with structured prompt engineering and confidence scoring.',
      'Integrated Sanity CMS with GROQ queries for scalable, dynamic content management.',
      'Developed automated student reporting with Puppeteer PDF pipeline, batch processing, and AWS S3 uploads.',
      'Built tutor evaluation platform for notebook submissions, polls, and practice papers with automated progress reports.',
    ],
  },
  {
    company: 'CODOSPHERE',
    position: 'Software Engineer',
    duration: 'Aug 2023 – Feb 2024',
    location: 'India',
    achievements: [
      'Designed SwitchMyLoan.in for comparing and applying for home, auto, and personal loans.',
      'Developed SML-Nucleus backend server with APIs for integrations and core business workflows.',
      'Built the SML Partner Connect App for seamless partner interactions and lead tracking.',
      'Mentored junior developers and established clean coding practices.',
    ],
  },
  {
    company: "BYJU'S",
    position: 'Associate Software Engineer',
    duration: 'Oct 2021 – Aug 2023',
    location: 'India',
    achievements: [
      'Built grade-switch and academic-year transition features on UXOS platform.',
      'Developed and consumed RESTful APIs for smooth frontend-backend communication.',
      'Integrated third-party APIs and handled unit testing, debugging, and production issues.',
    ],
  },
];

const Experience = () => {
  return (
    <section id='experience' className='section-container bg-gray-50/50 dark:bg-gray-900/30'>
      <h2 className='section-title text-center'>Experience</h2>
      <p className='section-subtitle text-center'>My professional journey and key achievements</p>

      <div className='max-w-4xl mx-auto'>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-300 via-primary-200 to-transparent dark:from-primary-700 dark:via-primary-800 dark:to-transparent hidden md:block' />

          <div className='space-y-6'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='relative flex items-start gap-6 animate-slide-in-left'
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className='hidden md:flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30 border-2 border-primary-300 dark:border-primary-700 z-10'>
                  <FaBriefcase className='text-sm text-primary-600 dark:text-primary-400' />
                </div>

                <div className='flex-1 md:ml-0 ml-0'>
                  <div className='card'>
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4'>
                      <div>
                        <h3 className='text-lg font-bold text-gray-900 dark:text-gray-50'>{exp.position}</h3>
                        <p className='text-sm font-semibold text-primary-600 dark:text-primary-400'>{exp.company}</p>
                      </div>
                      <span className='text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap'>{exp.duration}</span>
                    </div>

                    <ul className='space-y-2'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className='flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300'
                        >
                          <span className='w-1.5 h-1.5 rounded-full bg-primary-400 dark:bg-primary-500 mt-2 flex-shrink-0' />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
