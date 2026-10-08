import { useId } from 'react'

/** D4nthi mark: same family as the Notes logo (gradient rounded square), with a geometric "D". */
export function BrandLogo({
  className = '',
  translucent = false,
}: {
  className?: string
  translucent?: boolean
}) {
  const id = useId()
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill={translucent ? 'rgba(255,255,255,0.2)' : `url(#${id})`} />
      <path
        d="M22 16h10a16 16 0 0 1 0 32H22z"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="3.6" fill="#fff" />
    </svg>
  )
}

export function BrandWordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <BrandLogo className="h-8 w-8" translucent={light} />
      <span className={'text-xl font-extrabold tracking-tight ' + (light ? 'text-white' : 'text-slate-900')}>
        D4nthi
      </span>
    </span>
  )
}
