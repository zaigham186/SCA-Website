import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import heroBg from '../assets/hero-bg-image.png';

const Contact = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#admission-form') {
      const element = document.getElementById('admission-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Enter a valid phone number';

    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
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
            access_key: "ec6bb7b1-37ab-4ace-a3f8-ff1c746a4690", // USER: Replace with your key from web3forms.com
            ...formData,
            subject: `New Enrollment Inquiry from ${formData.fullName}`,
            from_name: "Standard Coaching Academy Website"
          })
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus('success');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            course: '',
            message: '',
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main>
      {/* ================= PAGE HERO ================= */}
      <section
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-primary-500/85"></div>

        {/* Decorative Shape (kept) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 z-0"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center space-x-2 px-6 py-2 bg-white/10 rounded-full mb-8 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-[0.2em] font-heading">Connect With Us</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter font-heading">
              Get In <span className="text-accent-500 italic">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mx-auto max-w-2xl font-sans font-medium">
              Have questions about admissions, courses, or schedules?
              Our team of dedicated advisors is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section-padding bg-slate-50 relative -mt-16 z-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* ================= FORM ================= */}
            <div id="admission-form" className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-8 md:p-12 border border-white/40 relative overflow-hidden group">
              {/* Subtle Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-600 to-accent-500"></div>

              <div className="mb-12 text-center lg:text-left relative">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                  Send Us a <span className="text-primary-600">Message</span>
                </h2>
                <div className="w-20 h-1.5 bg-primary-100 rounded-full mb-6 mx-auto lg:mx-0">
                  <div className="w-8 h-full bg-primary-600 rounded-full animate-bounce-horizontal"></div>
                </div>
                <p className="text-slate-500 font-medium text-lg">Complete the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative">

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com' },
                  ].map((field) => (
                    <div key={field.name} className="relative group/field">
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1 group-focus-within/field:text-primary-600 transition-colors">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-slate-900 font-bold bg-slate-50/50 backdrop-blur-sm
                          ${errors[field.name]
                            ? 'border-red-100 bg-red-50/20 focus:border-red-400 text-red-900 placeholder:text-red-300'
                            : 'border-slate-100 focus:border-primary-500 focus:bg-white focus:shadow-xl focus:shadow-primary-900/5'
                          }`}
                      />
                      {errors[field.name] && (
                        <p className="text-red-500 text-[10px] font-black uppercase mt-3 ml-2 tracking-widest flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group/field">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1 group-focus-within/field:text-primary-600 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 XXX XXXXXXX"
                      className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-slate-900 font-bold bg-slate-50/50 backdrop-blur-sm
                        ${errors.phone
                          ? 'border-red-100 bg-red-50/20 focus:border-red-400 text-red-900 placeholder:text-red-300'
                          : 'border-slate-100 focus:border-primary-500 focus:bg-white focus:shadow-xl focus:shadow-primary-900/5'
                        }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] font-black uppercase mt-3 ml-2 tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="relative group/field">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1 group-focus-within/field:text-primary-600 transition-colors">
                      Course Interest
                    </label>
                    <div className="relative">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-slate-900 font-bold appearance-none bg-slate-50/50 backdrop-blur-sm
                          ${errors.course
                            ? 'border-red-100 bg-red-50/20 focus:border-red-400 text-red-900'
                            : 'border-slate-100 focus:border-primary-500 focus:bg-white focus:shadow-xl focus:shadow-primary-900/5'
                          }`}
                      >
                        <option value="">Choose your course</option>
                        <option value="matric">9th & 10th (Matric)</option>
                        <option value="fsc-medical">FSc Pre-Medical</option>
                        <option value="fsc-engineering">FSc Pre-Engineering</option>
                        <option value="etea">ETEA Entry Test</option>
                        <option value="nmdcat">NMDCAT</option>
                        <option value="nums">NUMS</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within/field:text-primary-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    {errors.course && (
                      <p className="text-red-500 text-[10px] font-black uppercase mt-3 ml-2 tracking-widest flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        {errors.course}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="relative group/field">
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1 group-focus-within/field:text-primary-600 transition-colors">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your educational background and goals..."
                    className={`w-full px-6 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-slate-900 font-bold resize-none bg-slate-50/50 backdrop-blur-sm
                      ${errors.message
                        ? 'border-red-100 bg-red-50/20 focus:border-red-400 text-red-900 placeholder:text-red-300'
                        : 'border-slate-100 focus:border-primary-500 focus:bg-white focus:shadow-xl focus:shadow-primary-900/5'
                      }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[10px] font-black uppercase mt-3 ml-2 tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold animate-fade-in flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 animate-pulse">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    Message sent successfully! Our team will contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-sm font-bold animate-fade-in flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-black py-5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group/btn
                               ${isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed shadow-none'
                        : 'bg-primary-600 shadow-primary-900/30 hover:bg-primary-700 hover:shadow-primary-900/40 hover:-translate-y-1'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry Now
                        <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-slate-400 text-xs mt-6 font-bold tracking-wide uppercase">
                    We usually respond within 24 business hours
                  </p>
                </div>
              </form>
            </div>

            {/* ================= INFO ================= */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-10 border border-slate-100 overflow-hidden relative group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-50 rounded-full group-hover:scale-110 transition-transform duration-700"></div>

                <h2 className="text-3xl font-black text-slate-900 mb-10 relative tracking-tight">
                  Contact <span className="text-primary-600">Details</span>
                </h2>

                <div className="space-y-6 relative">
                  {[
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: 'Our Location',
                      text: 'Standard Coaching Academy Near Islamia College BRT Stop opposite Nimra Masjid, Peshawar, Pakistan',
                      color: 'bg-primary-50 text-primary-600'
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: 'Phone Support',
                      text: '+92 336 9124670',
                      color: 'bg-accent-50 text-accent-600'
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: 'Email Address',
                      text: 'azmat50917@gmail.com',
                      color: 'bg-indigo-50 text-indigo-600'
                    },
                    {
                      icon: (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: 'Office Hours',
                      text: 'Mon–Fri: 9 AM – 6 PM\nSat: 10 AM – 4 PM',
                      color: 'bg-slate-100 text-slate-700'
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/item border border-transparent hover:border-slate-100">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm ${item.color} group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-300`}>
                        {item.icon}
                      </div>
                      <div className="pt-1">
                        <h3 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-1">{item.title}</h3>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed whitespace-pre-line group-hover/item:text-slate-700 transition-colors">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 h-[300px] md:h-[450px] bg-slate-100 relative group border-4 border-white">
                {/* Real Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.922696686265!2d71.4750076!3d33.9945193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9114aec8f5e2f%3A0x344c8c8430d5ac9e!2sStandard%20Coaching%20Academy(S-CA)!5e0!3m2!1sen!2s!4v1768988950568!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>

                {/* Map Overlay Button (Appears on Hover) */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 scale-90 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-black text-xl mb-6 tracking-tight">Visit Us in Peshawar</h4>
                  <a
                    href="https://www.google.com/maps/place/Standard+Coaching+Academy(S-CA)/@33.9945193,71.4750076,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary-600 px-8 py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-primary-50 transition-colors flex items-center gap-2 group/btn2"
                  >
                    View Larger Map
                    <svg className="w-4 h-4 group-hover/btn2:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
