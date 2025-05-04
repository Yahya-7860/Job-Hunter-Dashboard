import React from "react";

const ResumeTips = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 p-6 sm:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto my-10 border border-gray-400 ">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        📝 Resume Tips for Freshers
      </h1>

      {/* What to Include */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-green-500">
          ✅ What to Include in Your Resume
        </h2>
        <ul className="list-decimal list-inside space-y-3">
          <li>
            <strong>Career Objective:</strong> A short 2–3 line statement about
            your career goal and how you can add value.
          </li>
          <li>
            <strong>Educational Details:</strong> Mention degrees, institutions,
            CGPA/percentage, and year of passing.
          </li>
          <li>
            <strong>Technical & Soft Skills:</strong> List relevant tools,
            technologies, and soft skills.
          </li>
          <li>
            <strong>Academic/Personal Projects:</strong> Add 1–2 strong projects
            with your role, tech stack, and impact.
          </li>
          <li>
            <strong>Internships & Trainings:</strong> Share learnings and tech
            used in your internships.
          </li>
          <li>
            <strong>Certifications:</strong> Highlight relevant online or
            offline certifications.
          </li>
          <li>
            <strong>Achievements (Optional):</strong> Include any recognitions,
            competitions, etc.
          </li>
          <li>
            <strong>Contact Details:</strong> Include email, phone, LinkedIn,
            GitHub/portfolio.
          </li>
        </ul>
      </section>

      {/* Pro Tip */}
      <div className="mt-6 text-center font-medium text-blue-700 dark:text-blue-300">
        📌 <strong>Pro Tip:</strong> Recruiters spend less than 10 seconds
        scanning your resume. Keep it sharp, relevant, and readable.
      </div>
    </div>
  );
};

export default ResumeTips;
