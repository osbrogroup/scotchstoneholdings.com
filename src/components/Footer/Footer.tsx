import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="main-footer bg-black text-white pt-12 pb-6 px-4 border-t border-orange-500 mt-16">
    <div className="footer-row max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-20">
      {/* Brand & Social */}
      <div className="footer-brand flex-1 min-w-[220px] flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <div className="footer-logo mb-2">
          <span className="footer-logo-text text-2xl font-extrabold text-orange-500 tracking-wider block leading-tight">SCOTCH STONE</span>
          <span className="footer-logo-sub text-sm text-white/80 font-semibold tracking-widest block">HOLDINGS LTD</span>
        </div>
        <p className="footer-desc text-white/70 text-sm mb-4 max-w-xs">Your trusted partner for premium land, homes, and investment properties in Nigeria.</p>
        <div className="footer-social flex gap-3 mt-2 justify-center">
          <a href="https://wa.me/+2348122132548" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-green-400 text-2xl"><i className="fab fa-whatsapp" /></a>
          <a href="https://facebook.com/scotchstoneholdings" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-blue-400 text-2xl"><i className="fab fa-facebook-f" /></a>
          <a href="https://instagram.com/scotchstoneholdings" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-pink-400 text-2xl"><i className="fab fa-instagram" /></a>
          <a href="https://youtube.com/@scotchstoneholdings" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-red-500 text-2xl"><i className="fab fa-youtube" /></a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="footer-links-col flex-1 min-w-[180px] flex flex-col items-center text-center mb-8 md:mb-0">
        <h4 className="text-orange-400 font-bold mb-2">Quick Links</h4>
        <div className="quick-links-wrap flex flex-row gap-8 justify-center w-full">
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      {/* Contact */}
      <div className="footer-contact flex-1 min-w-[220px] flex flex-col items-center text-center">
        <h4 className="text-orange-400 font-bold mb-2">Contact</h4>
        <p className="flex items-center justify-center gap-2 text-sm mb-1"><i className="fas fa-phone text-orange-400" />+234-812-213-2548</p>
        <p className="flex items-center justify-center gap-2 text-sm mb-1"><i className="fas fa-phone text-orange-400" />+234-707-320-5724</p>
        <p className="flex items-center justify-center gap-2 text-sm mb-1"><i className="fas fa-envelope text-orange-400" /> <a href="mailto:contact_us@scotchstoneholdings.com" className="hover:underline text-white/80">contact_us@scotchstoneholdings.com</a></p>
        <p className="flex items-center justify-center gap-2 text-sm mb-1">
          <i className="fas fa-globe text-orange-400" />
          <a href="https://www.scotchstoneholdings.com" target="_blank" rel="noopener" className="hover:underline text-white/80">www.scotchstoneholdings.com</a>
        </p>
        <p className="flex items-center justify-center gap-2 text-sm"><i className="fas fa-map-marker-alt text-orange-400" /> FAI Mall (Third Floor), opposite Lakowe Golf, off Lekki/Epe Expressway, Ibeju-Lekki, Lagos State.</p>
      </div>
    </div>
    <div className="footer-bottom text-center text-white/60 text-xs mt-10">
      &copy; {new Date().getFullYear()} Scotch Stone Holdings Ltd. All rights reserved.
    </div>
    <a href="https://wa.me/+2348122132548" target="_blank" rel="noopener" className="whatsapp-float fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-green-600 z-50" aria-label="Chat on WhatsApp">
      <i className="fab fa-whatsapp text-lg" /> Chat with us
    </a>
  </footer>
);

export default Footer;