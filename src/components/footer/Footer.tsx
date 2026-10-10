import { social } from '@/data/social';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#hero">
        <span className="brand__mark">CT</span>
        <span>CHANDAN THAPA</span>
      </a>
      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <div className="footer-links" aria-label="Social links">
        {social.map(({ name, url }) => (
          <a href={url} key={name} target="_blank" rel="noopener noreferrer">{name}</a>
        ))}
      </div>
      <span>© {new Date().getFullYear()} Chandan Thapa</span>
    </footer>
  );
}
