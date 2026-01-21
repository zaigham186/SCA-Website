import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import heroImg from '../assets/hero-students-Ai.jpg';

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

const Courses = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const courses = [
    {
      id: 'matric',
      title: '9th & 10th (Matric)',
      description:
        'Complete board-oriented preparation with strong conceptual clarity, regular testing, and disciplined study environment.',
      duration: '1 Academic Year',
      mode: 'On-Campus',
      batch: 'Morning & Evening Batches',
    },
    {
      id: 'pre-medical',
      title: 'FSc Pre-Medical',
      description:
        'Biology, Chemistry, and Physics preparation aligned with board exams and medical entry test requirements.',
      duration: '2 Years',
      mode: 'On-Campus',
      batch: 'Morning & Evening Batches',
    },
    {
      id: 'pre-engineering',
      title: 'FSc Pre-Engineering',
      description:
        'Mathematics, Physics, and Chemistry with exam-focused teaching and problem-solving mastery.',
      duration: '2 Years',
      mode: 'On-Campus',
      batch: 'Morning & Evening Batches',
    },
    {
      id: 'etea',
      title: 'ETEA Entry Test',
      description:
        'Structured preparation for engineering and medical colleges with MCQs practice and performance analysis.',
      duration: '4–6 Months',
      mode: 'On-Campus',
      batch: 'Evening Batches',
    },
    {
      id: 'nmdcat',
      title: 'NMDCAT',
      description:
        'Comprehensive NMDCAT preparation including Biology, Chemistry, Physics, and critical thinking.',
      duration: '4–6 Months',
      mode: 'On-Campus',
      batch: 'Evening Batches',
    },
    {
      id: 'nums',
      title: 'NUMS Entry Test',
      description:
        'Focused preparation for NUMS with exam-based syllabus coverage and test simulations.',
      duration: '4 Months',
      mode: 'On-Campus',
      batch: 'Evening Batches',
    },
    {
      id: 'math-special',
      title: 'Mathematics (Special)',
      description:
        'Advanced mathematics classes for board exams and competitive tests.',
      duration: '6 Months',
      mode: 'Online & On-Campus',
      batch: 'Morning & Evening',
    },
    {
      id: 'bio-medical',
      title: 'Biology (Medical Focus)',
      description:
        'Concept-driven biology classes covering botany, zoology, and human physiology.',
      duration: '6 Months',
      mode: 'On-Campus',
      batch: 'Morning & Evening',
    },
  ];

  return (
    <main>
      {/* ================= HERO ================= */}
      <section
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-primary-500/85"></div>

        {/* Decorative Shape (kept) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center space-x-2 px-6 py-2 bg-white/10 rounded-full mb-8 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em] font-heading">Academic Excellence</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter font-heading">
              Specialized <br />
              <span className="text-accent-500 italic">Learning</span> Paths.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans font-medium">
              We offer structured, exam-focused academic programs designed to build strong concepts, confidence, and consistent success.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="section-padding bg-slate-50 relative">
        <div className="container-custom">
          <SectionHeading
            subtitle="What We Offer"
            title="Comprehensive Academic Programs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} id={course.id}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BATCH INFO ================= */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <SectionHeading
            subtitle="Flexible Scheduling"
            title="Batch Timings & Availability"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                type: 'morning',
                title: 'Morning Batch',
                time: '8:00 AM – 12:00 PM',
                desc: 'Ideal for students looking for early intensive study sessions.',
              },
              {
                type: 'evening',
                title: 'Evening Batch',
                time: '4:00 PM – 8:00 PM',
                desc: 'Perfect for board students and entry test aspirants.',
              },
              {
                type: 'weekend',
                title: 'Weekend Batch',
                time: 'Saturday & Sunday',
                desc: 'Special sessions for conceptual doubt clearing and tests.',
              },
            ].map((batch, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 rounded-3xl p-8 text-center
                     transition-all duration-500 hover:-translate-y-2
                     hover:shadow-2xl hover:shadow-slate-200/60"
              >

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
                          bg-primary-50 text-primary-600
                          group-hover:bg-primary-600 group-hover:text-white
                          transition-all duration-500">

                  {batch.type === 'morning' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v1m0 16v1m8.66-11.66l-.7.7M5.34 18.66l-.7.7M21 12h-1M4 12H3
                     m15.66 6.66l-.7-.7M5.34 5.34l-.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z" />
                    </svg>
                  )}

                  {batch.type === 'evening' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1111.21 3
                     7 7 0 0021 12.79z" />
                    </svg>
                  )}

                  {batch.type === 'weekend' && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M8 7V3m8 4V3M5 11h14M5 19h14
                     M6 7h12a1 1 0 011 1v12a1 1 0 01-1 1H6
                     a1 1 0 01-1-1V8a1 1 0 011-1z" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-2
                         group-hover:text-primary-600 transition-colors">
                  {batch.title}
                </h3>

                {/* Time */}
                <p className="text-xs font-extrabold text-primary-600 uppercase tracking-widest mb-4">
                  {batch.time}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {batch.desc}
                </p>

                {/* Hover Ring */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent
                          group-hover:ring-primary-200 transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
        <div className="container-custom text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-white">
            Start Your Academic Journey <br /> With Industry Experts
          </h2>

          <p className="text-slate-400 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Join Standard Coaching Academy and experience a disciplined, modern, and result-oriented education system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-10 py-4 bg-primary-600 text-white font-extrabold rounded-2xl hover:bg-primary-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary-900/40">
              Apply for Admission
            </Link>
            <Link to="/contact" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all">
              Consult with Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Courses;
