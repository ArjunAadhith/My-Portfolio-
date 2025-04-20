import { motion } from "motion/react";
import styles from "../App.css"

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

const InfinitySlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <motion.div
          className={styles.sliderContent}
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
        >
          {[...icons, ...icons].map((Icon, index) => (
            <Icon key={index} className={styles.icon} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfinitySlider;
