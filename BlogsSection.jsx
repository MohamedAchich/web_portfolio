const { SectionHeading, Pill, Starfield, LimeKeyword, Icon } = window.MidnightLimeDesignSystem_905bad;

function BlogsSection({ t }) {
  return (
    <Starfield id="blogs" style={{ padding: 'var(--space-section) 0' }}>
      <div className="ds-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xxl)' }}>
        <SectionHeading eyebrow={t.blogsEyebrow} size="large">{t.blogsTitle}</SectionHeading>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {BLOGS.map((post, i) => (
            (() => { const localized = t.blogPosts[post.slug] || post; return (
            <a key={post.slug} href={'./blogs/' + post.slug + '.html'} className="ml-blog-row ml-lift"
              style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 'var(--space-xxl)', alignItems: 'center', padding: 'var(--space-xl) 0', borderTop: '1px solid var(--border-card-dark)', borderBottom: i === BLOGS.length - 1 ? '1px solid var(--border-card-dark)' : 'none', textDecoration: 'none' }}>
              <Pill tone="dark">{t.blogTags[post.tag] || post.tag}</Pill>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-heading-md-size)', fontWeight: 'var(--type-heading-md-weight)', lineHeight: 'var(--type-heading-md-lh)', color: 'var(--text-on-dark)' }}>{localized.title}</span>
                <span style={{ fontSize: 'var(--type-body-lg-size)', fontWeight: 'var(--type-body-lg-weight)', lineHeight: 'var(--leading-marketing)', color: 'var(--text-on-dark-muted)' }}>{localized.blurb}</span>
              </div>
              <Icon name="arrow-up-right" size={18} color="var(--color-accent-lime)" />
            </a>); })()
          ))}
        </div>
      </div>
    </Starfield>
  );
}
Object.assign(window, { BlogsSection });
