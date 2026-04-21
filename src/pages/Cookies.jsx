import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'What Are Cookies?',
    content: `Cookies are small text files placed on your device by a website. They are widely used to make websites work more efficiently and to provide information to site operators. Cookies are distinct from browser localStorage, which is also described below.`,
  },
  {
    title: 'Does Picksy Use Cookies?',
    content: `Picksy itself does not set any first-party cookies. The application does not use cookies for authentication, tracking, advertising, or any other purpose.`,
  },
  {
    title: 'localStorage (Not Cookies)',
    content: `Picksy uses your browser's localStorage — not cookies — to persist your settings between visits. The following values are saved locally on your device:\n\n• Participants list (names you have entered)\n• Winner message\n• "Remove after chosen" toggle state\n• Light / dark mode preference\n\nLocalStorage data is stored only on your device and is never transmitted to any server. You can remove it at any time by clearing your browser's site data for this page.`,
  },
  {
    title: 'Third-Party Cookies — Vercel Analytics',
    content: `Picksy is deployed on Vercel and uses Vercel Analytics to understand general usage patterns. Vercel Analytics is designed to be privacy-friendly and does not rely on cookies to track users. It collects anonymised, aggregated data such as page view counts and broad geographic regions.\n\nThis data is accessed exclusively by the developer and is used solely to improve site features and user experience. It is never shared with third parties, sold, or used for marketing or advertising purposes. For full details on how Vercel handles data, refer to Vercel's Privacy Policy at vercel.com/legal/privacy-policy.`,
  },
  {
    title: 'No Advertising or Profiling Cookies',
    content: `Picksy does not use advertising networks, remarketing services, or any tools that build individual user profiles. No third-party scripts other than Vercel Analytics are loaded.`,
  },
  {
    title: 'Managing Cookies and Site Data',
    content: `You can control and delete cookies and localStorage data through your browser settings. The steps vary by browser:\n\n• Chrome: Settings → Privacy and security → Clear browsing data\n• Firefox: Settings → Privacy & Security → Cookies and Site Data → Clear Data\n• Safari: Settings → Privacy → Manage Website Data\n\nNote that clearing site data for Picksy will remove your saved names list and preferences.`,
  },
  {
    title: 'Changes to This Policy',
    content: `This Cookies Policy may be updated from time to time. The effective date at the top of the page will reflect the most recent revision. Continued use of Picksy after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about cookies or data storage in Picksy, please contact the developer at sudojoie@proton.me.`,
  },
];

const Cookies = () => {
  return (
    <div className='w-full max-w-2xl py-12 px-6'>
      <div className='mb-10'>
        <p className='text-xs uppercase tracking-widest font-semibold text-indigo-500 dark:text-indigo-400 mb-2'>Legal</p>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>Cookies Policy</h1>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          How Picksy handles cookies and local browser storage.
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
        <Link to='/privacy' className='hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'>Privacy Policy</Link>
        <span>&middot;</span>
        <Link to='/terms' className='hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'>Terms &amp; Conditions</Link>
      </div>
    </div>
  );
};

export default Cookies;
