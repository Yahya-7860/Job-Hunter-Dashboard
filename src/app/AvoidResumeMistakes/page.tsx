import React from "react";
import Image from "next/image";
const AvoidResumeMistakes = () => {
  return (
    <div className="flex justify-center">
      <div className=" dark:bg-neutral-900 text-gray-800 dark:text-gray-100 p-6 sm:p-10 rounded-2xl shadow-lg max-w-4xl my-10 border border-gray-400 mx-2">
        {/* Mistakes to Avoid */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400">
            ❌ Common Mistakes to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              ❗ Spelling and grammar errors : Always proofread carefully.
            </li>
            <li>❗ Too lengthy : 1-page resume is ideal for freshers.</li>
            <li>
              ❗ <strong>Including photos : </strong>Recruiters prefer resume
              which doesn't have photos.
            </li>
            <Image
              src="/images/photoResume.jpg"
              alt="resume"
              width={500}
              height={500}
            />
            <li>
              ❗ <strong>Colorful Resume : </strong>Colorful resume for a
              technical role is unprofessional.
            </li>
            <Image
              src="/images/colorfulResume.jpg"
              alt="resume"
              width={500}
              height={500}
            />
            <li>
              ❗ Overdesigning : Avoid fancy fonts or visuals. Clarity is key.
            </li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400">
            🌟 Best Practices
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Use simple fonts like Roboto, Arial, or Calibri.</li>
            <li>Keep formatting consistent throughout.</li>
            <li>Always save and send as PDF format.</li>
            <li>Customize the resume for each job role.</li>
            <li>
              Highlight results in projects (e.g., "Reduced load time by 40%").
            </li>
            <li>Maintain alignment, padding, and spacing throughout.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AvoidResumeMistakes;
