import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const contactMethods = [
  {
    icon: <FaEnvelope className='text-lg' />,
    label: 'Email',
    value: 'makmishra.99@gmail.com',
    href: 'mailto:makmishra.99@gmail.com',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: <FaPhone className='text-lg' />,
    label: 'Phone',
    value: '+91 8765120746',
    href: 'tel:+918765120746',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: <FaGithub className='text-lg' />,
    label: 'GitHub',
    value: 'akhilesh79',
    href: 'https://github.com/akhilesh79',
    color: 'text-gray-700 dark:text-gray-300',
    bgColor: 'bg-gray-50 dark:bg-gray-800/50',
  },
  {
    icon: <FaLinkedin className='text-lg' />,
    label: 'LinkedIn',
    value: 'akhilesh-kumar-mishra',
    href: 'https://linkedin.com/in/akhilesh-kumar-mishra',
    color: 'text-blue-700 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
];

const Contact = () => {
  return (
    <section id='contact' className='section-container bg-gray-50/50 dark:bg-gray-900/30'>
      <h2 className='section-title text-center'>Get In Touch</h2>
      <p className='section-subtitle text-center'>Open to new projects, creative ideas, and exciting opportunities.</p>

      <div className='max-w-3xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className='card group flex items-center gap-4 animate-slide-up'
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className={`${method.bgColor} ${method.color} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                {method.icon}
              </div>
              <div className='min-w-0'>
                <p className='text-xs font-medium text-gray-400 dark:text-gray-500 mb-0.5'>{method.label}</p>
                <p className='text-sm font-semibold text-gray-900 dark:text-gray-50 truncate'>{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className='text-center'>
          <p className='text-sm text-gray-500 dark:text-gray-400'>Let's build something great together.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className='mt-16 pt-8 border-t border-gray-200/60 dark:border-gray-800/40 text-center'>
        <p className='text-sm text-gray-400 dark:text-gray-500'>© {new Date().getFullYear()} Akhilesh Kumar Mishra</p>
        <p className='mt-1 text-xs text-gray-300 dark:text-gray-600'>Built with React, TypeScript & Tailwind CSS</p>
      </footer>
    </section>
  );
};

export default Contact;
