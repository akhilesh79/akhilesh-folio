import { FaGraduationCap, FaAward } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-950">
      <h2 className="section-title text-center">Education & Certifications</h2>
      <p className="section-subtitle text-center">
        Academic background and professional certifications
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Education */}
        <div className="card animate-slide-up">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <FaGraduationCap className="text-sm text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-50 mb-2">
                B.Tech in Computer Science
              </h3>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-300 mb-2">
                DR. AMBEDKAR INSTITUTE OF TECHNOLOGY FOR HANDICAPPED, KANPUR
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Graduated 2021 | <strong>83.20%</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <FaAward className="text-sm text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-50 mb-4">
                LinkedIn Skill Assessments
              </h3>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'ReactJs', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-200 rounded-lg font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
