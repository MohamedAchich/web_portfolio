const { SectionHeading, PricingCard, TextLink } = window.MidnightLimeDesignSystem_905bad;

function AboutSection({ t }) {
  const freelance = t.aboutCards[0];
  const fullTime = t.aboutCards[1];
  const goToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) window.scrollTo({ top: contact.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <section id="about" style={{ background: 'var(--canvas-light)', padding: 'var(--space-section) 0' }}>
      <div className="ds-container ml-about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-section)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <SectionHeading eyebrow={t.aboutEyebrow} size="xl" polarity="light">{t.aboutTitle}</SectionHeading>
          <p style={{ fontSize: 'var(--type-body-lg-size)', fontWeight: 'var(--type-body-lg-weight)', lineHeight: 'var(--leading-marketing)', color: 'var(--text-body)' }}>
            {t.aboutOne}
          </p>
          <p style={{ fontSize: 'var(--type-body-lg-size)', fontWeight: 'var(--type-body-lg-weight)', lineHeight: 'var(--leading-marketing)', color: 'var(--text-body)' }}>
            {t.aboutTwo} <TextLink href={PROFILE.cv}>{t.fullResume}</TextLink>.
          </p>
        </div>
        <div className="ml-about-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
          <PricingCard title={freelance.title} price={freelance.price} blurb={freelance.blurb} features={freelance.features} ctaLabel={freelance.cta} onCta={goToContact} />
          <PricingCard title={fullTime.title} price={fullTime.price} blurb={fullTime.blurb} features={fullTime.features} ctaLabel={fullTime.cta} onCta={goToContact} featured />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AboutSection });
