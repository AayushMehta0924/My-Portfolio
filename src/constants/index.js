import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// IDEA: Write in JSON Format. Education, Hobbies, Certificates, etc
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Aug 2024",
    role: "Cloud Engineer Intern",
    company: "NETS, Dallas, TX",
    description: `Engineered automated ETL pipelines using Apache Airflow and optimized data workflows with BigQuery. Designed and deployed a Dialogflow chatbot and contributed to predictive models using Vertex AI, supporting advanced analytics and decision-making.`,
    technologies: ["Vertex AI", "Dialogflow", "BigQuery", "Apache Airflow"],
  },
  {
    year: "Dec 2022 - April 2023",
    role: "Data Engineer Intern",
    company: "Nividata Consultancy, Ahmedabad, India",
    description: `Analyzed and visualized large datasets using Python, SQL, and Tableau to uncover operational trends. Designed scalable ETL pipelines and developed automation scripts to streamline data processing workflows.`,
    technologies: ["Python", "SQL", "AWS S3", "Tableau"],
  },
  {
    year: "April 2022 - July 2022",
    role: "Data Analyst Intern",
    company: "Bosky Group, Gandhinagar, India",
    description: `Analyzed construction project data using Python (Pandas, Matplotlib) and SQL to generate insights that optimized
resource allocation and reduced costs by 15%.`,
    technologies: ["Python", "Pandas", "Numpy", "SQL"],
  },
  {
    year: "Nov 2021 - Dec 2021",
    role: "Web Development Intern",
    company: "Twowaits Technologies Private Limited, Chennai, India",
    description: `I created a highly secure email authentication system in NodeJS and seamlessly integrated it into a Flutter application for the client.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
  {
    year: "Nov 2021 - Nov 2022",
    role: "Head of Department of Finance",
    company: "Youth India Foundation, Chennai, India",
    description: `Managed financial aspects and revenue for events, oversaw intern recruitment, conducted meetings, and produced weekly
reports. Additionally, organized both state and national-level events.`,
    technologies: ["Excel", "Python", "EDA"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
