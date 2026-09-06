const { FeatureCard, Pill, Button, Icon, MediaFrame, SectionHeading, LimeKeyword } = window.MidnightLimeDesignSystem_905bad;

function ProjectsSection({ t, language }) {
  const [preview, setPreview] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(0);

  const openPreview = (project) => {
    setPreview(project);
    setPreviewImage(0);
  };

  const changePreviewImage = (direction) => {
    setPreviewImage((current) => (current + direction + preview.images.length) % preview.images.length);
  };

  return (
    <section id="projects" style={{ background: 'var(--canvas-light)', padding: 'var(--space-section) 0' }}>
      <div className="ds-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHeading eyebrow={t.projectsEyebrow} size="large" polarity="light">{t.projectsTitle}</SectionHeading>
        <div className="ml-projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-xl)' }}>
          {PROJECTS.map((p) => (
            (() => { const localized = (PROJECT_TRANSLATIONS[language] || {})[p.name] || p; return (
            <FeatureCard key={p.name} tone={p.tone} eyebrow={p.eyebrow} title={p.name}
              media={
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  <img src={p.image} alt={p.name} style={{ display: 'block', width: '100%', height: '180px', objectFit: 'cover', borderRadius: 'var(--radius-card)' }} />
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                    {localized.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', gap: 'var(--space-sm)', fontSize: 'var(--type-caption-size)', lineHeight: 'var(--leading-ui)', color: 'var(--text-on-dark-muted)' }}>
                        <span aria-hidden="true" style={{ color: 'var(--color-accent-pink)' }}>&bull;</span><span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    {p.stack.map((s) => <Pill key={s} tone="dark">{s}</Pill>)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--text-on-dark)', fontFamily: 'var(--font-ui)', fontSize: 'var(--type-caption-size)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)', textDecoration: 'none' }}>
                        {p.linkLabel === 'Watch demo' ? t.demo : p.linkLabel === 'View preview' ? t.preview : 'View project'}<Icon name="arrow-up-right" size={14} />
                      </a>
                    ) : p.images ? (
                      <button type="button" onClick={() => openPreview(p)}
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--text-on-dark)', fontFamily: 'var(--font-ui)', fontSize: 'var(--type-caption-size)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-caps)' }}>
                        {t.preview}<Icon name="image" size={14} />
                      </button>
                    ) : null}
                    <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label={'Open ' + p.name + ' on GitHub'} title={t.github}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', color: 'var(--text-on-dark)', border: '1px solid var(--border-card-dark)', borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}>
                      <img src="./assets/logo/Octicons-mark-github.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '16px', height: '16px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                  </div>
                </div>
              }>
              {localized.blurb}
            </FeatureCard>); })()
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border-card)' }}>
          <SectionHeading eyebrow={t.testimonialsEyebrow} size="xl" polarity="light">{t.testimonialsTitle}</SectionHeading>
          <div className="ml-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-xl)' }}>
            {t.testimonials.map((testimonial, i) => (
              <div key={i} style={{ background: 'var(--surface-card-dark)', border: '1px solid var(--border-card-dark)', borderRadius: 'var(--radius-card)', padding: 'var(--pad-card)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <p style={{ fontSize: 'var(--type-body-md-size)', fontWeight: 'var(--type-body-md-weight)', lineHeight: 'var(--leading-ui)', color: 'var(--text-on-dark-muted)', fontStyle: 'italic', margin: 0 }}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: 'var(--type-body-strong-size)', fontWeight: 'var(--type-body-strong-weight)', lineHeight: 'var(--leading-ui)', color: 'var(--text-on-dark)' }}>{testimonial.name}</span>
                  <span style={{ fontSize: 'var(--type-caption-size)', color: 'var(--text-on-dark-muted)' }}>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {preview ? (
        <div role="dialog" aria-modal="true" aria-label={preview.name + ' preview'} onClick={() => setPreview(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(21,15,35,0.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-xl)', zIndex: 50 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '960px', width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <MediaFrame style={{ minHeight: '520px', height: 'min(72vh, 680px)', padding: 'var(--space-md)' }}>
              {preview.images ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  <img src={preview.images[previewImage]} alt={preview.name + ' screen ' + (previewImage + 1)} style={{ display: 'block', width: '100%', height: 'min(62vh, 600px)', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
                    <button type="button" onClick={() => changePreviewImage(-1)} aria-label="Previous image" title="Previous image"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--text-on-dark)', background: 'transparent', border: '1px solid var(--border-card-dark)', borderRadius: 'var(--radius-sm)' }}>
                      <Icon name="chevron-left" size={18} />
                    </button>
                    <span style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--type-caption-size)' }}>{previewImage + 1} / {preview.images.length}</span>
                    <button type="button" onClick={() => changePreviewImage(1)} aria-label="Next image" title="Next image"
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--text-on-dark)', background: 'transparent', border: '1px solid var(--border-card-dark)', borderRadius: 'var(--radius-sm)' }}>
                      <Icon name="chevron-right" size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px', padding: '0 var(--space-xl)', textAlign: 'center', color: 'var(--text-on-dark-muted)', fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--leading-ui)' }}>
                  No public screenshots yet — {preview.name} is deployed on the customer side.
                </div>
              )}
            </MediaFrame>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-heading-sm-size)', fontWeight: 700, color: 'var(--color-on-primary)' }}>{preview.name}</span>
              <Button variant="ghostOnDark" onClick={() => setPreview(null)}>{t.close}</Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
Object.assign(window, { ProjectsSection });
