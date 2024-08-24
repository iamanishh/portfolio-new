import React from "react";
import "./techIcons.scss";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
  FaGit,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
} from "react-icons/si";

const icons = [
  { name: "Java", component: FaJava, color: "#f89820" },
  { name: "Spring", component: SiSpring, color: "#6db33f" },
  { name: "Spring Boot", component: SiSpringboot, color: "#6db33f" },
  { name: "Hibernate", component: SiHibernate, color: "#6f4f28" },

  { name: "React", component: FaReact, color: "#61dafb" },
  { name: "JavaScript", component: FaJs, color: "#f7e02f" },
  { name: "HTML5", component: FaHtml5, color: "#e34c26" },
  { name: "CSS3", component: FaCss3Alt, color: "#1572b6" },

  { name: "Database", component: FaDatabase, color: "#003b6f" },
  { name: "MongoDB", component: SiMongodb, color: "#47a248" },
  { name: "Redis", component: SiRedis, color: "#d73a4a" },
  { name: "Kafka", component: SiApachekafka, color: "#231f20" },

  { name: "Git", component: FaGit, color: "#f05032" },
  { name: "GitHub", component: FaGithub, color: "#181717" },
  { name: "Linux", component: FaLinux, color: "#000000" },
  { name: "AWS", component: FaAws, color: "#ff9900" },
  { name: "Docker", component: FaDocker, color: "#0db7ed" },
  { name: "Kubernetes", component: SiKubernetes, color: "#326ce5" },
];

function TechIcons() {
  const rows = [
    icons.slice(0, 4),
    icons.slice(4, 8),
    icons.slice(8, 12),
    icons.slice(12, 18),
  ];

  return (
    <div className="tech-icons-container">
      {rows.map((row, index) => (
        <div key={index} className="icon-row">
          {row.map(({ name, component: IconComponent, color }) => (
            <div
              key={name}
              className="tech-icon"
              style={{ "--icon-color": color }}
            >
              <IconComponent size={15} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TechIcons;
