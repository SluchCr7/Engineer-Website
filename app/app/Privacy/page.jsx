import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="flex items-start flex-col py-20 px-10">
      <Head>
        <title>Privacy Policy - Building Website</title>
        <meta name="description" content="Privacy Policy for Building Website" />
      </Head>
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to Building Website. Your privacy is critically important to us.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you provide to us, such as your name, email address, and any other information you provide directly through our website.
        </p>
        <p className="mb-4">
          We also collect non-personal information, such as your browser type, IP address, and other technical data, to improve our services and website performance.
        </p>
        <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide, operate, and maintain our website.</li>
          <li>To communicate with you, including customer support and updates.</li>
          <li>To improve and personalize your experience.</li>
          <li>To analyze website usage and trends.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. However, we may share your information with third-party service providers to assist us in operating our website or providing services to you, subject to strict confidentiality agreements.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may impact the functionality of the website.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@buildingwebsite.com" className="text-blue-600">support@buildingwebsite.com</a>.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the bottom.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@buildingwebsite.com" className="text-blue-600">support@buildingwebsite.com</a>.
        </p>
        <p className="text-sm text-gray-500">Last updated: 29 Jan 2025</p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
