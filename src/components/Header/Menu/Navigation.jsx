import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    zIndex: 9,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    zIndex: -10,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
};

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants}>
    {menuItems.map(({ id, title, link }) => (
      <motion.li
        variants={menuVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        key={id}
      >
        <Link href={link}>
          <a style={{textDecoration: 'none'}}>{title}</a>
        </Link>
      </motion.li>
    ))}
  </motion.ul>
);

const menuItems = [
  {
    id: "mainMenuItem-1",
    title: "HOME",
    link: "/",
  },
  {
    id: "mainMenuItem-2",
    title: "SERVICES",
    link: "/#services",
  },
  {
    id: "mainMenuItem-3",
    title: "CONTACTS",
    link: "/#contacts",
  },
  // {
  //   id: "mainMenuItem-5",
  //   title: "SOLUTIONS",
  //   link: "/#solutions",
  // },
  {
    id: "mainMenuItem-6",
    title: "ABOUT US",
    link: "/#about",
  },
];
