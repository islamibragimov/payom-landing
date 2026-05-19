import { useEffect } from 'react'
import './App.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Problem', href: '#problem' },
  { label: 'MVP', href: '#mvp' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
]

const mvpItems = [
  'User registration',
  'User login',
  'Basic messaging system',
  'Message sending',
  'Backend connection',
  'Database connection',
  'Working demo available',
]

const targetUsers = [
  {
    title: 'Students',
    text: 'A simple communication layer for study groups and campus life.',
  },
  {
    title: 'Teachers',
    text: 'Clear channels for lessons, announcements, and class support.',
  },
  {
    title: 'University Groups',
    text: 'Organized spaces for faculties, clubs, and academic teams.',
  },
  {
    title: 'Local Communities',
    text: 'A local-first way to connect people around shared needs.',
  },
]

const reasons = [
  {
    title: 'Tajik-first idea',
    text: 'Built around local users, local languages, and local digital needs.',
  },
  {
    title: 'Education-first start',
    text: 'The first use cases can grow from students, teachers, and campuses.',
  },
  {
    title: 'Simple MVP',
    text: 'The first version focuses on the core: registering, logging in, and messaging.',
  },
  {
    title: 'Long-term ecosystem vision',
    text: 'Communication can become the foundation for larger digital services.',
  },
]

const technologies = [
  ['Mobile App', 'Flutter'],
  ['Backend', 'Go'],
  ['Database', 'PostgreSQL'],
  ['Real-Time Messaging', 'WebSocket'],
  ['Hosting', 'Self-hosted server for MVP'],
]

const roadmap = [
  {
    stage: 'Stage 1',
    title: 'Current MVP',
    text: 'Registration, login, basic messaging, backend and database connection.',
  },
  {
    stage: 'Stage 2',
    title: 'Better Messenger',
    text: 'Group chats, user profiles, voice messages, image sharing, Tajik/Russian/English interface.',
  },
  {
    stage: 'Stage 3',
    title: 'Local Platform',
    text: 'Education tools, verified organizations, business accounts, and community features.',
  },
  {
    stage: 'Stage 4',
    title: 'Digital Ecosystem',
    text: 'Payment integrations through licensed partners, public-service access, and local digital services.',
  },
]

const ecosystemItems = [
  'Communication',
  'Education',
  'Business',
  'Payments',
  'Public Services',
  'Communities',
]

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="landing-page">
      <span className="ambient-shape ambient-shape-blue" aria-hidden="true"></span>
      <span className="ambient-shape ambient-shape-green" aria-hidden="true"></span>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Payom Messenger home">
          <span className="brand-mark">P</span>
          <span>Payom</span>
        </a>

        <nav className="nav-menu" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Tajik-first digital communication</p>
              <h1>
                Payom <span>Messenger</span>
              </h1>
              <p className="hero-subtitle">
                A Tajik-first messenger starting with communication and growing
                into a digital ecosystem for Tajikistan.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://drive.google.com/drive/folders/18IjKRjj52G-rsoJfG7EWZTRC8--QOwPU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="play-icon" aria-hidden="true"></span>
                  Watch Demo
                </a>
                <a className="button button-secondary" href="#roadmap">
                  <span className="road-icon" aria-hidden="true"></span>
                  View Roadmap
                </a>
              </div>

              <div className="hero-points" aria-label="Project highlights">
                <span>MVP built</span>
                <span>Working demo</span>
                <span>Tajik-first vision</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Payom messaging preview">
              <div className="phone-mockup">
                <div className="phone-top">
                  <span></span>
                  <span></span>
                </div>
                <div className="chat-header">
                  <span className="contact-dot"></span>
                  <div>
                    <strong>Payom MVP</strong>
                    <small>Online demo</small>
                  </div>
                </div>
                <div className="chat-body">
                  <div className="message message-left">
                    Welcome to Payom Messenger.
                  </div>
                  <div className="message message-right">
                    Salom! The message was sent.
                  </div>
                  <div className="message message-left small-message">
                    Registration, login, and messaging are connected.
                  </div>
                </div>
                <div className="message-composer">
                  <span>Type a message</span>
                  <button type="button" aria-label="Send demo message">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal" id="founder">
          <div className="section-inner two-column">
            <div>
              <p className="section-kicker">About Founder</p>
              <h2>Built by a student founder in Dushanbe.</h2>
            </div>
            <p className="large-text">
              My name is Islomzhon Ibragimov. I am a 2nd-year student at
              Dushanbe Innovation Institute. I started Payom because I believe
              Tajikistan needs more locally built digital products that
              understand local users, local languages, and local needs. Payom is
              not only an idea. The first MVP has already been built, and a
              working demo is available.
            </p>
          </div>
        </section>

        <section className="section section-soft reveal" id="problem">
          <div className="section-inner two-column">
            <div>
              <p className="section-kicker">Problem</p>
              <h2>Tajikistan needs digital products designed for local life.</h2>
            </div>
            <div className="text-card">
              <p>
                Most people in Tajikistan use foreign messaging platforms for
                daily communication. These platforms are useful, but they are not
                designed specifically for Tajikistan's local languages,
                education system, communities, and future digital services.
                Tajikistan needs more locally built digital products that
                support communication, trust, local innovation, and digital
                independence.
              </p>
            </div>
          </div>
        </section>

        <section className="section reveal" id="solution">
          <div className="section-inner solution-panel">
            <div>
              <p className="section-kicker">Solution</p>
              <h2>Start with messaging. Grow into an ecosystem.</h2>
            </div>
            <p>
              Payom is a Tajik-first messenger app designed for local
              communication. The current MVP focuses on messaging first because
              communication is the foundation of every digital ecosystem.
            </p>
          </div>
        </section>

        <section className="section section-soft reveal" id="mvp">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Current MVP</p>
              <h2>Core messaging foundations are already working.</h2>
            </div>

            <div className="checklist-grid">
              {mvpItems.map((item) => (
                <div className="check-item" key={item}>
                  <span className="check-dot" aria-hidden="true"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mvp-proof">
              The MVP proves that Payom has moved from idea stage to working
              product stage.
            </p>
          </div>
        </section>

        <section className="section reveal" id="demo">
          <div className="section-inner demo-grid">
            <div className="demo-card" aria-label="Demo video preview">
              <div className="demo-screen">
                <div className="demo-topbar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="demo-play">
                  <span className="demo-play-icon" aria-hidden="true"></span>
                </div>
                <div className="demo-progress">
                  <span></span>
                </div>
              </div>
            </div>

            <div>
              <p className="section-kicker">Demo</p>
              <h2>Recorded MVP walkthrough</h2>
              <p className="large-text">
                A short recorded demo shows how the current MVP works: users can
                register, log in, open the messaging screen, and send messages.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft reveal" id="users">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Target Users</p>
              <h2>Designed for the communities that communicate every day.</h2>
            </div>

            <div className="card-grid">
              {targetUsers.map((user, index) => (
                <article className="feature-card" key={user.title}>
                  <span className="card-icon">{index + 1}</span>
                  <h3>{user.title}</h3>
                  <p>{user.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="why-payom">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Why Payom</p>
              <h2>A practical start with a bigger local mission.</h2>
            </div>

            <div className="card-grid">
              {reasons.map((reason) => (
                <article className="feature-card" key={reason.title}>
                  <span className="pulse-icon" aria-hidden="true"></span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft reveal" id="technology">
          <div className="section-inner two-column">
            <div>
              <p className="section-kicker">Technology</p>
              <h2>Focused stack for the MVP stage.</h2>
            </div>
            <div className="tech-list">
              {technologies.map(([label, value]) => (
                <div className="tech-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="roadmap">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">Roadmap</p>
              <h2>From MVP messenger to local digital platform.</h2>
            </div>

            <div className="roadmap-list">
              {roadmap.map((item, index) => (
                <article
                  className="roadmap-item"
                  key={item.stage}
                  style={{ '--item-index': index }}
                >
                  <span className="stage-label">{item.stage}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft reveal" id="vision">
          <div className="section-inner vision-panel">
            <p className="section-kicker">Long-Term Vision</p>
            <h2>One useful digital ecosystem for Tajikistan.</h2>
            <p>
              Payom starts as a messenger, but the long-term vision is bigger.
              The future goal is to build one useful digital ecosystem for
              Tajikistan - starting with communication, then expanding into
              education, business, payments, public services, and local
              community tools.
            </p>
            <strong className="vision-line">
              Messenger first. Ecosystem later.
            </strong>
            <div className="ecosystem-grid" aria-label="Payom ecosystem areas">
              {ecosystemItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section reveal" id="contact">
          <div className="section-inner contact-panel">
            <div>
              <p className="section-kicker">Support / Investment</p>
              <h2>Looking for Support</h2>
              <p>
                Payom is currently at the MVP stage. The next goal is to improve
                the product, test it with real users, and prepare it for wider
                use. Support can help with development, UI/UX design, testing,
                security, server infrastructure, and launch preparation.
              </p>
            </div>
            <a
              className="button button-primary"
              href="mailto:islamjonibragimov@gmail.com?subject=Interested%20in%20Payom%20Messenger&body=Hello%20Islomzhon%2C%20I%20am%20interested%20in%20learning%20more%20about%20Payom."
            >
              Contact Founder
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="section-inner footer-inner">
          <strong>Payom Messenger</strong>
          <span>Founder: Islomzhon Ibragimov</span>
          <span>Dushanbe Innovation Institute</span>
        </div>
      </footer>
    </div>
  )
}

export default App
