"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const FloatingNav = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="floating-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <ul>
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={item.href}>{item.name}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

const AnimatedButton = ({ children, href, primary = true, icon }) => (
  <motion.a
    href={href}
    className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
    whileHover={{
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      backgroundColor: primary ? "#3a86ff" : "rgba(58, 134, 255, 0.1)",
    }}
    whileTap={{ y: -2, scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {icon && <span className="btn-icon">{icon}</span>}
    {children}
  </motion.a>
);

const TechStack = () => {
  const techItems = [
    { name: "Java", icon: "☕", color: "#f89820" },
    { name: "Spring Boot", icon: "🌱", color: "#6db33f" },
    { name: "Microservices", icon: "🧩", color: "#2496ed" },
    { name: "Docker", icon: "🐳", color: "#2496ed" },
    { name: "Kubernetes", icon: "☸️", color: "#326ce5" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
  ];

  return (
    <div className="tech-stack">
      {techItems.map((item, index) => (
        <motion.div
          key={index}
          className="tech-item"
          style={{ borderColor: item.color }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -5,
            boxShadow: `0 5px 15px ${item.color}33`,
          }}
        >
          <span className="tech-icon" style={{ color: item.color }}>
            {item.icon}
          </span>
          <span className="tech-name">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

const CodeAnimation = () => {
  const codeLines = [
    "@RestController",
    '@RequestMapping("/api/v1")',
    "public class UserController {",
    "  @Autowired",
    "  private UserService userService;",
    "",
    "  @GetMapping",
    "  public ResponseEntity<List<User>> getUsers() {",
    "    return ResponseEntity.ok(userService.getAll());",
    "  }",
    "}",
  ];

  return (
    <motion.div
      className="code-window"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="code-header">
        <div className="code-dots">
          <span style={{ backgroundColor: "#ff5f56" }}></span>
          <span style={{ backgroundColor: "#ffbd2e" }}></span>
          <span style={{ backgroundColor: "#27c93f" }}></span>
        </div>
        <div className="code-title">UserController.java</div>
      </div>
      <div className="code-content">
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className="code-line"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.8, duration: 0.3 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
      <div className="code-footer">
        <div className="terminal-cursor"></div>
      </div>
    </motion.div>
  );
};

const BackgroundAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      className="background-animation"
      ref={ref}
      style={{ y: backgroundY, opacity }}
    >
      <div className="gradient-circle large"></div>
      <div className="gradient-circle medium"></div>
      <div className="gradient-circle small"></div>
    </motion.div>
  );
};

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ staggerChildren: 0.05 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const interactiveElements = document.querySelectorAll(
        "a, button, .tech-item"
      );
      const isHovering = Array.from(interactiveElements).some((el) =>
        el.contains(e.target)
      );
      setIsHovering(isHovering);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className={`cursor-follower ${isHovering ? "hovering" : ""}`}
      animate={{
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", mass: 0.1 }}
    />
  );
};

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="portfolio">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="loader-circle"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CursorFollower />
      <BackgroundAnimation />
      <FloatingNav />

      <motion.section
        id="home"
        className="hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5 + Math.random() * 10,
              }}
            />
          ))}
        </div>

        <div className="container">
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.div className="greeting" variants={itemVariants}>
              <span className="wave">👋</span> Hi there! I'm
            </motion.div>

            <motion.h1
              className="title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: 0.2,
                duration: 0.8,
              }}
            >
              <AnimatedText text="Senior Java" />
              <br />
              <span className="highlight">
                <TypeAnimation
                  sequence={[
                    "Backend Engineer",
                    2000,
                    "Spring Boot Expert",
                    2000,
                    "Microservices Architect",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p className="description" variants={itemVariants}>
              I build <span className="highlight-text">high-performance</span>,{" "}
              <span className="highlight-text">scalable</span> backend systems
              with a focus on{" "}
              <span className="highlight-text">clean architecture</span> and{" "}
              <span className="highlight-text">optimal performance</span>.
            </motion.p>

            <motion.div className="buttons" variants={itemVariants}>
              <AnimatedButton href="#projects" primary={true} icon="🚀">
                View Projects
              </AnimatedButton>
              <AnimatedButton href="#contact" primary={false} icon="📧">
                Contact Me
              </AnimatedButton>
            </motion.div>

            <motion.div className="tech-stack-wrapper" variants={itemVariants}>
              <TechStack />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
          >
            <div className="card">
              <div className="card-content">
                <motion.div
                  className="emoji"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 5,
                  }}
                >
                  👨‍💻
                </motion.div>
                <h3>
                  <TypeAnimation
                    sequence={[
                      "5+ Years Experience",
                      2000,
                      "20+ Projects Completed",
                      2000,
                      "100% Client Satisfaction",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h3>
                <p>Java • Spring Boot • Microservices • Cloud</p>
              </div>
              <CodeAnimation />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
