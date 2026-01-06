import Link from 'next/link'

const navItems = {
  '/': { name: 'Home' },
  '/#about': { name: 'About' },
  '/#projects': { name: 'Projects' },
  '/#skills': { name: 'Skills' },
  '/#resume': { name: 'Resume' },
}

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <nav
        className="glass-panel pointer-events-auto rounded-full px-4 py-3 md:px-6 flex items-center gap-4 md:gap-6 max-w-full overflow-x-auto no-scrollbar scroll-smooth"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="relative font-[family-name:var(--font-syne)] font-bold text-xs md:text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
