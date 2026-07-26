import { motion, useReducedMotion } from "framer-motion";
import "./App.css";

const premiumEase = [0.22, 1, 0.36, 1] as const;

function App() {
  const reduceMotion = useReducedMotion();
  const delay = reduceMotion ? 0 : 0.65;
  const duration = reduceMotion ? 0 : 1.05;
  const later = (value: number) => (reduceMotion ? 0 : value);

  return (
    <main className="launch-page">
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />
      <div className="grid-overlay" />

      <section className="launch-content">
        <motion.div
          className="brand-animation"
          initial={reduceMotion ? false : "compact"}
          animate="expanded"
          variants={{
            compact: { columnGap: "var(--brand-compact-gap)" },
            expanded: {
              columnGap: "var(--brand-expanded-gap)",
              transition: { delay, duration, ease: premiumEase },
            },
          }}
          aria-label="Marketplace AI"
        >
          <motion.img
            className="brand-mark brand-mark-left"
            src="/branding/marketplaceai-mark-left.png"
            alt=""
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: later(0.4) }}
          />

          <motion.div
            className="brand-center"
            variants={{
              compact: { maxWidth: 0, opacity: 0, clipPath: "inset(0 50% 0 50%)" },
              expanded: {
                maxWidth: "var(--brand-name-width)",
                opacity: 1,
                clipPath: "inset(0 0% 0 0%)",
                transition: { delay, duration, ease: premiumEase },
              },
            }}
          >
            <span className="brand-name">Marketplace AI</span>
          </motion.div>

          <motion.img
            className="brand-mark brand-mark-i"
            src="/branding/marketplaceai-mark-i.png"
            alt=""
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: later(0.4) }}
          />
        </motion.div>

        <motion.p
          className="tagline"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: later(1.65), duration: later(0.8) }}
        >
          Build smarter. Automate faster. Grow with AI.
        </motion.p>

        <motion.div
          className="coming-soon"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: later(2.05), duration: later(0.8) }}
        >
          <span className="status-dot" />
          Coming Soon
        </motion.div>

        <motion.p
          className="description"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: later(2.45), duration: later(1) }}
        >
          AI-powered websites, business applications, CRM experiences,
          e-commerce solutions and intelligent automation.
        </motion.p>
      </section>

      <motion.footer
        className="launch-footer"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: later(2.75), duration: later(1) }}
      >
        © {new Date().getFullYear()} Marketplace AI
      </motion.footer>
    </main>
  );
}

export default App;
