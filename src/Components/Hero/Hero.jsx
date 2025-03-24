import { useState, useEffect } from "react";
import "./hero.scss";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Backend System Architect";
  const [count, setCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing animation effect
  useEffect(() => {
    if (count < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + fullText[count]);
        setCount(count + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [count, fullText]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="code-background">
      {/* Animated code background */}
      <div className="matrix-background">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="code-line"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {`import java.util.*;
@RestController
@RequestMapping("/api")
public class SystemController {
    @Autowired
    private ServiceLayer service;
    
    @GetMapping("/v1/data")
    public ResponseEntity<?> getData() {
        return ResponseEntity.ok(service.process());
    }
}`}
          </div>
        ))}
      </div>

      <div className="container hero">
        <div className="hero__profile">
          <div className="profile-container">
            <div className="hero__image">
              <img
                width={120}
                src="avatar.svg"
                alt="hero"
                className="avatar-pulse"
              />
              <div className="terminal-window">
                <div className="terminal-content">
                  <p>
                    <span className="prompt">$</span> whoami
                  </p>
                  <p className="response">Manish Kumar</p>
                  <p>
                    <span className="prompt">$</span> role
                  </p>
                  <p className="response">
                    {typedText}
                    {showCursor ? "|" : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__text slide-up">
          <h2 className="section-heading">
            <span className="highlight">Backend</span> Systems Architect
          </h2>
          <p className="desc">
            A Java/Spring Boot engineer with expertise in building
            high-performance systems that power seamless user experiences.
          </p>

          <div className="tech-tags">
            <span className="tech-tag">Scalable</span>
            <span className="tech-tag">Resilient</span>
            <span className="tech-tag">High-Performance</span>
          </div>

          <div className="tech-stack">
            <div className="tech-icon java bounce">Java</div>
            <div className="tech-icon spring bounce">Spring</div>
            <div className="tech-icon aws bounce">AWS</div>
            <div className="tech-icon db bounce">SQL</div>
            <div className="tech-icon api bounce">REST</div>
          </div>
        </div>

        <div className="hero__button fade-in">
          <a href="#contact" className="btn btn-primary">
            <span className="btn-icon">&#60;/&#62;</span>
            Connect with me
          </a>
          <a href="#resume" className="btn btn-secondary">
            <span className="btn-icon">📄</span>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
