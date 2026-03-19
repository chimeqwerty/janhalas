function Contact({ data }) {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">{data.title}</h2>
      <p className="contact__text">{data.text}</p>
      <ul className="contact__links">
        {data.links.map((link, i) => (
          <li key={i}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
