import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg-image.png';
import heroStd from '../assets/hero-student.png';
import heroAi from '../assets/hero-students-Ai.jpg';

const SectionHeading = ({ subtitle, title, centered = true, light = false }) => (
  <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-12`}>
    {subtitle && (
      <p className={`text-sm font-bold tracking-[0.2em] uppercase mb-3 ${light ? 'text-white/60' : 'text-accent-500'}`}>
        {subtitle}
      </p>
    )}
    <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight ${light ? 'text-white' : 'text-primary-500'}`}>
      {title}
    </h2>
  </div>
);

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "ec6bb7b1-37ab-4ace-a3f8-ff1c746a4690",
          email: email,
          subject: "New Quick Inquiry from Home Page",
          from_name: "Standard Coaching Academy Website",
          message: `Quick inquiry request from: ${email}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const programs = [
    {
      title: 'FSc Tuition',
      description: 'Comprehensive FSc Part-I & Part-II preparation with concept clarity and exam-focused teaching.',
      image: '👨‍🔬'
    },
    {
      title: 'ETEA / NMDCAT / NUMS',
      description: 'Result-oriented entry test preparation with regular testing, analytics, and expert guidance.',
      image: '🩺'
    },
    {
      title: '9th & 10th Classes',
      description: 'Strong academic foundation for board examinations with disciplined learning environment.',
      image: '📚'
    },
  ];

  const features = [
    {
      title: "Concept-Based Teaching",
      description:
        "Each topic is taught with a focus on understanding core concepts, helping students build a strong academic foundation."
    },
    {
      title: "Qualified & Experienced Faculty",
      description:
        "Our educators are subject experts who emphasize clarity, discipline, and academic excellence."
    },
    {
      title: "Structured Academic Curriculum",
      description:
        "Courses are designed according to a well-planned syllabus that aligns with academic standards and examinations."
    },

  ];
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Hero Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 via-primary-500/70 to-transparent z-10"></div>
          <img
            src={heroBg}
            alt="Academy Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20 pt-20 pb-32">
          <div className="max-w-5xl animate-fade-in">
            <p className="text-white/90 font-bold tracking-[0.4em] uppercase mb-8 flex items-center space-x-4">
              <span className="w-16 h-1 bg-accent-500"></span>
              <span className="text-sm md:text-base font-heading">Empowering Academic Excellence</span>
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl font-heading">
              Shape Your <br />
              <span className="text-accent-500 italic relative inline-block">
                Future.
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent-500/20 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed font-sans font-medium">
              Standard Coaching Academy provides a strong, concept-based education for classes 9 to 12 along with focused MDCAT and ETEA and Related Courses.            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link
                to="/contact#admission-form"
                className="btn-accent py-5 px-12 text-base md:text-lg font-bold font-sans tracking-wider shadow-2xl shadow-accent-500/40 transform hover:-translate-y-1 transition-all duration-300 rounded-full text-center min-w-[280px] antialiased"
              >
                Apply for Admission
              </Link>
              <Link
                to="/about"
                className="py-5 px-12 text-base md:text-lg font-bold font-sans tracking-wider text-white border-2 border-white/20 bg-white/5 backdrop-blur-xl rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-black/20 text-center min-w-[280px] antialiased"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO GRID (DARK) ================= */}
      <section className="bg-primary-500 py-20 border-b border-white/5 font-sans">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                👨‍🏫
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Expert Faculty</h3>
                <p className="text-white/60 text-sm">Learn from the most experienced and dedicated academic professionals.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                🏆
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Proven Results</h3>
                <p className="text-white/60 text-sm">Join the academy with a consistent track record of top positions.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                📑
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Modern Learning</h3>
                <p className="text-white/60 text-sm">Smart tools and personalized attention for every student.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading subtitle="Explore Programs" title="Find Your Perfect Course" />

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div key={i} className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{program.image}</div>
                <h3 className="text-2xl font-bold text-primary-500 mb-4">{program.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{program.description}</p>
                <Link to="/courses" className="text-accent-500 font-bold hover:text-accent-600 inline-flex items-center space-x-2">
                  <span>See more...</span>
                  <span className="text-xl">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroAi}
                  alt="Education"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
            </div>

            <div>
              <SectionHeading subtitle="Features of Our Courses" title="Why Choose Us?" centered={false} />
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                We focus on delivering quality education through clear explanations,
                concept-based learning, and a strong academic structure that supports
                students at every stage of their education..
              </p>

              <div className="space-y-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 rounded-full border-2 border-accent-500 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all shrink-0 mt-1">
                      <span className="font-black">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary-500 mb-2">{feature.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA / NEWSLETTER ================= */}
      <section className="py-24 bg-[#0b1121] relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px] -z-0"></div>

        <div className="container-custom relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-accent-500"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary-500/10 rounded-full mb-6 border border-primary-500/20">
                  <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest font-heading">Quick Enrollment</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] font-heading">
                  Ready to Shape <br />
                  <span className="text-accent-500 italic">Your Future?</span>
                </h2>
                <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-lg font-sans">
                  Join hundreds of successful students and start your journey towards academic excellence today.
                </p>
              </div>

              <div className="w-full lg:w-auto">
                {submitStatus === 'success' ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[2rem] text-center animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-sans">Inquiry Sent!</h3>
                    <p className="text-emerald-400/80 font-medium font-sans">We'll get back to you shortly.</p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="mt-6 text-white/40 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="relative max-w-md mx-auto lg:mx-0">
                    <div className="flex flex-col space-y-4">
                      <div className="relative group/input">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email Address"
                          required
                          className="w-full lg:w-[400px] px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white/10 transition-all duration-300 font-sans font-medium text-lg antialiased"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-5 rounded-2xl font-bold font-sans tracking-wider text-lg antialiased transition-all duration-300 transform shadow-xl shadow-accent-500/20 ${isSubmitting
                            ? 'bg-slate-700 text-slate-400 cursor-not-allowed translate-y-0 shadow-none'
                            : 'bg-accent-500 text-white hover:bg-accent-600 hover:-translate-y-1 active:scale-95'
                          }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : 'Send Inquiry Now'}
                      </button>
                    </div>
                    {submitStatus === 'error' && (
                      <p className="absolute -bottom-8 left-0 text-rose-400 text-sm font-bold animate-shake font-sans">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
