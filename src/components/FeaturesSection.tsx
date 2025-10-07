import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type Feature = {
  icon: string; // font awesome class, e.g., 'fa-solid fa-vault'
  title: string;
  description: string;
  details: string[];
  delay: string;
  badge?: string;
};

const features: Feature[] = [
  {
    icon: 'fa-solid fa-lock',
    title: 'YieldStark Vault',
    description: 'A dedicated vault for each user to deposit WBTC and earn optimized yield.',
    details: ['Isolated vault per user', 'Transparent balance and ROI', 'One-click deposit/withdraw', 'Gas‑efficient execution'],
    delay: '0ms',
  },
  {
    icon: 'fa-solid fa-arrows-rotate',
    title: 'Cross-protocol Rebalancing',
    description: 'Automatically rebalance your Bitcoin across multiple DeFi protocols for optimal yield.',
    details: ['Multi-protocol support', 'Automated rebalancing', 'Yield optimization', 'Risk management'],
    delay: '100ms',
  },
  {
    icon: 'fa-solid fa-coins',
    title: 'Bitcoin Staking',
    description: 'Stake your Bitcoin to earn rewards while maintaining full custody of your assets.',
    details: ['Non-custodial staking', 'Competitive rewards', 'Flexible terms', 'Secure infrastructure'],
    delay: '200ms',
  },
  {
    icon: 'fa-solid fa-link',
    title: 'Cross-Chain Bitcoin',
    description: 'Bridge your Bitcoin across different blockchains seamlessly and securely.',
    details: ['Multi-chain support', 'Secure bridging', 'Low fees', 'Fast transactions'],
    delay: '300ms',
    badge: 'Coming soon',
  },
  {
    icon: 'fa-solid fa-exchange-alt',
    title: 'Atomic Swap',
    description: 'Execute trustless swaps between Bitcoin and other cryptocurrencies instantly.',
    details: ['Trustless swaps', 'Instant execution', 'No intermediaries', 'Secure protocol'],
    delay: '400ms',
    badge: 'Coming soon',
  },
  {
    icon: 'fa-solid fa-building',
    title: 'Tokenized & Institutional Products',
    description: 'Access institutional-grade Bitcoin products and tokenized investment opportunities.',
    details: ['Institutional access', 'Tokenized products', 'Regulatory compliance', 'Professional tools'],
    delay: '500ms',
    badge: 'Coming soon',
  },
];

// Animation variants with proper typing
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 17
    }
  }
};

const iconHover: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 17
    }
  }
};

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="features-section" ref={sectionRef}>
      <motion.section 
        className="features-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            YieldStark, Reimagined for Bitcoin Yield
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Optimize WBTC across protocols with an agent-driven vault, cross-chain readiness,
            and a UX designed for one-click actions.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="features-grid container"
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className={`feature-card ${isVisible ? 'show' : ''}`}
            variants={cardHover}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="icon-box"
              variants={iconHover}
            >
              <i className={f.icon}></i>
            </motion.div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
            <ul>
              {f.details.map((detail, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: (i * 0.1) + (idx * 0.1) + 0.5 }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
            {f.badge && (
              <motion.div 
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: (i * 0.1) + 0.8 }}
              >
                {f.badge}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}