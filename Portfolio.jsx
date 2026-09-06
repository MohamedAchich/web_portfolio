const { NavBar, SiteFooter, Button, Icon } = window.MidnightLimeDesignSystem_905bad;

function Portfolio() {
  const [active, setActive] = React.useState('Home');
  const [resumeOpen, setResumeOpen] = React.useState(false);
  const [language, setLanguage] = React.useState(() => window.localStorage.getItem('portfolio-language') || 'en');
  const [languageOpen, setLanguageOpen] = React.useState(false);
  const t = I18N[language];
  const go = (label) => {
    const key = NAV_ITEMS.includes(label) ? label : NAV_ITEMS.find((item) => t.nav[item] === label) || 'Home';
    setActive(key);
    const el = document.getElementById(key.toLowerCase());
    if (el) window.scrollTo({ top: key === 'Home' ? 0 : el.offsetTop - 72, behavior: 'smooth' });
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);
  const handleResumeLink = (event) => {
    const link = event.target.closest('a[href="#resume-options"]');
    if (link) {
      event.preventDefault();
      setResumeOpen(true);
    }
  };
  return (
    <div onClick={handleResumeLink}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <NavBar polarity="dark" wordmark={t.profileName} items={NAV_ITEMS.map((item) => t.nav[item])} activeItem={t.nav[active]} onNavigate={go}
            ctaLabel={t.downloadResume} ctaHref={PROFILE.cv}
            ctaAddon={<div style={{ position: 'relative' }}>
              <Button variant="inverted" halo onClick={() => setLanguageOpen(!languageOpen)} aria-label={t.language} title={t.language}><Icon name="globe-2" size={16} /></Button>
              {languageOpen ? (
                <div role="menu" style={{ position: 'absolute', top: '42px', right: 0, display: 'flex', flexDirection: 'column', minWidth: '130px', padding: 'var(--space-xs)', background: 'var(--surface-card-dark)', border: '1px solid var(--border-card-dark)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-card-dark)' }}>
                  {['en', 'fr', 'ar'].map((key) => <button key={key} type="button" role="menuitem" onClick={() => { setLanguage(key); setLanguageOpen(false); }}
                    style={{ border: 0, background: key === language ? 'var(--color-accent-violet-deep)' : 'transparent', color: 'var(--text-on-dark)', padding: 'var(--space-sm)', textAlign: 'start', cursor: 'pointer' }}>{t.languages[key]}</button>)}
                </div>
              ) : null}
            </div>} />
          </div>
      <Hero t={t} onNavigate={go} onResume={() => setResumeOpen(true)} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ProjectsSection t={t} language={language} />
      <BlogsSection t={t} />
      <ContactSection t={t} />
      <SiteFooter polarity="dark" wordmark={t.profileName} legal={'© 2026 ' + t.profileName + ' · ' + t.legal}
        socials={[
          { icon: 'code', label: 'GitHub', href: PROFILE.github },
          { icon: 'briefcase', label: 'LinkedIn', href: PROFILE.linkedin },
          { icon: 'mail', label: 'Email', href: 'mailto:' + PROFILE.email }
        ]}
        columns={[
          { title: t.nav.Home, links: NAV_ITEMS.map((l) => ({ label: t.nav[l], href: '#' + l.toLowerCase() })) },
          { title: t.footerProjects, links: PROJECTS.map((p) => ({ label: p.name })) },
          { title: t.footerElsewhere, links: [{ label: 'GitHub', href: PROFILE.github }, { label: 'LinkedIn', href: PROFILE.linkedin }, { label: t.downloadResume, href: PROFILE.cv }] }
        ]} />
      {resumeOpen ? (
        <div role="dialog" aria-modal="true" aria-label={t.chooseResume} onClick={() => setResumeOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-xl)', background: 'rgba(21,15,35,0.72)' }}>
          <div onClick={(event) => event.stopPropagation()} style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', padding: 'var(--pad-card)', background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card-light)' }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--type-heading-md-size)' }}>{t.chooseResume}</h2>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <a href={PROFILE.cvEnglish} download style={{ flex: '1 1 140px', textAlign: 'center', padding: 'var(--space-md)', background: 'var(--color-accent-violet-mid)', color: 'var(--color-on-primary)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 700 }}>{t.englishCv}</a>
              <a href={PROFILE.cvFrench} download style={{ flex: '1 1 140px', textAlign: 'center', padding: 'var(--space-md)', background: 'var(--color-accent-violet-mid)', color: 'var(--color-on-primary)', borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: 700 }}>{t.frenchCv}</a>
            </div>
            <Button onClick={() => setResumeOpen(false)} style={{ alignSelf: 'flex-start' }}>{t.cancel}</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);
