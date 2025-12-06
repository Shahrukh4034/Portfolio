import { Cloud, Code2, Database, GitMerge, Layout, Server } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: GitMerge,
      title: "DevOps Tools",
      color: "from-orange-400 to-red-500",
      skills: ["Git", "Jenkins", "CI/CD", "Shell Scripting"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      color: "from-blue-400 to-cyan-500",
      skills: ["AWS Cloud", "Linux OS", "Docker"]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "from-green-400 to-emerald-500",
      skills: [".NET Core", "REST APIs", "ASP.NET MVC", "Java"]
    },
    {
      icon: Database,
      title: "Databases",
      color: "from-teal-400 to-cyan-600",
      skills: ["MSSQL", "MySQL", "Stored Procedures"]
    },
    {
      icon: Layout,
      title: "Frontend Development",
      color: "from-pink-400 to-rose-500",
      skills: ["Vue.js", "Angular", "Quasar", "HTML/CSS"]
    },
    {
      icon: Code2,
      title: "Programming",
      color: "from-violet-400 to-purple-500",
      skills: ["C#", "JavaScript", "TypeScript", "SQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg">
              Comprehensive skill set built through practical, hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6`}>
                  <category.icon className="w-12 h-12 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 bg-slate-50 rounded-lg p-3 hover:bg-slate-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"></div>
                        <span className="text-slate-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Practical Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-teal-400 font-semibold mb-3 text-lg">Real-World Applications</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Developed ERP modules with .NET Core and Vue.js</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Optimized REST APIs for financial applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Managed collaborative development with Git workflows</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-teal-400 font-semibold mb-3 text-lg">Performance Optimization</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Enhanced SQL database performance significantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Implemented CI/CD concepts for automated deployments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    <span>Integrated third-party APIs like QuickBooks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
