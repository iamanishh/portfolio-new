// import React from "react";

// const Hero = () => {
//   return (
//     <section id="hero">
//       <div className="hero container">
//         <div className="hero__content">
//           <p>Hey, I'm Manish Kumar</p>
//           <h1 className="hero__title">Welcome to my corner of the internet!</h1>
//           <p className="hero__description">
//             {/* <strong>
//               Backend Engineer crafting scalable systems behind the scenes
//             </strong>
//             <br />
//             💡 Focused on scalable systems | 🧱 clean architecture | 🚀
//             performance-driven solutions */}
//             ⚙️ Backend Engineer crafting scalable systems | 💡 Focused on clean
//             architecture & 🚀 performance-driven solutions
//           </p>

//           {/* Buttons */}
//           <div className="hero__button">
//             <a href="#about" className="btn1">
//               <i className="ri-information-line"></i>
//               Work
//             </a>
//             <a href="#contact" className="btn1">
//               <i className="ri-mail-line"></i>
//               Say Hello
//             </a>
//           </div>

//           {/* Social Links */}
//           <div className="hero__socials">
//             <a href="#" className="hero__social-link ">
//               <i className="ri-github-fill"></i>
//             </a>
//             <a href="#" className="hero__social-link">
//               <i className="ri-linkedin-fill"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";


// Custom particle animation component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(103, 232, 249, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

// 3D rotating cube component
const RotatingCube = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    let rotation = 0;
    let animationFrame;

    const animate = () => {
      if (cubeRef.current) {
        rotation += 0.5;
        cubeRef.current.style.transform = `rotateY(${rotation}deg) rotateX(${
          rotation / 2
        }deg)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cube-container">
      <div ref={cubeRef} className="cube" />
    </div>
  );
};

// Main Hero component with enhanced styling and animations
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section id="hero">
      {/* Particle background effect */}
      <ParticleBackground />

      {/* Gradient overlay */}
      <div className="gradient-overlay" />

      {/* Content container */}
      <div className="hero container">
        <div className={`hero__content ${isVisible ? "visible" : ""}`}>
          {/* 3D Element */}
          <RotatingCube />

          {/* Introduction with animation */}
          <p className="hero__intro">
            Hey, I'm <span>Manish Kumar</span>
          </p>

          {/* Main title with highlight effect */}
          <h1 className="hero__title">Welcome to my corner of the internet!</h1>

          {/* Description with animated underline effect */}
          <div className="hero__description-container">
            <p className="hero__description">
              ⚙️ Backend Engineer crafting scalable systems | 💡 Focused on
              clean architecture & 🚀 performance-driven solutions
            </p>
            <span className="hero__description-underline" />
          </div>

          

          {/* Buttons with hover effects */}
          <div className="hero__button">
            <a href="#about" className="btn1 btn-primary">
              <span>Work</span>
            </a>
            <a href="#contact" className="btn1 btn-outline">
              <span>Say Hello</span>
            </a>
          </div>

          {/* Social Links with hover animations */}
          <div className="hero__socials">
            <a href="#" className="hero__social-link" aria-label="GitHub">
              <Github />
            </a>
            <a href="#" className="hero__social-link" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>

          {/* Scroll indicator animation */}
          <div className="scroll-indicator">
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
