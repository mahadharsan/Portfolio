"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFile} from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import MD from "@/public/MD.png";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={MD}
              alt="Naveen portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-xl font-small !leading-[1.5] sm:text-xl text-white max-w-[60rem] mx-auto text-justify"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Mahadharsan, a passionate data enthusiast currently pursuing {" "}</span>
        <span className="font-bold">Master of Science in Data Science</span> at{" "}
        <a href="" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-2">Northeastern University - Boston</a>{" "}
        building upon my strong data foundation from {" "}
        <a href="" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-2">Cognizant</a>, 
        where I worked as Data Engineer. I did my Bachelors in Vellore Institute of Technology (VIT), Mechanical Engineering.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 py-10 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://drive.google.com/file/d/1YA_wFEIbKlH4UdUyY7ruXcoJhDqqoY-t/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Science Resume <FaFile className="opacity-70" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://drive.google.com/file/d/1fS7le8yRmtfwjLMTrGGYR4qwwEkWx7pf/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Analytics Resume <FaFile className="opacity-70" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://drive.google.com/file/d/1dR3wbiaTqOPx1u-XR0gZfnwx4gIgq-dp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          SC Analyst Resume <FaFile className="opacity-70" />
        </a>
      </motion.div>


      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://github.com/mahadharsan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70">GitHub</span>
          <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/mahadharsan-ravichandran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://scholar.google.com/citations?hl=en&user=oUNyeYMAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="opacity-70">Google Scholar</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
