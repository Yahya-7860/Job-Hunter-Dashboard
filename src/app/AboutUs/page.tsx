export default function AboutUsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white dark:bg-neutral-900 dark:text-black h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">About Us</h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        <strong>Job Hunter</strong> is a platform dedicated to helping freshers
        and job seekers stay updated with the latest job opportunities shared
        across platforms like LinkedIn. Our mission is to make job hunting
        easier by collecting and curating relevant openings in one place.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        We are not a recruitment agency or employer. We do not provide jobs
        directly but act as a bridge between job seekers and opportunities by
        sharing information publicly available online.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Our goal is to save your time, reduce your job search stress, and make
        the process more efficient by offering genuine and up-to-date job
        information.
      </p>

      <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
        Thank you for trusting Job Hunter in your career journey.
      </p>
    </div>
  );
}
