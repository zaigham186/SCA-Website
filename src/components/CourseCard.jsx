import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, duration, mode, batch }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-100 p-8
                    transition-all duration-500 hover:-translate-y-2
                    hover:shadow-2xl hover:shadow-slate-200/60 flex flex-col h-full">

      {/* Top Row */}
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center
                        text-primary-600 transition-all duration-500
                        group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 shadow-sm">
          {/* Graduation Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.055
                 12.083 12.083 0 015.84 10.578L12 14z" />
          </svg>
        </div>

        {batch && (
          <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full
            border backdrop-blur-sm
            ${batch.includes('Evening')
              ? 'bg-indigo-50/50 text-indigo-700 border-indigo-100'
              : 'bg-emerald-50/50 text-emerald-700 border-emerald-100'
            }`}>
            {batch.includes('Evening') ? 'Evening Batch' : 'Morning Batch'}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-black text-slate-900 mb-3
                       group-hover:text-primary-600 transition-colors tracking-tight leading-tight">
          {title}
        </h3>

        <p className="text-slate-500 text-[15px] leading-relaxed mb-8 line-clamp-3 font-medium">
          {description}
        </p>
      </div>

      {/* Meta Info */}
      <div className="space-y-4 pt-6 border-t border-slate-50 mb-10">
        {duration && (
          <div className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center
                            group-hover:bg-primary-50 transition-colors">
              <span className="text-lg">⏱️</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                Duration
              </p>
              <p className="text-sm font-bold text-slate-700">{duration}</p>
            </div>
          </div>
        )}

        {mode && (
          <div className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center
                            group-hover:bg-primary-50 transition-colors">
              <span className="text-lg">📘</span>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">
                Study Mode
              </p>
              <p className="text-sm font-bold text-slate-700">{mode}</p>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <Link
        to="/contact"
        className="w-full rounded-2xl bg-primary-600 text-white font-black py-4
                   flex items-center justify-center gap-2
                   transition-all duration-300
                   shadow-xl shadow-primary-900/10
                   hover:bg-primary-700 hover:shadow-2xl hover:shadow-primary-900/20
                   hover:-translate-y-0.5 active:scale-[0.98]">
        Enroll Now
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>

      {/* Hover Light Effect */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-200/50
                      group-hover:ring-primary-500/30 transition-all pointer-events-none" />

      {/* Premium Gradient Background (Subtle) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50/30 rounded-full blur-3xl -z-10 
                      group-hover:bg-primary-100/50 transition-colors duration-500" />
    </div>
  );
};

export default CourseCard;
