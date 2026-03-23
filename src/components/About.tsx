import { FaCode, FaServer, FaCloud, FaUsers } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCode className='text-lg' />,
    title: 'Frontend',
    desc: 'React, TypeScript, Tailwind — pixel-perfect UIs with great DX',
  },
  {
    icon: <FaServer className='text-lg' />,
    title: 'Backend',
    desc: 'Node.js, Express, MongoDB — scalable APIs & real-time systems',
  },
  {
    icon: <FaCloud className='text-lg' />,
    title: 'Cloud',
    desc: 'AWS Lambda, SQS, S3, SNS — serverless & event-driven architectures',
  },
  {
    icon: <FaUsers className='text-lg' />,
    title: 'Leadership',
    desc: 'Mentoring juniors, code reviews, and end-to-end feature ownership',
  },
];

const About = () => {
  return (
    <section id='about' className='section-container'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='section-title text-center'>About Me</h2>
        <p className='section-subtitle text-center'>Get to know more about my background and passion</p>

        <div className='grid md:grid-cols-2 gap-12 items-start'>
          {/* Text */}
          <div className='space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed'>
            <p>
              I'm a <strong className='text-gray-900 dark:text-gray-50'>Software Engineer</strong> specializing in Full
              Stack development with the MERN stack. With over 3 years of experience, I've built scalable web
              applications, real-time systems, and AI-powered solutions.
            </p>
            <p>
              Currently at <strong className='text-gray-900 dark:text-gray-50'>UPRIO</strong>, I lead end-to-end
              development of complex features including parent dashboards, real-time analytics engines, and AI-powered
              skill suggestion systems.
            </p>
            <p>
              I believe in writing clean, maintainable code and I'm always eager to take on challenging projects that
              push the boundaries of what's possible.
            </p>
          </div>

          {/* Highlight cards */}
          <div className='grid grid-cols-2 gap-4'>
            {highlights.map((item) => (
              <div key={item.title} className='card group text-center p-4'>
                <div className='inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-3 group-hover:scale-110 transition-transform'>
                  {item.icon}
                </div>
                <h3 className='font-semibold text-gray-900 dark:text-gray-50 text-sm mb-1'>{item.title}</h3>
                <p className='text-xs text-gray-500 dark:text-gray-400 leading-snug'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
