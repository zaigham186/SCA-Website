import React from 'react';
import FacultyCard from '../components/FacultyCard';
import heroStd from '../assets/hero-student.png';
import MathImg from '../assets/pakii-math.jpg';
import PhyImg from '../assets/Pakistan_phys.jpg';
import ChemImg from '../assets/hammad-chem.jpg';
import EngImg from '../assets/pakistani-english-.jpg';


const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-16`}>
    <div className={`flex items-center ${centered ? 'justify-center' : ''} space-x-2 mb-3`}>
      <span className="w-8 h-0.5 bg-primary-600 rounded-full"></span>
      <p className="text-sm font-bold tracking-[0.2em] text-primary-600 uppercase">
        {subtitle}
      </p>
    </div>
    <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
      {title}
    </h2>
  </div>
);

const About = () => {
  const faculty = [
    {
      name: 'Dr. Ahmed Khan',
      subject: 'Mathematics',
      experience: '15+ years of teaching & academic leadership',
      image: MathImg,
    },
    {
      name: 'Prof. Sarah Ali',
      subject: 'Physics',
      experience: '12+ years of concept-based instruction',
      image: PhyImg,
    },
    {
      name: 'Mr. Hassan Raza',
      subject: 'Chemistry',
      experience: '10+ years of board & entry-test preparation',
      image: ChemImg,
    },
    {
      name: 'Ms. Fatima Malik',
      subject: 'English',
      experience: '8+ years of language & communication training',
      image: EngImg,
    },
  ];


  return (
    <main>
      {/* ================= PAGE HERO ================= */}
      <section
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroStd})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-primary-500/85"></div>

        {/* Decorative Shape (kept) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">

            <div className="inline-flex items-center justify-center space-x-2 px-6 py-2 bg-white/10 rounded-full mb-8 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em] font-heading">
                Our Legacy & Mission
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter font-heading">
              Empowering Minds, <br />
              <span className="text-accent-500 italic">Shaping</span> Futures.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans font-medium">
              Standard Coaching Academy is a beacon of academic excellence, dedicated to guiding students toward their highest potential through disciplined mentorship.
            </p>

          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 p-4 bg-slate-50 rounded-[3rem] shadow-inner">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200">
                  <img
                    src={heroStd}
                    alt="Standard Coaching Academy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Stats */}
              <div className="absolute -bottom-10 -right-8 z-20 bg-primary-600 p-8 rounded-3xl shadow-xl text-white">
                <p className="text-3xl font-extrabold mb-1">15+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-100">
                  Years of Legacy
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <SectionHeading
                subtitle="Our Journey"
                title="A Legacy of Excellence in Education"
                centered={false}
              />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Standard Coaching Academy was founded with a clear mission:
                  to deliver structured, result-oriented education that empowers
                  students to achieve their highest academic potential.
                </p>
                <p>
                  Over the years, we have built a reputation for discipline,
                  conceptual clarity, and consistent results in board and
                  competitive examinations.
                </p>
                <p>
                  Our approach combines modern teaching techniques with
                  personalized mentorship, ensuring every student receives
                  the guidance they need to excel in their chosen career path.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-3xl font-extrabold text-slate-900 mb-1">5K+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">Students Mentored</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-3xl font-extrabold text-slate-900 mb-1">95%</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Core Principles"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Result-Oriented',
                desc: 'Focused strategies aligned with academic outcomes and success.',
              },
              {
                icon: '📚',
                title: 'Concept Clarity',
                desc: 'Strong foundations through deep understanding and practice.',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Faculty',
                desc: 'Highly qualified & experienced educators with proven results.',
              },
              {
                icon: '🤝',
                title: 'Mentorship',
                desc: 'Personal mentoring & individual attention to every learner.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-[2.5rem] p-10 text-center shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACULTY ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Strength"
            title="Meet Our Expert Faculty"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>


    </main>
  );
};

export default About;
