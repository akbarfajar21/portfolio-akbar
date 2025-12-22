import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiVite } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    level: 90,
    category: "Frontend",
    description: "Semantic markup & accessibility",
    color: "orange",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: 85,
    category: "Frontend",
    description: "Modern layouts & animations",
    color: "blue",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 88,
    category: "Frontend",
    description: "ES6+ & modern features",
    color: "yellow",
  },
  {
    name: "React",
    icon: <FaReact />,
    level: 92,
    category: "Frontend",
    description: "Hooks & component architecture",
    color: "cyan",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    level: 95,
    category: "Frontend",
    description: "Utility-first CSS framework",
    color: "sky",
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
    level: 80,
    category: "Backend",
    description: "Real-time database & auth",
    color: "green",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    level: 85,
    category: "Design",
    description: "UI/UX design & prototyping",
    color: "pink",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: 90,
    category: "Tools",
    description: "Version control & collaboration",
    color: "gray",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    level: 88,
    category: "Tools",
    description: "Fast build tool & dev server",
    color: "purple",
  },
];

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState(new Set());
  const categories = [...new Set(skills.map((skill) => skill.category))];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(
              (prev) => new Set([...prev, entry.target.dataset.skill])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll("[data-skill]");
    cards.forEach((card) => observer.observe(card));

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const getIconColor = (color) => {
    return (
      {
        orange: "text-orange-400",
        blue: "text-blue-400",
        yellow: "text-yellow-400",
        cyan: "text-cyan-400",
        sky: "text-sky-400",
        green: "text-green-400",
        pink: "text-pink-400",
        gray: "text-gray-400",
        purple: "text-purple-400",
      }[color] || "text-white"
    );
  };

  return (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    data-skill={skill.name}
                    className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`text-3xl ${getIconColor(skill.color)}`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{skill.name}</h4>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-400 mt-1">
                      {skill.level}%
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
