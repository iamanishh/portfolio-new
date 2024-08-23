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
  { name: "Java", component: FaJava },
  { name: "Spring", component: SiSpring },
  { name: "Spring Boot", component: SiSpringboot },
  { name: "Hibernate", component: SiHibernate },
  { name: "React", component: FaReact },
  { name: "JavaScript", component: FaJs },
  { name: "HTML5", component: FaHtml5 },
  { name: "CSS3", component: FaCss3Alt },
  { name: "SQL", component: FaDatabase },
  { name: "MongoDB", component: SiMongodb },
  { name: "Redis", component: SiRedis },
  { name: "Kafka", component: SiApachekafka },
  { name: "Git", component: FaGit },
  { name: "GitHub", component: FaGithub },
  { name: "Linux", component: FaLinux },
  { name: "AWS", component: FaAws },
  { name: "Docker", component: FaDocker },
  { name: "Kubernetes", component: SiKubernetes },
];
const TechIcons = () => {
  return (
    <div className="tech-icons-container">
      {icons.map(({ name, component: IconComponent }) => (
        <div key={name} className="tech-icon">
          <IconComponent size={30} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
