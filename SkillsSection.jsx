const { SectionHeading, Starfield, LimeKeyword } = window.MidnightLimeDesignSystem_905bad;

/* Logo-bearing chip, styled to match the shared Pill component's language
   (caption type, xs radius) since Pill itself has no icon slot. */
function SkillChip({ logo, name, tone }) {
  const tones = {
    dark: { background: 'var(--color-surface-night)', color: 'var(--color-on-primary)', border: '1px solid var(--color-hairline-violet)' },
    violet: { background: 'var(--tag-fill)', color: 'var(--color-on-primary)', border: '1px solid var(--color-accent-violet-deep)' }
  };
  return (
    <span style={{
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--type-caption-size)',
      fontWeight: 'var(--type-caption-weight)',
      lineHeight: 'var(--type-caption-lh)',
      padding: 'var(--space-xs) var(--space-sm) var(--space-xs) var(--space-xs)',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-xs)',
      ...tones[tone]
    }}>
      <span style={{ width: 20, height: 20, borderRadius: 'var(--radius-full)', background: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
        <img src={logo} alt="" style={{ width: '72%', height: '72%', objectFit: 'contain' }} />
      </span>
      {name}
    </span>
  );
}

function SkillsSection({ t }) {
  return (
    <Starfield id="skills" style={{ padding: 'var(--space-section) 0' }}>
      <div className="ds-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHeading eyebrow={t.skillsEyebrow} size="large">{t.skillsTitle}</SectionHeading>
        <div className="ml-skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-section)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <span style={{ fontSize: 'var(--type-micro-cap-size)', fontWeight: 'var(--type-micro-cap-weight)', lineHeight: 'var(--type-micro-cap-lh)', letterSpacing: 'var(--type-micro-cap-ls)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>{t.frameworks}</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
              {LANGUAGES_FRAMEWORKS.map((s) => <SkillChip key={s.name} logo={s.logo} name={s.name} tone="dark" />)}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <span style={{ fontSize: 'var(--type-micro-cap-size)', fontWeight: 'var(--type-micro-cap-weight)', lineHeight: 'var(--type-micro-cap-lh)', letterSpacing: 'var(--type-micro-cap-ls)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>{t.tools}</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
              {TOOLS.map((t) => <SkillChip key={t.name} logo={t.logo} name={t.name} tone="violet" />)}
            </div>
          </div>
        </div>
      </div>
    </Starfield>
  );
}
Object.assign(window, { SkillsSection });
