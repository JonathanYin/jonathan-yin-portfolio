import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M7.5 10.5v7m0-9.2v.2" />
      <path d="M11.5 17.5v-5a2 2 0 0 1 4 0v5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path d="M9 19.5c-4 .7-4-2.5-5-3m10 4v-2.9c0-.8.1-1.2.6-1.8 2 .2 4-1.3 4-3.4 0-1-.3-1.9-.9-2.6.3-1 .4-1.9 0-2.8-1.1 0-2.2.8-3 1.3a10.3 10.3 0 0 0-5.4 0c-.8-.5-1.9-1.3-3-1.3-.4.9-.3 1.8 0 2.8-.6.7-.9 1.6-.9 2.6 0 2 2 3.6 4 3.4.5.6.6 1 .6 1.8v2.9" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jonathan-yin-", icon: <LinkedInIcon /> },
  { label: "Email", href: "mailto:jonathanyin66@gmail.com", icon: <MailIcon /> },
  { label: "GitHub", href: "https://github.com/jonathanyin", icon: <GithubIcon /> },
];

export type RailVariant = "home" | "contact";

interface RailProps {
  variant: RailVariant;
}

export function Rail({ variant }: RailProps) {
  const isHome = variant === "home";

  return (
    <aside className={`rail rail--${variant}`}>
      {isHome ? (
        <div className="rail__socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="rail__social-link"
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      ) : (
        <Link href="/" className="rail__home-link" aria-label="Back to home">
          Home
        </Link>
      )}
      <div className="rail__divider" aria-hidden />
      <span className="rail__meta" aria-label="Copyright 2026">
        © 2026
      </span>
    </aside>
  );
}
