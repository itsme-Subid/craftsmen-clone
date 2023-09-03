"use client";

import { Logo } from "@/icons";
import { useScroll, useTransform, motion } from "framer-motion";

const Nav = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, -3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  return (
    <motion.nav
      style={{
        opacity,
        scale,
      }}
      className="md:h-[32vh] lg:h-[40vh] grid"
    >
      <div className="m-auto w-fit">
        <Logo />
      </div>
    </motion.nav>
  );
};

export default Nav;
