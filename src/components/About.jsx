import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
            >
                <div className="flex justify-center lg:justify-start">
                    <pre className="my-2 max-w-xl py-6 bg-transparent p-4 rounded-md shadow-lg">
                        <code>
                            {"{"}
                            <br />
                            <span className="text-red-500">"I am a"</span>: <span className="text-green-500">"Passionate full stack developer with 5+ years of experience"</span>,
                            <br />
                            <span className="text-yellow-500">"Currently"</span>: <span className="text-green-500">"Exploring cutting-edge technologies and open to new opportunities"</span>,
                            <br />
                            <span className="text-red-500">"Previously at"</span>: [
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Nividata Consultancy"</span>,
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Bosky Group"</span>,
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Twowaits Technologies"</span>
                            <br />
                            ],
                            <br />
                            <span className="text-yellow-500">"Studied at"</span>: <span className="text-green-500">"University of Texas at Dallas"</span>,
                            <br />
                            <span className="text-red-500">"I enjoy"</span>: [
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Exploring AI/ML advancements"</span>,
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Contributing to open-source projects"</span>,
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Playing basketball"</span>,
                            <br />
                            &nbsp;&nbsp;<span className="text-green-500">"Learning new technologies"</span>
                            <br />
                            ],
                            <br />
                            <span className="text-yellow-500">"Contact me at"</span>: <span className="text-green-500">"aayushmehta0924@gmail.com"</span>
                            <br />
                            {"}"}
                        </code>
                    </pre>
                </div>
                {/* <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div> */}
            </motion.div>
        </div>
    </div>
  );
};

export default About;