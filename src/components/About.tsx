import { User, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
                <User className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Journey</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  I am a passionate and dedicated software professional with a strong interest in DevOps and
                  Full Stack Development. With 1.5 years of hands-on experience at Vsky Solutions, I have
                  developed expertise in building scalable enterprise applications and optimizing development workflows.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  My journey in software development has equipped me with a comprehensive understanding of both
                  frontend and backend technologies, along with modern DevOps practices that bridge the gap
                  between development and operations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <Target className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Key Strengths</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Strong problem-solving and troubleshooting skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Quick learning and hands-on approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Deep understanding of application dependencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Team collaboration and effective communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Efficient task management and quality delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Mindset</h3>
                <p className="text-slate-700">
                  I continuously work on improving my craft, balancing attention to detail with timely delivery.
                  I believe in learning from every project and staying updated with the latest technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
