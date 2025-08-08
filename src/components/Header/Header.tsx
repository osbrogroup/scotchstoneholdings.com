import React from 'react';

const Header = () => (
  <header className="bg-dark/95 text-white sticky top-0 z-50 shadow-md backdrop-blur-sm">
    <nav className="container mx-auto flex items-center justify-between py-4">
      {/* Company Name Left */}
      <div className="flex-1 text-left flex items-center" style={{ fontFamily: 'Segoe UI, Changa, Arial, sans-serif' }}>
        <span
          style={{
            color: '#ff9900',
            fontSize: '1.5rem',
            fontWeight: 900,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            fontFamily: 'Segoe UI, Changa, Arial, sans-serif',
          }}
        >
          SCOTCHSTONE
        </span>
        <span className="text-white md:text-base text-sm ml-1 align-top" style={{fontSize: '0.85em', lineHeight: '1.5', position: 'relative', top: '2px'}}> HOLDINGS LTD</span>
      </div>
      {/* Menu Center - smaller font, single line */}
      <ul className="flex-1 flex justify-center space-x-5 text-sm md:text-base font-medium whitespace-nowrap" style={{ fontFamily: 'Segoe UI, Changa, Arial, sans-serif' }}>
        <li><a href="/" className="hover:text-primary transition">Home</a></li>
        <li><a href="/properties" className="hover:text-primary transition">Our Properties</a></li>
        <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
        <li><a href="/why-invest" className="hover:text-primary transition">Why Invest</a></li>
        <li><a href="/opportunities" className="hover:text-primary transition">Opportunities</a></li>
        <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
      </ul>
      {/* Phone Right */}
      <div className="flex-1 flex justify-end" style={{ fontFamily: 'Segoe UI, Changa, Arial, sans-serif' }}>
        <a href="tel:+2348012345678" className="text-sm md:text-base font-bold text-primary hover:text-white transition flex items-center">
          <span style={{ fontSize: '1.1em', marginRight: '0.4em', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5A1.75 1.75 0 019 5.75v2.5A1.75 1.75 0 017.25 10H6.5a11.5 11.5 0 005.5 5.5v-.75A1.75 1.75 0 0113.25 13h2.5A1.75 1.75 0 0117 14.75v2.5A1.75 1.75 0 0115.25 19h-2.5C4.784 19 3 17.216 3 15.25v-9.5z" />
            </svg>
          </span>
          +234 801 234 5678
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
