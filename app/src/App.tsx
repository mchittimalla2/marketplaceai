import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <main className="launch-page">
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />
      <div className="grid-overlay" />

      <section className="launch-content">
        <motion.div
          className="brand-animation"
          initial="hidden"
          animate="visible"
          aria-label="Marketplace AI"
        >
          <motion.span
            className="logo-letter logo-m"
            variants={{
              hidden: { x: 70, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            M
          </motion.span>

          <motion.div
            className="brand-center"
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "auto",
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            <span className="brand-name">Marketplace AI</span>
          </motion.div>

          <motion.span
            className="logo-letter logo-i"
            variants={{
              hidden: { x: -70, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            I
          </motion.span>
        </motion.div>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          Build smarter. Automate faster. Grow with AI.
        </motion.p>

        <motion.div
          className="coming-soon"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <span className="status-dot" />
          Coming Soon
        </motion.div>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          AI-powered websites, business applications, CRM experiences,
          e-commerce solutions and intelligent automation.
        </motion.p>
      </section>

      <motion.footer
        className="launch-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
      >
        © {new Date().getFullYear()} Marketplace AI
      </motion.footer>
    </main>
  );
}

export default App;