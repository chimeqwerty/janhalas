/**
 * Edit this file to update the site content.
 * Image paths are relative to /public (e.g. photo.jpg → use "/photo.jpg" in browser).
 */

export const content = {
  // --- Intro ---
  intro: {
    name: 'Jan Halas',
    tagline: 'Product-minded engineer with a focus on clarity and impact.',
    bio: 'I build things that work for people. Based in Finland, working across product, design, and code.',
    // Put your photo in /public and set path (e.g. "/photo.jpg")
    photo: '/photo.jpg',
  },

  // --- About ---
  about: {
    title: 'About',
    paragraphs: [
      'I believe in simple, yet meanigful and impactful products. Always seeking new value of bringing value and sharing my knowledge to make this Earth a better place. My superpowers are at the intersection of product, engineering, and user experience, having opportunity to impact millions of people daily.',
      'When I’m not shipping, I’m usually reading, walking, or tinkering with side projects.',
    ],
  },

  // --- Resume: Experience, Education, Core Competencies, Activities, Tech stack ---
  resume: {
    experience: {
      title: 'Experience',
      jobs: [
        {
          role: 'Technical Account Manager',
          company: 'DoorDash',
          period: '2023 – Present',
          description: 'Technical account management and growth in Drive B2B for partner integrations across EMEA & Asia, driving expansion and new market launches. Defining global technical product strategy, managing key enterprise partnerships, and collaborating with R&D, Legal, and Marketing to align customer needs with product development and scalable support practices.',
          logo: '/logos/dd.svg',
        },
        {
          role: 'Sales Engineer — Financial & Insurance Advisory',
          company: 'SAS Institute',
          period: '2020 – 2022',
          description: 'Supported pre- and post-sales initiatives by developing data analytics value propositions for high-impact, seven-figure client cases. Designed and led analytics workshops and tailored training for international clients on SAS Analytics products. Architected Azure + SAS-based analytics solutions for prospective customers across EMEA, US, and APAC.',
          logo: '/logos/sas.png',
        },
        {
          role: 'Data Scientist & Product Owner',
          company: 'OP Financial Group',
          period: '2018 – 2020',
          description: "Owned and developed a full BI solution for Finland's largest banking institution, serving 200+ analysts, actuaries, and regulatory specialists daily. Built predictive models, enhanced data governance, and improved reporting quality to reduce fraud and optimize KPIs impacting over 1M clients. Championed data-driven decision-making and played a key role in establishing a cloud-native (AWS-based) Data Science practice.",
          logo: '/logos/op.png',
        },
        {
          role: 'Field Sales Representative',
          company: 'Hewlett-Packard',
          period: '2012 – 2016',
          description: 'Managed the full sales lifecycle for HP and Microsoft consumer products, consistently exceeding sales targets and earning top-performer recognition. Served as brand ambassador and trusted advisor on technology solutions; trained new sales team members and represented the company at product tours and promotional events.',
          logo: '/logos/hp.png',
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        { degree: 'Masters in Science (Data Science)', institution: 'LUT University', period: '2017 – 2020', note: 'Studies focused on Math, Fuzzy Logic, Data Science, Algorithms, ML/AI, Programming, Econometrics. Awarded ''Achieving Student of the year'' designation', logo: '/logos/lut.png'' },
        { degree: 'Bachelor of Engineering (Industrial Management)', institution: 'Helsinki Metropolia University of Applied Sciences', period: '2012 – 2016', logo: '/logos/metropolia.jpg' },
        { degree: 'International Exchange Studies', institution: 'HTW Berlin', period: '2015', logo: '/logos/htw.svg' },
      ],
    },
    competencies: {
      title: 'Core Competencies',
      items: [
        { emoji: '🤝', title: 'Technical Leadership & Account Management', description: 'Expertise in managing complex technical partnerships, cross-functional collaboration, and enterprise solution delivery.' },
        { emoji: '📊', title: 'Data Science & Analytics Strategy', description: 'Skilled in MLOps, BI, and data-driven decision-making with hands-on experience building scalable analytics and AI solutions.' },
        { emoji: '☁️', title: 'Cloud & DevOps Engineering', description: 'Certified AWS and Azure professional with practical experience in cloud architecture and CI/CD environments.' },
        { emoji: '🛠️', title: 'Product & Solution Development', description: 'Track record in designing production-grade APIs, backend systems, front-end frameworks, public documentation.' },
        { emoji: '📈', title: 'Business Growth & Customer Success', description: 'Strong background in pre/post-sales engineering in Silicon Valley grade companies, product evangelism, and customer-centric project management.' },
      ],
    },
    activities: {
      title: 'Activities',
      items: [
        { title: 'Tutoring', description: 'Various tutoring and mentoring activities around language and career development.' },
        { title: 'Education & Community building', description: 'Contributing to Nordic crypto / web3 / blockchain technology adoption & education via organizing & participating in events, groups, gatherings.' },
        { title: 'Volunteer Staff, Biohacker Summit', description: 'Helping to run one of the world’s biggest biohacking events organized yearly in Helsinki, Finland.' },
      ],
    },
    techStack: {
      title: 'Tech stack',
      items: ['Python, Javascript', 'Observability - Graphana, Datadog', 'Git', 'Web Applications & API design', 'AI tooling', 'Data Engineering', 'Algorithm Design', 'Scripting'],
    },
  },

  // --- Contact ---
  contact: {
    title: 'Contact',
    text: 'Open to interesting projects and conversations. Reach out via email or LinkedIn.',
    email: 'janhalas@outlook.com',
    linkedin: 'https://www.linkedin.com/in/jan-halas-3228608a/',
    github: 'https://github.com/chimeqwerty',
    // Add or remove links as needed
    links: [
      { label: 'Email', href: 'mailto:janhalas@outlook.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jan-halas-3228608a/' },
      { label: 'GitHub', href: 'https://github.com/chimeqwerty' },
    ],
  },
}
