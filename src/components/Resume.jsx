const base = import.meta.env.BASE_URL || '/'

function Resume({ data }) {
  if (!data) return null

  const { experience, education, competencies, activities, techStack } = data

  return (
    <section id="resume" className="section">
      {/* Experience */}
      {experience?.jobs?.length > 0 && (
        <div className="resume-block">
          <h2 className="section-title">{experience.title}</h2>
          <ul className="resume-list">
            {experience.jobs.map((job, i) => (
              <li key={i} className="resume-item">
                <div className="resume-item__header">
                  {job.logo && (
                    <div className="resume-item__logo-wrap">
                      <img
                        src={`${base}${job.logo.replace(/^\//, '')}`}
                        alt=""
                        className="resume-item__logo"
                      />
                    </div>
                  )}
                  <div className="resume-item__meta">
                    <span className="resume-item__role">{job.role}</span>
                    <span className="resume-item__company">{job.company}</span>
                    <span className="resume-item__period">{job.period}</span>
                  </div>
                </div>
                <p className="resume-item__desc">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Education */}
      {education?.items?.length > 0 && (
        <div className="resume-block">
          <h2 className="section-title">{education.title}</h2>
          <ul className="resume-edu-list">
            {education.items.map((item, i) => (
              <li key={i} className="resume-edu-item">
                <div className="resume-edu-item__header">
                  {item.logo && (
                    <div className="resume-edu-item__logo-wrap">
                      <img
                        src={`${base}${item.logo.replace(/^\//, '')}`}
                        alt=""
                        className="resume-edu-item__logo"
                      />
                    </div>
                  )}
                  <div className="resume-edu-item__meta">
                    <span className="resume-edu__degree">{item.degree}</span>
                    <span className="resume-edu__institution">{item.institution}</span>
                    <span className="resume-edu__period">{item.period}</span>
                  </div>
                </div>
                {item.note && <p className="resume-edu__note">{item.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Core Competencies */}
      {competencies?.items?.length > 0 && (
        <div className="resume-block">
          <h2 className="section-title">{competencies.title}</h2>
          <ul className="resume-comp-list">
            {competencies.items.map((item, i) => (
              <li key={i} className="resume-comp-item">
                <span className="resume-comp__title">
                  {item.emoji && <span className="resume-comp__emoji" aria-hidden>{item.emoji}</span>}
                  {item.title}
                </span>
                <p className="resume-comp__desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Activities */}
      {activities?.items?.length > 0 && (
        <div className="resume-block">
          <h2 className="section-title">{activities.title}</h2>
          <ul className="resume-act-list">
            {activities.items.map((item, i) => (
              <li key={i} className="resume-act-item">
                <span className="resume-act__title">{item.title}</span>
                <p className="resume-act__desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech stack */}
      {techStack?.items?.length > 0 && (
        <div className="resume-block">
          <h2 className="section-title">{techStack.title}</h2>
          <ul className="resume-tech-list">
            {techStack.items.map((item, i) => (
              <li key={i} className="resume-tech-item">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Resume
