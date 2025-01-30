import React from "react";

const JournalUpdates = () => (
  <div className="p-8 bg-gray-50 text-gray-800 rounded-lg shadow-sm">
    <h2 className="text-3xl font-bold text-emerald-900 mb-6 animate-fade-in">
      Journal Updates
    </h2>

    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Outstanding Editors and Peer Reviewers
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At <strong>Fusion Journal of Engineering and Sciences</strong>, our Editorial Board Members (EBMs), Associate Editors (AEs), and external peer reviewers play a pivotal role in maintaining the highest standards of academic excellence. Their expertise and dedication ensure a rigorous and fair peer-review process, helping us deliver impactful research to the global scientific community.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Meet the Managing Editors
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Get to know the talented team behind <strong>Fusion Journal of Engineering and Sciences</strong>. Our Managing Editors bring a wealth of experience and passion to the journal, ensuring that every publication meets the highest standards of quality and relevance.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Upcoming and Past Webinars
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Join us for our exclusive webinar series, where leading researchers and experts share their groundbreaking work in engineering, applied sciences, and interdisciplinary fields. These interactive sessions provide a platform for knowledge exchange and collaboration. Stay tuned for updates on our social media channels!
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Topical Collections
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Explore our curated Topical Collections, featuring cutting-edge research on emerging trends and hot topics in engineering, life sciences, chemistry, environmental sciences, and more. These collections provide a focused resource for readers and highlight the latest advancements in their fields of interest.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Follow Us on Social Media
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stay connected with <strong>Fusion Journal of Engineering and Sciences</strong> on Twitter and other social media platforms. Follow us for the latest journal updates, research highlights, and announcements about upcoming events and publications.
        </p>
        <a
          href="https://twitter.com"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Follow us on Twitter →
        </a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Author Resources: Writing Your Manuscript
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Planning to submit your research to <strong>Fusion Journal of Engineering and Sciences</strong>? We offer comprehensive author resources, including interactive tutorials and guidelines, to help you prepare a high-quality manuscript. From study design to figure preparation, we’ve got you covered.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          Introducing Preprint Sharing with In Review
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Fusion Journal of Engineering and Sciences</strong> now offers authors the option to share their work as preprints through our partnership with Research Square’s In Review service. By opting in, you can:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Share your research with the community while it undergoes peer review.</li>
          <li>Track the status of your manuscript in real-time.</li>
          <li>Gain early visibility and collaboration opportunities.</li>
        </ul>
        <a
          href="https://researchsquare.com"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Learn more about In Review and how to opt-in →
        </a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
        <h3 className="text-xl font-semibold text-emerald-800 mb-3">
          The Fusion Series
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Discover the <strong>Fusion Series</strong>, a collection of special issues and curated content that highlights interdisciplinary research and innovative applications across engineering and applied sciences. Each edition focuses on a specific theme, offering readers a deep dive into the latest advancements.
        </p>
      </div>
    </div>
  </div>
);

export default JournalUpdates;