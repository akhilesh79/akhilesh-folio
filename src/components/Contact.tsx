import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import IconLink from './IconLink'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-sm" />,
      label: 'Email',
      value: 'makmishra.99@gmail.com',
      href: 'mailto:makmishra.99@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <FaPhone className="text-sm" />,
      label: 'Phone',
      value: '+91 8765120746',
      href: 'tel:+918765120746',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <FaGithub className="text-sm" />,
      label: 'GitHub',
      value: 'akhilesh79',
      href: 'https://github.com/akhilesh79',
      color: 'text-gray-800',
      bgColor: 'bg-gray-100',
    },
    {
      icon: <FaLinkedin className="text-sm" />,
      label: 'LinkedIn',
      value: 'akhilesh-kumar-mishra',
      href: 'https://linkedin.com/in/akhilesh-kumar-mishra',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100',
    },
  ]

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-950">
      <h2 className="section-title text-center">Get In Touch</h2>
      <p className="section-subtitle text-center">
        I'm always open to discussing new projects, creative ideas, or opportunities
        to be part of your visions.
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-2 mb-8">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card hover:scale-105 transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`${method.bgColor} ${method.color} p-4 rounded-lg`}
                >
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">{method.label}</p>
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-50">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-300">
        <p>
          © {new Date().getFullYear()} Akhilesh Kumar Mishra. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </footer>
    </section>
  )
}

export default Contact
