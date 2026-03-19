function ScrollHint() {
  return (
    <a
      href="#intro"
      className="scroll-float"
      aria-label="Scroll to top"
    >
      <span className="scroll-float__arrow" aria-hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </span>
      <span className="scroll-float__label">Up</span>
    </a>
  )
}

export default ScrollHint
