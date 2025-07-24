import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import useScrollToSection from './hooks/useScrollToSection';

function App() {
  const scrollToSection = useScrollToSection();

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="container tagline-container">
          <p className="tagline">Optimizing DeFi Yields on Starknet</p>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-background">
            <AnimatedBackground />
          </div>
          <div className="container">
            <h2>Maximize Your Crypto Returns</h2>
            <p>YieldStark provides advanced yield optimization strategies for Starknet's DeFi ecosystem</p>
            <button className="cta-button" onClick={() => scrollToSection('features')}>Get Started</button>
          </div>
        </section>
        
        <section className="features" id="features">
          <div className="container">
            <h2>Why Choose YieldStark</h2>
            <div className="feature-grid">
              <div className="feature">
                <h3>Optimized Yields</h3>
                <p>Automatically find and utilize the best yield opportunities across Starknet</p>
              </div>
              <div className="feature">
                <h3>Low Gas Fees</h3>
                <p>Benefit from Starknet's Layer 2 scaling solution with minimal transaction costs</p>
              </div>
              <div className="feature">
                <h3>Security First</h3>
                <p>Built with security as a priority, with audited smart contracts and best practices</p>
              </div>
              <div className="feature">
                <h3>User-Friendly</h3>
                <p>Simple interface designed for both beginners and experienced DeFi users</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="how-it-works" id="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Connect Wallet</h3>
                <p>Connect your Starknet wallet to get started</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Deposit Assets</h3>
                <p>Deposit your crypto assets into YieldStark vaults</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Earn Yield</h3>
                <p>Watch your assets grow as our strategies maximize your returns</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Logo size="small" />
              <p>© {new Date().getFullYear()} YieldStark. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <h3>Links</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleFooterLinkClick(e, 'home')}>Home</a></li>
                <li><a href="#features" onClick={(e) => handleFooterLinkClick(e, 'features')}>Features</a></li>
                <li><a href="#how-it-works" onClick={(e) => handleFooterLinkClick(e, 'how-it-works')}>How It Works</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Connect</h3>
              <div className="social-icons">
                <a href="#twitter">Twitter</a>
                <a href="#discord">Discord</a>
                <a href="#telegram">Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
