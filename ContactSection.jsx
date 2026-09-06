const { SectionHeading, TextInput, SelectViolet, Button, Starfield, LimeKeyword, Icon } = window.MidnightLimeDesignSystem_905bad;

function ContactSection({ t }) {
  const [sent, setSent] = React.useState(false);
  const [topic, setTopic] = React.useState('Contract work');

  const sendMessage = (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent(topic + ' from ' + firstName + ' ' + lastName);
    const body = encodeURIComponent('Name: ' + firstName + ' ' + lastName + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:' + PROFILE.email + '?subject=' + subject + '&body=' + body;
    setSent(true);
  };

  return (
    <Starfield id="contact" style={{ padding: 'var(--space-section) 0' }}>
      <div className="ds-container ml-contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-section)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <SectionHeading eyebrow={t.contactEyebrow} size="large">{t.contactTitle}</SectionHeading>
          <p style={{ fontSize: 'var(--type-body-lg-size)', lineHeight: 'var(--leading-marketing)', color: 'var(--text-on-dark-muted)' }}>
            {t.contactIntro}
          </p>
          <SelectViolet id="topic" label={t.topicLabel} value={topic} onChange={(e) => setTopic(e.target.value)} options={t.topics} />
          <a href={'mailto:' + PROFILE.email} style={{ color: 'var(--text-on-dark)', fontFamily: 'var(--font-code)', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Icon name="mail" size={18} />{PROFILE.email}
          </a>
          <a href={'https://wa.me/' + PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-on-dark)', fontFamily: 'var(--font-code)', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <Icon name="message-circle" size={18} />+216 22 601 305
          </a>
        </div>
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', padding: 'var(--pad-card)', boxShadow: 'var(--shadow-card-light)' }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', minHeight: '280px', justifyContent: 'center' }}>
              <h3 style={{ fontSize: 'var(--type-heading-md-size)', fontWeight: 'var(--type-heading-md-weight)' }}>{t.messageSent}</h3>
              <p style={{ fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--leading-ui)', color: 'var(--text-body)' }}>{t.sentCopy}</p>
              <Button onClick={() => setSent(false)} style={{ alignSelf: 'flex-start' }}>{t.sendAnother}</Button>
            </div>
          ) : (
            <form onSubmit={sendMessage} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                <TextInput id="first" label={t.firstName} placeholder="Ada" required />
                <TextInput id="last" label={t.lastName} placeholder="Lovelace" required />
              </div>
              <TextInput id="email" label={t.email} type="email" placeholder="you@company.com" required />
              <TextInput id="message" label={t.message} multiline rows={4} placeholder={t.messagePlaceholder} />
              <Button type="submit" onClick={() => {}} fullWidth>{t.sendMessage}</Button>
            </form>
          )}
        </div>
      </div>
    </Starfield>
  );
}
Object.assign(window, { ContactSection });
