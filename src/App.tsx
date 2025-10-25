import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import useScrollToSection from './hooks/useScrollToSection';
import WaveBackground from './components/svg/WaveBackground';
import YieldOptimizationIcon from './components/svg/YieldOptimizationIcon';
import SimplifiedExperienceIcon from './components/svg/SimplifiedExperienceIcon';
import SecurityFirstIcon from './components/svg/SecurityFirstIcon';
import LowGasIcon from './components/svg/LowGasIcon';
import heroImage from './illustrations/hero_image.png';
import FeaturesSection from './components/FeaturesSection';
import btcImage from './illustrations/bitcoin.png';
import joinVideo from './illustrations/join.mp4';

function App() {
  const scrollToSection = useScrollToSection();
  const heroRef = useRef<HTMLElement | null>(null);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? 0;
      setIsNavbarSticky(window.scrollY > heroHeight - 1);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="App">
      <div className={`hero-navbar-overlay ${isNavbarSticky ? 'sticky' : ''}`}>
        <Navbar />
        </div>
      
      <main role="main">
        <section className="hero" id="home" aria-labelledby="hero-heading" ref={heroRef}>
          <div className="hero-background">
            <AnimatedBackground />
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 id="hero-heading" className="h2-style">Unifying Bitcoin DeFi Across Platforms</h1>
                <p>Seamlessly connect and optimize your Bitcoin across multiple DeFi protocols with intelligent automation and cross-platform yield strategies.</p>
                <div className="hero-actions">
                  <button className="cta-button" onClick={() => scrollToSection('product-stack')} aria-label="Get Started with YieldStark">Get Started</button>
                  <a href="#vision" className="vision-link">Our vision</a>
                </div>
              </div>
              <div className="hero-visual-container" aria-hidden="true">
                <img src={heroImage} alt="YieldStark Hero" className="hero-image" />
              </div>
            </div>
          </div>
          <div className="wave-container">
            <WaveBackground />
          </div>
        </section>
        
        {/* Features */}
        <FeaturesSection />

        {/* Bitcoin importance section */}
        <section className="btc-importance" aria-labelledby="btc-importance-heading">
          <div className="container">
            <h2 id="btc-importance-heading">Bitcoin is the Most Important<br/>Asset of Our Generation</h2>
            <div className="btc-content">
              <div className="btc-image" aria-hidden="true">
                <img src={btcImage} alt="Stylized Bitcoin art" />
              </div>
              <div className="btc-copy">
                <p>
                  Bitcoin reimagined global finance built upon mathematical guarantees, not trust in people.
                </p>
                <p>
                  It inspired a $trillion+ ecosystem of blockchains and applications, yet barely participates in the
                  onchain revolution it sparked.
                </p>
                <p>
                  $2 trillion BTC sits in cold wallets; the ecosystem sees limited innovation. YieldStark is here to
                  change this.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Waitlist - simple form with video illustration */}
        <section className="waitlist" id="waitlist" aria-labelledby="waitlist-heading">
          <div className="container">
            <div className="waitlist-grid">
              <div className="waitlist-media" aria-hidden="true">
                <video className="waitlist-video" src={joinVideo} autoPlay muted loop playsInline preload="auto" />
                  </div>
              <div className="waitlist-form">
                <h2 id="waitlist-heading">Join Waitlist</h2>
                <form 
                  action={process.env.REACT_APP_FORMSPREE_ENDPOINT}
                  method="POST"
                >
                  <label htmlFor="name">Name</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Enter your name" 
                    required
                    autoComplete="name"
                  />
                  <label htmlFor="email">Email</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    autoComplete="email"
                  />
                  <button 
                    type="submit" 
                    className="cta-button"
                    onClick={() => setIsSubmitting(true)}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Joining...
                      </>
                    ) : (
                      'Join waitlist'
                    )}
                  </button>
                </form>
                <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '12px' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer id="contact" role="contentinfo">
        <div className="footer-top">
        <div className="container">
            <div className="footer-copyright">
              <p>© {new Date().getFullYear()} YieldStark. All rights reserved.</p>
            </div>
            <div className="footer-social">
                <a href="https://x.com/YieldStark" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://discord.gg/yieldstark" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <i className="fa-brands fa-discord"></i>
              </a>
              <a href="https://t.me/yieldstark" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-main">
        <div className="container">
          <div className="footer-content">
              <div className="footer-about">
                <h3>About YieldStark</h3>
                <p>YieldStark is building the future of Bitcoin DeFi, unlocking the full potential of the most important asset of our generation through intelligent automation and cross-platform yield strategies.</p>
                <p>Founded in 2025, YieldStark pioneers Bitcoin's integration into DeFi with advanced vault technology, cross-protocol rebalancing, and institutional-grade security.</p>
                <p>Today, YieldStark is building full-stack infrastructure to accelerate onchain BTC adoption by holders, protocols, and platforms. Built and backed by digital asset leaders, including top DeFi protocols, institutions, and exchanges.</p>
            </div>
              
              <div className="footer-links">
                <h3>YieldStark</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleFooterLinkClick(e, 'home')}>Home</a></li>
                <li><a href="#features" onClick={(e) => handleFooterLinkClick(e, 'features')}>Features</a></li>
                  <li><a href="#waitlist" onClick={(e) => handleFooterLinkClick(e, 'waitlist')}>Waitlist</a></li>
                <li><a href="#docs">Documentation</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#brand">Brand Kit</a></li>
                </ul>
              </div>
              
              <div className="footer-products">
                <h3>Products</h3>
                <ul>
                  <li><a href="#app">YieldStark App</a></li>
                  <li><a href="#vault">YieldStark Vault</a></li>
                  <li><a href="#rebalancing">Cross-Protocol Rebalancing</a></li>
                  <li><a href="#staking">Bitcoin Staking</a></li>
                  <li><a href="#bridge">Cross-Chain Bridge</a></li>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#audits">Audits</a></li>
                </ul>
              </div>
              
              <div className="footer-legal">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#terms">Terms & Conditions</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#cookies">Cookie Policy</a></li>
                  <li><a href="#disclaimer">Risk Disclaimer</a></li>
                  <li><a href="#compliance">Compliance</a></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
