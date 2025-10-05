import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
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
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const LinkedInStrengthCard = () => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1, 0.75)}
    className='w-full bg-tertiary p-6 rounded-2xl border border-secondary/20'
  >
    <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
      <div className='flex-1'>
        <h3 className='text-white text-[20px] font-bold mb-2'>
          LinkedIn Professional Network
        </h3>
        <p className='text-secondary text-[14px] leading-[20px]'>
          Building meaningful professional connections has been key to my growth.
          With{" "}
          <span className='text-[#915EFF] font-semibold'>7.5K+ LinkedIn connections</span>,
          I actively engage with the developer community, share insights, and stay updated
          with industry trends. This network has helped me learn from experienced professionals
          and collaborate on innovative projects.
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <a
          href='https://www.linkedin.com/in/prerit-goyal07/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#0077B5] hover:bg-[#005885] transition-colors duration-300 text-white px-6 py-3 rounded-lg font-medium text-center'
        >
          Connect on LinkedIn
        </a>
        <div className='text-center'>
          <span className='text-[#915EFF] text-[24px] font-bold'>7.5K+</span>
          <p className='text-secondary text-[12px]'>Connections</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const TopmateCard = () => (
  <motion.div
    variants={fadeIn("up", "spring", 0.2, 0.75)}
    className='w-full bg-tertiary p-6 rounded-2xl border border-secondary/20 mt-6'
  >
    <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
      <div className='flex-1'>
        <h3 className='text-white text-[20px] font-bold mb-2'>
          Free 1-on-1 Consultations
        </h3>
        <p className='text-secondary text-[14px] leading-[20px] mb-3'>
          I help clients build and optimize web and mobile applications using Angular, React, Node.js, and Flutter.
          Currently working at Hidden Talent, I bring SDE-1 experience and deliver high-quality,
          scalable solutions tailored to client needs.
        </p>
        <p className='text-[#915EFF] text-[14px] font-semibold'>
          💡 Free sessions available - Let's discuss your project ideas!
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <a
          href='https://topmate.io/prerit_goyal10?utm_campaign=Page_Ready&utm_medium=popup&utm_source=topmate'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gradient-to-r from-[#915EFF] to-[#7B46D6] hover:from-[#7B46D6] hover:to-[#915EFF] transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium text-center'
        >
          Book Free Session
        </a>
        <p className='text-secondary text-[12px] text-center'>No charge • Topmate</p>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate and driven software developer with experience in building and maintaining production-grade applications. My expertise lies in frontend development with Angular and TypeScript, and I have hands-on experience with mobile app development using Ionic. I'm a quick learner and a collaborative team player, dedicated to delivering high-quality, scalable, and user-friendly solutions. Let's connect and create something amazing together!
      </motion.p>

      {/* LinkedIn Strength and Topmate sections */}
      <div className='mt-10'>
        <LinkedInStrengthCard />
        <TopmateCard />
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
