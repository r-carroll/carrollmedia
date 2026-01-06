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
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav
        className="glass-panel rounded-full px-6 py-3 flex items-center gap-6"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="relative font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-white transition-colors duration-300"
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
