import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Overview',
    content: `Picksy is a fully client-side web application. We take your privacy seriously. This policy explains what data is handled when you use Picksy, and how it is treated.`,
  },
  {
    title: 'Data We Do Not Collect',
    content: `Picksy does not collect, store, or transmit any personally identifiable information. There are no user accounts, no sign-up forms, and no login. The names you enter are never sent to any server.`,
  },
  {
    title: 'Data Stored in Your Browser',
    content: `To provide a seamless experience across sessions, Picksy saves the following data exclusively in your browser's localStorage:\n\n• Your participants list (names you enter)\n• Your winner message\n• Your "Remove after chosen" preference\n• Your light / dark mode preference\n\nThis data never leaves your device. You can clear it at any time by clearing your browser's site data for this page.`,
  },
  {
    title: 'Analytics',
    content: `Picksy uses Vercel Analytics, a privacy-focused analytics service provided by Vercel Inc. Vercel Analytics collects anonymous, aggregated usage data such as page views and general geographic region. It does not use cookies, does not track individuals across sites, and does not build personal profiles.\n\nThis data is accessed exclusively by the developer and is used solely to improve site features and user experience. It is never shared with third parties, sold, or used for marketing or advertising purposes. For more information, see Vercel's Privacy Policy at vercel.com/legal/privacy-policy.`,
  },
  {
    title: 'File Uploads',
    content: `When you upload a .txt or .csv file to populate your names list, the file is read entirely in-browser using the Web File API. The file contents are never uploaded to any server.`,
  },
  {
    title: 'Third-Party Services',
    content: `The only third-party service integrated into Picksy is Vercel Analytics (described above). No advertising networks, social media trackers, or other third-party scripts are loaded.`,
  },
  {
    title: 'Children\'s Privacy',
    content: `Picksy does not knowingly collect any information from children under the age of 13. Because no personal data is collected at all, the service is safe for use in educational environments.`,
  },
  {
    title: 'Changes to This Policy',
    content: `This policy may be updated occasionally to reflect changes to the application. The effective date at the bottom of this page will be updated accordingly. Continued use of Picksy after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    content: `For privacy-related questions or concerns, you can reach the developer at sudojoie@proton.me.`,
  },
];

const Privacy = () => {
  return (
    <div className='w-full max-w-2xl py-12 px-6'>
      <div className='mb-10'>
        <p className='text-xs uppercase tracking-widest font-semibold text-indigo-500 dark:text-indigo-400 mb-2'>Legal</p>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>Privacy Policy</h1>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          Picksy respects your privacy. Here is exactly what happens with your data.
        </p>
        <p className='mt-1 text-xs text-gray-400 dark:text-gray-600'>Effective: April 21, 2026</p>
      </div>

      <div className='flex flex-col gap-6'>
        {sections.map((section, i) => (
          <div key={i} className='card p-5'>
            <h2 className='text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
              <span className='flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-[10px] font-bold'>
                {i + 1}
              </span>
              {section.title}
            </h2>
            <p className='mt-2 ml-7 text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line'>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className='mt-10 flex flex-wrap gap-4 text-xs text-gray-400 dark:text-gray-600'>
        <Link to='/terms' className='hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'>Terms &amp; Conditions</Link>
        <span>&middot;</span>
        <Link to='/cookies' className='hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'>Cookies Policy</Link>
      </div>
    </div>
  );
};

export default Privacy;
