import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-teal-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Master of Computer Application
                  </h3>
                  <p className="text-teal-600 font-semibold text-lg">D.Y.P. University Talsande</p>
                  <p className="text-slate-600">Currently Pursuing</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Advancing my expertise in computer applications and software development,
                focusing on modern development practices, cloud computing, and DevOps methodologies.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-cyan-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-cyan-600 font-semibold text-lg">Shivaji University</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-slate-600">CGPA:</span>
                    <span className="text-2xl font-bold text-teal-600">9.04</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Built a strong foundation in computer science fundamentals, including data structures,
                algorithms, software engineering principles, and web development technologies.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
            <p className="text-lg text-teal-50 max-w-3xl mx-auto">
              Maintained exceptional academic performance while gaining practical industry experience,
              demonstrating strong commitment to both theoretical knowledge and real-world application of skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
