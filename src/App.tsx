import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import useScrollToSection from './hooks/useScrollToSection';
import WaveBackground from './components/svg/WaveBackground';
import HeroVisual from './components/HeroVisual';
import './components/HeroVisual.css';
import YieldOptimizationIcon from './components/svg/YieldOptimizationIcon';
import SimplifiedExperienceIcon from './components/svg/SimplifiedExperienceIcon';
import SecurityFirstIcon from './components/svg/SecurityFirstIcon';
import LowGasIcon from './components/svg/LowGasIcon';

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
          <p className="tagline">Smart WBTC yield automation on Starknet</p>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-background">
            <AnimatedBackground />
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h2>Maximize Your Crypto Returns</h2>
                <p>Deposit once, earn more through intelligent rebalancing across <a href="https://vesu.xyz" target="_blank" rel="noopener noreferrer">@vesuxyz</a> and <a href="https://ekubo.org" target="_blank" rel="noopener noreferrer">@EkuboProtocol</a></p>
                <button className="cta-button" onClick={() => scrollToSection('features')}>Get Started</button>
              </div>
              <div className="hero-visual-container">
                <HeroVisual />
              </div>
            </div>
          </div>
          <div className="wave-container">
            <WaveBackground />
          </div>
        </section>
        
        <section className="features" id="features">
          <div className="container">
            <h2>Why Choose YieldStark</h2>
            <div className="feature-grid">
              <div className="feature">
                <YieldOptimizationIcon width={80} height={80} className="feature-icon" />
                <h3>Smart Yield Optimization</h3>
                <p>Intelligent rebalancing of your WBTC across multiple protocols for maximum returns</p>
              </div>
              <div className="feature">
                <SimplifiedExperienceIcon width={80} height={80} className="feature-icon" />
                <h3>Simplified Experience</h3>
                <p>Deposit once and let our automation handle the rest - no need for manual rebalancing</p>
              </div>
              <div className="feature">
                <SecurityFirstIcon width={80} height={80} className="feature-icon" />
                <h3>Security First</h3>
                <p>Built with security as a priority, leveraging the safety of Starknet's ZK infrastructure</p>
              </div>
              <div className="feature">
                <LowGasIcon width={80} height={80} className="feature-icon" />
                <h3>Low Gas Fees</h3>
                <p>Benefit from Starknet's Layer 2 scaling with minimal transaction costs for yield optimization</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="how-it-works" id="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="process-flow">
              <div className="process-step">
                <div className="step-visual">
                  <div className="step-circle">
                    <span>1</span>
                  </div>
                  <div className="step-icon-container">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                </div>
                <div className="step-content">
                  <h3>Connect Wallet</h3>
                  <p>Connect your Starknet wallet to our platform with a single click. We support all major Starknet wallets for a seamless connection experience.</p>
                </div>
              </div>
              
              <div className="flow-arrow">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              
              <div className="process-step">
                <div className="step-visual">
                  <div className="step-circle">
                    <span>2</span>
                  </div>
                  <div className="step-icon-container deposit-icon">
                    <i className="fa-solid fa-coins"></i>
                  </div>
                </div>
                <div className="step-content">
                  <h3>Deposit WBTC</h3>
                  <p>Make a single deposit of your WBTC into our smart vault. Your assets remain secure while our protocol manages them for optimal returns.</p>
                </div>
              </div>
              
              <div className="flow-arrow">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              
              <div className="process-step">
                <div className="step-visual">
                  <div className="step-circle">
                    <span>3</span>
                  </div>
                  <div className="step-icon-container earn-icon">
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                </div>
                <div className="step-content">
                  <h3>Earn Optimized Yield</h3>
                  <p>Our protocol automatically rebalances your assets between Vesu and Ekubo protocols to maximize your returns based on market conditions.</p>
                </div>
              </div>
              
              <div className="process-highlight">
                <div className="highlight-bubble">
                  <i className="fa-solid fa-robot"></i>
                  <span>Automated Rebalancing</span>
                </div>
                <div className="highlight-bubble">
                  <i className="fa-solid fa-lock"></i>
                  <span>Secure Storage</span>
                </div>
                <div className="highlight-bubble">
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  <span>Maximum Yield</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-container wave-bottom">
            <WaveBackground />
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
                <a href="https://x.com/YieldStark" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-x-twitter"></i> Twitter
                </a>
                <a href="mailto:yieldstark@gmail.com">
                  <i className="fa-regular fa-envelope"></i> Email
                </a>
                <a href="https://github.com/YieldStark" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
