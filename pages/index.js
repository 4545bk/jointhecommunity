import Head from 'next/head';
import { useEffect, useRef } from 'react';

const LINKS = [
  {
    id: 'telegram',
    label: 'Join Our Community',
    description: 'Connect on Telegram',
    href: 'https://t.me/linumar',
    icon: '✈️',
    iconClass: 'telegram',
    external: true,
  },
  {
    id: 'website',
    label: 'Visit Our Website',
    description: 'Explore EthioXHub',
    href: '/go/website',
    icon: '🌐',
    iconClass: 'website',
    external: false,
  },
  {
    id: 'tiktok',
    label: 'Follow on TikTok',
    description: 'Watch our latest videos',
    href: 'https://tiktok.com/@ethioxhub',
    icon: '🎵',
    iconClass: 'tiktok',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Follow on Instagram',
    description: 'See our latest posts',
    href: 'https://instagram.com/ethioxhub',
    icon: '📸',
    iconClass: 'instagram',
    external: true,
  },
  {
    id: 'support',
    label: 'Contact Support',
    description: 'Get help anytime',
    href: 'mailto:support@ethioxhub.tech',
    icon: '📧',
    iconClass: 'support',
    external: true,
  },
];

function Particles() {
  return (
    <div className="particles-bg" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function LinkInBio() {
  const trackClick = (linkId) => {
    try {
      navigator.sendBeacon(
        '/api/track',
        JSON.stringify({
          event: 'link_click',
          linkId,
          timestamp: Date.now(),
          referrer: document.referrer || 'direct',
        })
      );
    } catch (e) {
      // Silent fail — analytics should never block navigation
    }
  };

  return (
    <>
      <Head>
        <title>EthioXHub — Links</title>
        <meta
          name="description"
          content="Official links for EthioXHub. Visit our website, join our community, and connect with us."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="EthioXHub — Links" />
        <meta
          property="og:description"
          content="Visit our website, join our community, and connect with us."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Particles />

      <main className="linkinbio-container">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-ring" />
            <div
              className="avatar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
              }}
            >
              ⚡
            </div>
          </div>
          <h1 className="profile-name">EthioXHub</h1>
          <p className="profile-bio">
            Ethiopian entertainment, culture & lifestyle — all in one place
          </p>
          <div className="verified-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Official
          </div>
        </section>

        {/* Links */}
        <nav className="links-list" aria-label="External links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              id={`link-${link.id}`}
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="link-button"
              onClick={() => trackClick(link.id)}
            >
              <div className={`link-icon ${link.iconClass}`}>
                {link.icon}
              </div>
              <span className="link-label">{link.label}</span>
              <span className="link-arrow">→</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-links">
            <a href="https://ethioxhub.tech/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href="https://ethioxhub.tech/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} EthioXHub. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
