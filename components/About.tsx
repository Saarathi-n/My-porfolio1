
import React from 'react';
import SkillBadge from './SkillBadge';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'HTML5 & CSS3', 'GraphQL', 'REST APIs', 'Git & GitHub', 
    'Jest', 'Figma', 'UI/UX Design'
  ];

  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        About Me
      </h2>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <img
            src="https://picsum.photos/seed/saarathi/400/400"
            alt="Saarathi"
            className="rounded-full w-64 h-64 mx-auto md:w-full md:h-auto md:rounded-lg shadow-2xl shadow-slate-800"
          />
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-slate-400 mb-6 leading-relaxed">
            I'm a dedicated Frontend Engineer with a knack for creating engaging and responsive web experiences. With a strong foundation in React and modern web technologies, I thrive on solving complex problems and turning innovative ideas into reality. My goal is to always write clean, scalable, and maintainable code while keeping a keen eye on user experience and design aesthetics.
          </p>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.
          </p>
          <h3 className="text-2xl font-semibold text-white mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
