import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiVite } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
  { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10" data-aos="fade-up">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-base font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
