import { FaDocker, FaAws, FaJenkins, FaGithub } from "react-icons/fa";
import {
  SiKubernetes,
  SiMysql,
  SiPostman,
  SiApachekafka,
  SiRedis,
  SiGithubactions,
} from "react-icons/si";

import "./skills.scss";

const Tools = () => {
  const tools = [
    { id: "github", icon: <FaGithub style={{ color: "#181717" }} /> },
    { id: "mysql", icon: <SiMysql style={{ color: "#4479A1" }} /> },
    { id: "postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
    { id: "docker", icon: <FaDocker style={{ color: "#2496ED" }} /> },
    { id: "kubernetes", icon: <SiKubernetes style={{ color: "#326CE5" }} /> },
    { id: "kafka", icon: <SiApachekafka style={{ color: "#231F20" }} /> },
    { id: "redis", icon: <SiRedis style={{ color: "#DC382D" }} /> },
    { id: "aws", icon: <FaAws style={{ color: "#FF9900" }} /> },
    { id: "jenkins", icon: <FaJenkins style={{ color: "#D24939" }} /> },
    { id: "cicd", icon: <SiGithubactions style={{ color: "#2088FF" }} /> },
  ];

  return (
    <div className="tools">
      <p className="headd">Tools I Use</p>
      <div className="tools__list">
        {tools.map((tool, index) => (
          <div key={index} className="tools__item">
            {tool.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
