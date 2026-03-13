import type { ReactNode } from 'react'

type Props = {
  href: string
  label: string
  icon: ReactNode
  className?: string
}

export default function IconLink({ href, label, icon, className }: Props) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={[
        'group relative inline-flex h-12 w-12 items-center justify-center rounded-xl',
        'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 shadow-sm',
        'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950',
        className ?? '',
      ].join(' ')}
    >
      <span className="text-sm text-gray-800 dark:text-gray-50 transition-colors duration-200 group-hover:text-primary-700">
        {icon}
      </span>

      {/* tooltip */}
      <span
        className={[
          'pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2',
          'rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white',
          'opacity-0 shadow-sm transition-opacity duration-200',
          'group-hover:opacity-100',
        ].join(' ')}
      >
        {label}
      </span>
    </a>
  )
}

