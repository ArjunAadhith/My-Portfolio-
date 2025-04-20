import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaFlutter,
  FaReact,
  FaFigma,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import {
  SiMongodb,
  SiAdobeaftereffects,
  SiSpringboot,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiBlender,
  SiUnrealengine,
  SiDavinciresolve,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import "./LogoTicker.css"; // External CSS file
import { useMemo } from "react";

const icons = [
  FaJava,
  FaPython,
  FaHtml5,
  FaFlutter,
  FaReact,
  FaFigma,
  RiJavascriptFill,
  FaCss3Alt,
  AiOutlineDotNet,
  SiMongodb,
  SiAdobeaftereffects,
  SiSpringboot,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiBlender,
  SiUnrealengine,
  SiDavinciresolve,
  GrMysql,
  BiLogoSpringBoot,
];

const LogoTicker = () => {
  const animationLogos = useMemo(() => icons.concat(icons), []);
  const animateLogos = useMemo(() => icons.concat(icons), []);
  return (
    <div className="logo-ticker-container">
      <div className="logo-ticker-wrapper">
        <motion.div
          className="logo-ticker-track"
          animate={{ translateX: "-50%" }}
          transition={{
            duration: 140,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {animationLogos.concat(animationLogos).map((Icon, index) => (
            <div key={index} className="logo-ticker-icon">
              <Icon />
            </div>
          ))}
          {animateLogos.concat(animateLogos).map((Icon, index) => (
            <div key={index} className="logo-ticker-icon">
              <Icon />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
