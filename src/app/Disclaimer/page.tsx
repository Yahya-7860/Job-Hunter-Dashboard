export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-black">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Disclaimer</h1>

      <p className="mb-4 text-gray-700 dark:text-gray-400">
        <strong>Job Hunter</strong> is a platform designed to share job
        openings, especially for freshers, that we come across on platforms like
        LinkedIn and other reliable sources.
      </p>

      <h2 className=" text-black dark:text-gray-200 text-2xl font-semibold mt-6 mb-2">
        1. No Direct Job Offering
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-400">
        We do not directly offer or guarantee jobs. Our role is to{" "}
        <strong>share job updates</strong> that are publicly available. The jobs
        listed on our platform are curated based on online listings and
        references.
      </p>

      <h2 className=" text-black dark:text-gray-200 text-2xl font-semibold mt-6 mb-2">
        2. Authenticity of Jobs
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-400">
        We strive to share only genuine and verified job openings. However,
        users must do their own due diligence before applying. If you come
        across any suspicious listings or fraudulent behavior, we strongly
        recommend avoiding it and reporting it to the appropriate authorities.
      </p>

      <h2 className=" text-black dark:text-gray-200 text-2xl font-semibold mt-6 mb-2">
        3. No Liability
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-400">
        Job Hunter is not responsible for any losses, damages, or issues arising
        from interactions with employers, interviews, or job offers obtained via
        the links we share. Proceed at your own discretion.
      </p>

      <h2 className=" text-black dark:text-gray-200 text-2xl font-semibold mt-6 mb-2">
        4. Third-Party Links
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-400">
        We may include links to third-party websites (e.g., LinkedIn, company
        careers pages) for application purposes. We do not have control over
        those websites and are not responsible for their content or privacy
        policies.
      </p>

      <h2 className=" text-black dark:text-gray-200 text-2xl font-semibold mt-6 mb-2">
        5. Content Accuracy
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-400">
        We make every effort to keep job listings accurate and up-to-date.
        However, companies may close their openings or change job descriptions
        at any time. Always refer to the original source before applying.
      </p>

      <h2 className=" text-black dark:text-gray-200 text-2xl font-semibold mt-6 mb-2">
        6. Your Responsibility
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-400">
        Applicants are solely responsible for verifying the legitimacy of a job
        post and deciding whether to apply. Stay alert, avoid sharing personal
        details unless you're confident in the authenticity of the opportunity.
      </p>

      <p className="mt-6 text-gray-700 dark:text-gray-400">
        If you have any concerns or wish to report suspicious listings shared
        via our platform, feel free to contact us at{" "}
        <a
          href="mailto:support@jobhunter.com"
          className="text-blue-600 underline"
        >
          support@jobhunter.com
        </a>
        .
      </p>
    </div>
  );
}
