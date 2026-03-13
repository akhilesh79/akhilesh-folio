const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Get to know more about my background and passion
        </p>

        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
          <p>
            I'm a passionate Software Engineer specializing in Full Stack development
            with the MERN stack. With over 3 years of experience, I've worked on
            building scalable web applications, real-time systems, and AI-powered
            solutions.
          </p>
          <p>
            Currently working at <strong>UPRIO</strong>, I lead end-to-end development
            of complex features including parent dashboards, real-time analytics engines,
            and AI-powered skill suggestion systems. I'm experienced in working with
            AWS services, integrating CMS platforms, and building automated reporting
            systems.
          </p>
          <p>
            My expertise spans across frontend and backend development, with a strong
            focus on writing clean, maintainable, and scalable code. I'm always eager
            to learn new technologies and take on challenging projects that push the
            boundaries of what's possible.
          </p>
          <p>
            When I'm not coding, I enjoy mentoring junior developers, contributing to
            open-source projects, and staying updated with the latest industry trends
            and best practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
