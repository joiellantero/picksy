import React from 'react';

const faqs = [
  {
    q: 'How do I add names?',
    a: 'Open the Settings panel (gear icon in the nav), then type one name per line in the Participants text area, or upload a .txt / .csv file.',
  },
  {
    q: 'Are my names stored online?',
    a: 'No. Everything is saved only in your browser\'s local storage. Nothing is transmitted to any server.',
  },
  {
    q: 'What file formats are supported for upload?',
    a: 'Plain text files (.txt) with one name per line, or comma-separated value files (.csv) are supported.',
  },
  {
    q: 'How do I stop someone from being picked twice?',
    a: 'Enable the "Remove after chosen" toggle in Settings. Once a name is drawn it will be removed from the pool.',
  },
  {
    q: 'Can I customise the winner message?',
    a: 'Yes! In the Settings panel, edit the "Winner Prompt" field to show any text you like when a name is drawn.',
  },
  {
    q: 'Does dark mode persist after I close the tab?',
    a: 'Yes. Your dark mode preference and names list are both saved in local storage and restored on your next visit.',
  },
];

const Help = () => {
  return (
    <div className='w-full max-w-2xl py-12 px-6'>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>FAQs</h1>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          Answers to the most common questions.
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        {faqs.map((faq, i) => (
          <div key={i} className='card p-5'>
            <h3 className='text-sm font-semibold text-gray-900 dark:text-white flex items-start gap-2'>
              <span className='flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-[10px] font-bold mt-px'>
                {i + 1}
              </span>
              {faq.q}
            </h3>
            <p className='mt-2 ml-7 text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
