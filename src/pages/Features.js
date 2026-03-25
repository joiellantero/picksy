import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: (
      <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
      </svg>
    ),
    title: 'Random Name Draw',
    description: 'Instantly pick a random name from your list with a single click. Fair, unbiased, and instant.',
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
      </svg>
    ),
    title: 'Remove After Draw',
    description: 'Optionally remove a name from the pool once it has been drawn, so no one gets picked twice.',
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12' />
      </svg>
    ),
    title: 'File Uploads',
    description: 'Upload a .txt or .csv file to instantly populate your names list — no manual typing required.',
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
      </svg>
    ),
    title: 'Custom Winner Message',
    description: 'Personalise the message shown when a name is drawn. Make it fun, formal, or anything in between.',
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
      </svg>
    ),
    title: 'Dark Mode',
    description: 'Toggle between light and dark themes. Your preference is saved across sessions automatically.',
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.75} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
      </svg>
    ),
    title: 'Privacy First',
    description: 'Your names list is stored locally in your browser. Nothing is sent to any server — ever.',
  },
];

const Features = () => {
  return (
    <div className='w-full max-w-2xl py-12 px-6'>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>Features</h1>
        <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
          Everything you need to run fair, fun draws.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {features.map((f, i) => (
          <div key={i} className='card p-5 flex gap-4'>
            <div className='flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500 dark:text-indigo-400'>
              {f.icon}
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>{f.title}</h3>
              <p className='mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed'>{f.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className='mt-8 text-xs text-gray-400 dark:text-gray-600'>
        Have a feature request?{' '}
        <a href='https://github.com/joiellantero/picksy/issues' className='link'>Let us know</a>.
      </p>
    </div>
  );
};

export default Features;
