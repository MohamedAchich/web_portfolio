const { Button, LimeKeyword, Pill, Icon, Starfield, MediaFrame, CodeBlock } = window.MidnightLimeDesignSystem_905bad;

function Hero({ onNavigate, onResume, t }) {
  return (
    <Starfield id="home" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
      <div className="ds-container ml-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--space-section)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <span style={{ fontSize: 'var(--type-eyebrow-size)', fontWeight: 'var(--type-eyebrow-weight)', lineHeight: 'var(--type-eyebrow-lh)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>
            {t.role} · {t.location}
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-display-hero-size)', fontWeight: 'var(--type-display-hero-weight)', lineHeight: 'var(--type-display-hero-lh)', color: 'var(--text-on-dark)', margin: 0, textWrap: 'pretty' }}>
            {t.heroTitle} <LimeKeyword>{t.heroKeyword}</LimeKeyword>
          </h1>
          <p style={{ fontSize: 'var(--type-body-lg-size)', fontWeight: 'var(--type-body-lg-weight)', lineHeight: 'var(--leading-marketing)', color: 'var(--text-on-dark-muted)', maxWidth: '52ch' }}>
            {t.blurb}
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="inverted" halo onClick={onResume}><Icon name="download" size={16} />{t.downloadResume}</Button>
            <Button variant="ghostOnDark" onClick={() => onNavigate('Projects')}>{t.viewProjects}</Button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', paddingTop: 'var(--space-sm)' }}>
            {SKILLS.map((t) => <Pill key={t} tone="dark">{t}</Pill>)}
          </div>
        </div>
        <div className="ml-hero-aside" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
          <MediaFrame tilt={0} className="ml-hero-portrait" style={{ height: '360px' }}>
            <img src="./assets/portrait.png" alt={t.profileName} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }} />
          </MediaFrame>
          <CodeBlock style={{ fontSize: '14px' }}>{'$ whoami\n' + t.whoami}</CodeBlock>
        </div>
      </div>
    </Starfield>
  );
}
Object.assign(window, { Hero });
