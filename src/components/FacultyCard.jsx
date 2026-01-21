import React from 'react';

const FacultyCard = ({ name, subject, experience, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      
      {/* Image Section */}
      <div className="relative w-32 h-32 mb-6">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-extrabold rounded-xl">
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>

      {/* Subject */}
      <p className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-4">{subject}</p>

      {/* Experience / Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {experience}
      </p>
    </div>
  );
};

export default FacultyCard;
