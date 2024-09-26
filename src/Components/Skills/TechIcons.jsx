import React from "react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNetworkWired,
  FaCubes,
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiKubernetes,
  SiMysql,
} from "react-icons/si";

const techData = {
  languagesLibraries: [
    { icon: FaJava, color: "#007396", name: "Java" },
    { icon: SiSpring, color: "#6DB33F", name: "Spring" },
    { icon: SiSpringboot, color: "#6DB33F", name: "Spring Boot" },
    { icon: SiHibernate, color: "#59666C", name: "Hibernate" },
    { icon: FaNetworkWired, color: "#4CAF50", name: "APIs" },
    { icon: FaCubes, color: "#FF5722", name: "Microservices" },
    { icon: FaReact, color: "#61DAFB", name: "ReactJS" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaHtml5, color: "#E34F26", name: "HTML/CSS" },
  ],
  toolsTechnologies: [
    { icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiRedis, color: "#DC382D", name: "Redis" },
    { icon: SiApachekafka, color: "#231F20", name: "Apache Kafka" },
    { icon: FaGithub, color: "#181717", name: "GitHub" },
    { icon: FaLinux, color: "#FCC624", name: "Linux" },
    { icon: FaDocker, color: "#2496ED", name: "Docker" },
    { icon: SiKubernetes, color: "#326CE5", name: "Kubernetes" },
    { icon: FaAws, color: "#FF9900", name: "AWS" },
  ],
};

const TechIcons = () => {
  return (
    <div className="tech-icons">
      {Object.entries(techData).map(([category, techList]) => (
        <div key={category} className="tech-row">
          {techList.map(({ icon: Icon, color, name }, index) => (
            <div key={index} className="tech-item">
              <Icon style={{ color }} />
              <p className="tech-name">{name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(TechIcons);
