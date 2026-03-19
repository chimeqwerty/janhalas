function About({ data }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">{data.title}</h2>
      <div className="about__content">
        {data.paragraphs.map((p, i) => (
          <p key={i} className="about__p">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}

export default About
