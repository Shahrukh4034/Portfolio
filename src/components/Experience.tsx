import { Briefcase, Code, Database, GitBranch, Zap } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    {
      icon: Code,
      title: "ERP System Development",
      description: "Developed and configured multi-module ERP systems using .NET Core and Vue.js"
    },
    {
      icon: Zap,
      title: "API Development",
      description: "Created and optimized REST APIs for financial and business applications, including QuickBooks API integration"
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Managed version control using Git, handling branching, merging, and team collaboration"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Improved SQL performance by optimizing stored procedures and complex queries"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-l-4 border-teal-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Full Stack Developer & Data Analyst</h3>
                <p className="text-teal-600 font-semibold text-lg mb-1">Vsky Solutions</p>
                <p className="text-slate-600">Internship • 1.5 Years</p>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-8">
              During my tenure at Vsky Solutions, I gained comprehensive hands-on experience in full stack development,
              working on enterprise-level ERP systems. This experience strengthened my fundamentals and built a strong
              foundation for DevOps concepts like automation, CI/CD, and cloud deployments.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <item.icon className="w-10 h-10 text-teal-600 mb-3" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">1.5+</div>
                <div className="text-teal-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Multi</div>
                <div className="text-teal-100">Module ERP Systems</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-teal-100">Project Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
