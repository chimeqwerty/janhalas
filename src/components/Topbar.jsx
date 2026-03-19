const navLinks = [
  { href: '#intro', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

function Topbar() {
  return (
    <header className="topbar">
      <nav className="topbar__nav" aria-label="Main">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className="topbar__link">
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Topbar
