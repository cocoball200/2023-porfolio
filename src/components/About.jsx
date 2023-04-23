'use client'
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="mt-12 flex justify-center flex-col items-center">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
    I am an experienced <motion.span    variants={fadeIn("", "", 0.3, 1)}
        className='mt-4  text-purple-600 font-blod text-[17px] max-w-3xl leading-[30px]'>Frontend Developer</motion.span> with two years of practical experience using React, Typescript, Javascript, SCSS, and HTML. I have
    an impressive record of accomplishments in developing and creating user-friendly web applications from the ground up for an early-stage
    startup. I prioritize solving business problems and approach each project with a passion for continuous learning and improvement. I am
    dedicated to delivering high-quality results and staying current in my field, always looking for ways to improve products and services. I am
    authorized to work in Canada, The UK, Korea. 
      </motion.p>
      <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
