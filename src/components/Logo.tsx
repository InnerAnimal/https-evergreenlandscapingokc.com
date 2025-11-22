import Link from 'next/link'

interface LogoProps {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  const textColors = {
    sm: 'text-white',
    md: 'text-white',
    lg: 'text-forestGreen',
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <img
        src="/images/evergreen-logo.svg"
        alt="Evergrow Landscaping Logo"
        width={size === 'sm' ? 32 : size === 'md' ? 40 : 64}
        height={size === 'sm' ? 32 : size === 'md' ? 40 : 64}
        className={sizeClasses[size]}
      />
      {showText && (
        <span className={`font-bold ${textColors[size]} ${textSizes[size]}`}>
          Evergrow Landscaping
        </span>
      )}
    </Link>
  )
}

