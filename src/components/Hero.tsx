import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full mx-auto flex items-center justify-center text-5xl font-bold shadow-2xl">
              SS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
            Shahrukh Sanadi
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Full Stack Developer & DevOps Enthusiast
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
            <MapPin className="w-5 h-5" />
            <span>Kolhapur, India</span>
          </div>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate software professional with 1.5 years of hands-on experience in Full Stack Development,
            specializing in building scalable applications and implementing DevOps practices.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold border border-slate-700 hover:bg-slate-700 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-12">
            <a href="https://github.com/Shahrukh4034/" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shahrukh-sanadi-a0111a253/" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="shahrukhsanadi9999@gmail.com " className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 hover:scale-110 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
