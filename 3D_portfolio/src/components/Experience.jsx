import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import { fadeIn } from "../utils/motion";

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Technologies im used to work with
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Skillset.
                </h2>
            </motion.div>

            <motion.div variants={fadeIn("up", "spring")} className='mt-20 flex max-[480px]:flex-col flex max-[480px]:mt-10 justify-between'>
                <div className="languages">
                <h2 className={`${styles.sectionHeadTextSub}`}>Languages</h2>
                    <ul className="mt-2 list-disc list-inside">
                        <li className='text-white tracking-wider text-[18px] mt-1 '>JavaScript</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Python</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Java</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>HTML</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>CSS</li>
                    </ul>
                </div>
                <div className="front-end">
                    <h2 className={`${styles.sectionHeadTextSub}  max-[480px]:mt-3`}>Frontend</h2>
                    <li className='text-white tracking-wider text-[18px] mt-1 '>React.js</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Tailwind CSS</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Bootstrap</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Jinja2</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Material UI</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>JQuery</li>
                </div>
                <div className="languages">
                <h2 className={`${styles.sectionHeadTextSub}  max-[480px]:mt-3`}>Backend</h2>
                    <li className='text-white tracking-wider text-[18px] mt-1 '>Node.js</li>
                    <li className='text-white tracking-wider text-[18px] mt-1 '>MongoDB</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Flask</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>MySQL</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Express.js</li>
                        <li className='text-white tracking-wider text-[18px] mt-1 '>Spring MVC</li>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
