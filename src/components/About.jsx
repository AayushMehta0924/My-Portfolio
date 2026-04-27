import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap justify-center">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-3/4 flex justify-center"
            >
                <pre className="my-2 w-full max-w-3xl py-6 bg-transparent p-4 rounded-md shadow-lg text-sm sm:text-base">
                    <code>
                        {"{"}
                        <br />
                        &nbsp;&nbsp;<span className="text-red-500">"Origin"</span>: {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"hometown"</span>: <span className="text-green-500">"Ahmedabad, India"</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"current_base"</span>: <span className="text-green-500">"Dallas, Texas"</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"languages"</span>: <span className="text-green-500">"English, Hindi, Gujarati"</span>,
                        <br />
                        &nbsp;&nbsp;{"},"}
                        <br />
                        &nbsp;&nbsp;<span className="text-red-500">"Currently"</span>: <span className="text-green-500">"Exploring cutting-edge technologies"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-red-500">"Education"</span>: [
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"Masters in Computer Science"</span>: {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"Arizona State University"</span>: <span className="text-green-500">"GPA: 3.81/4"</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"},
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"Bachelors in Computer Science and Engineering"</span>: {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-500">"S.R.M. University"</span>: <span className="text-green-500">"CGPA: 9.38/10"</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{"}"},
                        <br />
                        &nbsp;&nbsp;],
                        <br />
                        &nbsp;&nbsp;<span className="text-red-500">"Hobbies"</span>: [
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">"Football (the real one)"</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-500">"Piano"</span>,
                        <br />
                        &nbsp;&nbsp;]
                        <br />
                        {"}"}
                    </code>
                </pre>
            </motion.div>
        </div>
    </div>
  );
};

export default About;
