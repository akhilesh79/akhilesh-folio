import { FaBriefcase } from 'react-icons/fa'

interface Experience {
  company: string
  position: string
  duration: string
  location: string
  achievements: string[]
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: 'UPRIO',
      position: 'Software Engineer',
      duration: 'Mar 2024 – Present',
      location: 'Bengaluru, India',
      achievements: [
        'Led the end to end development of a Parent Dashboard providing real-time visibility into student progress, live classes, chapter wise evaluations, and performance analytics, enabling parents to clearly identify learning gaps and strengths.',
        'Built a real time student performance analytics engine using AWS SQS to process evaluation data at scale, computing chapter level comprehension and question category understanding, and classifying students as strong, needs practice, or re-teach required.',
        'Implemented a school exam marksheet upload feature to group students by learning levels and support personalized teaching strategies.',
        'Built a tutor evaluation and assessment platform that allows tutors to review notebook submissions, polls, and practice papers, with evaluation data that feed into automated progress reports.',
        'Integrated Sanity CMS using GROQ queries to enable scalable and fully customizable content management with dynamic content delivery.',
        'Designed and developed an AI-powered skill suggestion system using Google Gemini AI, leveraging structured JSON-based prompt engineering to analyze question category steps and map relevant skills with confidence scores. Integrated AI workflows with AWS SQS and Sanity CMS to support asynchronous, on demand skills recommendations.',
        'Developed an automated student reporting system that generates monthly and chapter-wise performance reports using a Puppeteer-based PDF pipeline with batch processing and secure uploads to AWS S3.',
      ],
    },
    {
      company: 'CODOSPHERE',
      position: 'Software Engineer',
      duration: 'Aug 2023 – Feb 2024',
      location: 'India',
      achievements: [
        'Designed SwitchMyLoan.in, allowing users to compare and apply for home, auto, and personal loans through streamlined digital journeys.',
        'Developed SML-Nucleus, a backend server exposing APIs to support integrations and core business workflows.',
        'Built the SML Partner Connect App to enable seamless interactions and lead tracking for SwitchMyLoan partners.',
        'Interfaced with the Business Rules Engine (BRE) to fetch and display eligible loan offers.',
        'Mentored junior developers and consistently followed clean coding and best development practices.',
      ],
    },
    {
      company: "BYJU'S",
      position: 'Associate Software Engineer',
      duration: 'Oct 2021 – Aug 2023',
      location: 'India',
      achievements: [
        'Built a grade-switch and academic-year transition feature on UXOS.',
        'Collaborated closely with design teams to deliver consistent and user-friendly interfaces.',
        'Developed and consumed RESTful APIs to enable smooth front-end and back-end communication.',
        'Integrated third-party APIs and handled unit testing, debugging, and production issue resolution.',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title text-center">Experience</h2>
      <p className="section-subtitle text-center">
        My professional journey and achievements
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900/50 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-950 shadow-lg z-10"></div>

                <div className="md:ml-16 flex-1">
                  <div className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaBriefcase className="text-primary-600" />
                          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-50">
                            {exp.position}
                          </h3>
                        </div>
                        <p className="text-sm font-semibold text-primary-600 dark:text-primary-300 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.duration} | {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-200"
                        >
                          <span className="text-primary-600 mt-1.5">→</span>
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
  )
}

export default Experience
