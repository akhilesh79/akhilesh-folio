import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiExpress, SiSanity } from 'react-icons/si';
import type { ReactNode } from 'react';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: ReactNode | null;
  }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className='text-yellow-500' /> },
        { name: 'TypeScript', icon: <SiTypescript className='text-blue-500' /> },
      ],
    },
    {
      title: 'Frontend & Backend',
      skills: [
        { name: 'React.js', icon: <FaReact className='text-blue-400' /> },
        { name: 'Node.js', icon: <FaNodeJs className='text-green-600' /> },
        { name: 'Express.js', icon: <SiExpress className='text-gray-600 dark:text-gray-300' /> },
        { name: 'REST APIs' },
        { name: 'Cron Jobs' },
      ],
    },
    {
      title: 'Database',
      skills: [{ name: 'MongoDB', icon: <SiMongodb className='text-green-500' /> }, { name: 'Mongoose' }],
    },
    {
      title: 'CMS & Tools',
      skills: [
        { name: 'Sanity CMS', icon: <SiSanity className='text-pink-500' /> },
        { name: 'Git', icon: <FaGitAlt className='text-orange-600' /> },
        { name: 'GitHub', icon: <FaGithub className='text-gray-600 dark:text-gray-300' /> },
        { name: 'Gemini AI' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS Lambda', icon: <FaAws className='text-orange-500' /> },
        { name: 'AWS SQS', icon: <FaAws className='text-orange-500' /> },
        { name: 'AWS SNS', icon: <FaAws className='text-orange-500' /> },
        { name: 'AWS Athena', icon: <FaAws className='text-orange-500' /> },
        { name: 'AWS S3', icon: <FaAws className='text-orange-500' /> },
      ],
    },
  ];

  return (
    <section id='skills' className='section-container bg-gray-50/50 dark:bg-gray-900/30'>
      <h2 className='section-title text-center'>Skills</h2>
      <p className='section-subtitle text-center'>Technologies and tools I work with</p>

      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className='card animate-slide-up'
            style={{ animationDelay: `${categoryIndex * 0.08}s` }}
          >
            <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-50 mb-4 flex items-center gap-2'>
              <span className='w-1 h-4 rounded-full bg-primary-500' />
              {category.title}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className='inline-flex items-center gap-1.5 bg-gray-50 dark:bg-gray-800/60 px-3 py-1.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800/40 transition-colors'
                >
                  {skill.icon && <span className='text-base'>{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
