import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Facebook',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-[#0b1121] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px] -z-0"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

                    {/* BRANDING SECTION */}
                    <div className="lg:col-span-5 flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center space-x-2 mb-8 group">
                            <span className="text-4xl font-black text-white tracking-tighter font-heading italic">
                                STANDARD<span className="text-accent-500 text-5xl">.</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-10 max-w-sm font-sans font-medium text-base text-center md:text-left antialiased">
                            Standard Coaching Academy is dedicated to empowering minds and shaping futures through academic excellence and disciplined mentorship.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COURSES SECTION */}
                    <div className="lg:col-span-3 text-center md:text-left">
                        <h3 className="text-white text-lg font-bold mb-8 font-sans tracking-tight">Popular Courses</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'FSc Pre-Medical', id: 'pre-medical' },
                                { name: 'FSc Pre-Engineering', id: 'pre-engineering' },
                                { name: 'ETEA Entry Test', id: 'etea' },
                                { name: '9th & 10th (Matric)', id: 'matric' },
                                { name: 'NMDCAT Specialist', id: 'nmdcat' },
                            ].map((course) => (
                                <li key={course.name}>
                                    <Link
                                        to={`/courses#${course.id}`}
                                        className="text-slate-400 hover:text-accent-500 transition-colors font-medium text-base font-sans"
                                    >
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT SECTION */}
                    <div className="lg:col-span-4 text-center md:text-left">
                        <h3 className="text-white text-lg font-bold mb-8 font-sans tracking-tight">Get In Touch</h3>
                        <ul className="space-y-6 font-sans">
                            <li className="flex flex-col space-y-1">
                                <span className="text-primary-400 font-bold uppercase text-[11px] tracking-wider">Our Location</span>
                                <span className="text-slate-300 font-medium text-base antialiased">Near Islamia College BRT Stop, opposite Nimra Masjid, Peshawar</span>
                            </li>
                            <li className="flex flex-col space-y-1">
                                <span className="text-primary-400 font-bold uppercase text-[11px] tracking-wider">Direct Inquiry</span>
                                <span className="text-white font-black text-2xl tracking-tighter antialiased">+92 336 9124670</span>
                            </li>
                            <li className="flex flex-col space-y-1">
                                <span className="text-primary-400 font-bold uppercase text-[11px] tracking-wider">Support Email</span>
                                <span className="text-slate-300 font-medium text-base antialiased">azmat50917@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500 font-sans">
                    <p className="mb-4 md:mb-0">Copyright &copy; {currentYear} Standard Academy <span className="mx-2 text-slate-800">|</span> All Rights Reserved</p>
                    <div className="flex space-x-6">
                        <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link to="/courses" className="hover:text-white transition-colors">Our Courses</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
