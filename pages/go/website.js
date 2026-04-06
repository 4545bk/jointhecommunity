import { useEffect, useState } from 'react';
import Head from 'next/head';

const DESTINATION = 'https://ethioxhub.tech';
const DELAY_MS = 3000;

export default function RedirectToWebsite() {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    // Log the visit server-side
    try {
      navigator.sendBeacon(
        '/api/track',
        JSON.stringify({
          event: 'redirect_view',
          destination: 'website',
          timestamp: Date.now(),
          referrer: document.referrer || 'direct',
        })
      );
    } catch (e) {
      // Silent fail
    }

    // Smooth progress bar — update every 30ms
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (DELAY_MS / 30);
        return Math.min(next, 100);
      });
    }, 30);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    // Navigate after delay
    const timeout = setTimeout(() => {
      window.location.href = DESTINATION;
    }, DELAY_MS);

    return () => {
      clearInterval(progressInterval);
      clearInterval(countdownInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Linu Mar Entertainment — Continue to Website</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="redirect-container">
        <div className="redirect-card">
          <div className="redirect-logo">⚡</div>

          <h1>You&apos;re heading to Linu Mar Entertainment</h1>

          <p className="redirect-subtitle">
            Taking you to our website
          </p>

          <div className="redirect-destination">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            ethioxhub.tech
          </div>

          <div className="countdown">{timeLeft}</div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <a href={DESTINATION} className="manual-link" id="manual-redirect">
            Click here if not redirected automatically
          </a>

          <div className="redirect-branding">
            <span>⚡</span>
            <span>Linu Mar Entertainment</span>
          </div>
        </div>
      </main>
    </>
  );
}
