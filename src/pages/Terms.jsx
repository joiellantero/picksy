import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using Picksy ("the Service"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Service.`,
  },
  {
    title: 'Description of Service',
    content: `Picksy is a free, open-source, client-side web application that randomly selects a name from a list provided by the user. The Service is provided as-is for personal and non-commercial use.`,
  },
  {
    title: 'License & Permitted Use',
    content: `Picksy is licensed under the PolyForm Noncommercial License 1.0.0. This means:\n\n• You may use, study, and modify Picksy for personal or open-source projects.\n• You may share and redistribute the application non-commercially.\n• You may NOT use Picksy for commercial purposes.\n• You may NOT use Picksy in any way that generates revenue or monetary compensation.\n\nThe full license text is available at polyformproject.org/licenses/noncommercial/1.0.0.`,
  },
  {
    title: 'User Responsibilities',
    content: `You are solely responsible for the content you enter into Picksy, including any names or data in your participants list. You agree not to use the Service for any unlawful purpose or in any way that could harm others.`,
  },
  {
    title: 'Intellectual Property',
    content: `The Picksy name, logo, and original source code are the intellectual property of joiellantero. Contributions made to the open-source repository are subject to the project's license agreement.`,
  },
  {
    title: 'No Warranties',
    content: `The Service is provided "as is" and "as available" without any warranty of any kind, either express or implied, including but not limited to fitness for a particular purpose, accuracy, or reliability. The author makes no guarantee that the Service will be available at all times or free from errors.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, joiellantero shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Service — including but not limited to loss of data or loss of profits.`,
  },
  {
    title: 'Third-Party Links',
    content: `The Service may contain links to external websites (e.g. GitHub, Ko-fi, Vercel). These are provided for convenience only. Picksy has no control over, and assumes no responsibility for, the content or practices of any third-party sites.`,
  },
  {
    title: 'Modifications to the Service',
    content: `The developer reserves the right to modify, suspend, or discontinue the Service at any time without notice. These Terms may also be updated periodically. Continued use of the Service after changes have been posted constitutes your acceptance of the revised Terms.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or the use of the Service will be subject to the exclusive jurisdiction of the competent courts.`,
  },
  {
    title: 'Contact',
    content: `Questions about these Terms can be directed to the developer at sudojoie@proton.me.`,
  },
];

const Terms = () => {
  return (
    <div className='w-full max-w-2xl py-12 px-6'>
      <div className='mb-10'>
        <p className='text-xs uppercase tracking-widest font-semibold text-indigo-500 dark:text-indigo-400 mb-2'>Legal</p>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>Terms &amp; Conditions</h1>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          Please read these terms carefully before using Picksy.
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
        <Link to='/cookies' className='hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors'>Cookies Policy</Link>
      </div>
    </div>
  );
};

export default Terms;
