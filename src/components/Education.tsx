import { FaGraduationCap, FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    <section id='education' className='section-container'>
      <h2 className='section-title text-center'>Education</h2>
      <p className='section-subtitle text-center'>Academic background and certifications</p>

      <div className='max-w-3xl mx-auto space-y-5'>
        {/* Education */}
        <div className='card animate-slide-up'>
          <div className='flex items-start gap-4'>
            <div className='flex-shrink-0 w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center'>
              <FaGraduationCap className='text-lg text-primary-600 dark:text-primary-400' />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 dark:text-gray-50 mb-1'>B.Tech in Computer Science</h3>
              <p className='text-sm font-medium text-primary-600 dark:text-primary-400 mb-1'>
                Dr. Ambedkar Institute of Technology, Kanpur
              </p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Graduated 2021 &middot; <span className='font-semibold text-gray-700 dark:text-gray-200'>83.20%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className='card animate-slide-up' style={{ animationDelay: '0.1s' }}>
          <div className='flex items-start gap-4'>
            <div className='flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center'>
              <FaAward className='text-lg text-amber-600 dark:text-amber-400' />
            </div>
            <div className='flex-1'>
              <h3 className='text-lg font-bold text-gray-900 dark:text-gray-50 mb-3'>LinkedIn Skill Assessments</h3>
              <div className='flex flex-wrap gap-2'>
                {['JavaScript', 'React.js', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1.5 text-sm font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg border border-primary-100 dark:border-primary-800/30'
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
  );
};

export default Education;
