import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiSanity,
} from 'react-icons/si'
import type { ReactNode } from 'react'

interface SkillCategory {
  title: string
  skills: {
    name: string
    icon?: ReactNode | null
  }[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-sm text-yellow-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-sm text-blue-500" /> },
      ],
    },
    {
      title: 'Frontend/Backend',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-sm text-blue-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-sm text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-sm text-gray-800" /> },
        { name: 'REST APIs', icon: null },
        { name: 'Cron Jobs', icon: null },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-sm text-green-500" /> },
        { name: 'Mongoose', icon: null },
      ],
    },
    {
      title: 'CMS/Tools',
      skills: [
        { name: 'Sanity CMS', icon: <SiSanity className="text-sm text-pink-500" /> },
        { name: 'Git', icon: <FaGitAlt className="text-sm text-orange-600" /> },
        { name: 'GitHub', icon: <FaGithub className="text-sm text-gray-800" /> },
        { name: 'Google Gemini AI', icon: null },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Lambda', icon: <FaAws className="text-sm text-orange-500" /> },
        { name: 'AWS SQS', icon: <FaAws className="text-sm text-orange-500" /> },
        { name: 'AWS SNS', icon: <FaAws className="text-sm text-orange-500" /> },
        { name: 'AWS Athena', icon: <FaAws className="text-sm text-orange-500" /> },
        { name: 'AWS S3', icon: <FaAws className="text-sm text-orange-500" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-950">
      <h2 className="section-title text-center">Skills</h2>
      <p className="section-subtitle text-center">
        Technologies and tools I work with
      </p>

      {/* map each category to a compact card with wrapped badge list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="card animate-slide-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-200"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
