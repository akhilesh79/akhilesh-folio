import type { ReactNode } from 'react';

type Props = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};

export default function IconLink({ href, label, icon, className }: Props) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={[
        'group relative inline-flex h-11 w-11 items-center justify-center rounded-full',
        'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60',
        'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10',
        'hover:border-primary-300 dark:hover:border-primary-700',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950',
        className ?? '',
      ].join(' ')}
    >
      <span className='text-base text-gray-600 dark:text-gray-300 transition-colors duration-200 group-hover:text-primary-600 dark:group-hover:text-primary-400'>
        {icon}
      </span>

      {/* tooltip */}
      <span
        className={[
          'pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2',
          'rounded-md bg-gray-900 dark:bg-gray-800 px-2.5 py-1 text-[11px] font-medium text-white',
          'opacity-0 shadow-lg transition-all duration-200 scale-90',
          'group-hover:opacity-100 group-hover:scale-100',
          'whitespace-nowrap',
        ].join(' ')}
      >
        {label}
      </span>
    </a>
  );
}
