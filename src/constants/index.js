import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";


export const HERO_CONTENT = '"Hardware eventually fails. Software eventually works"'

export const ABOUT_DATA = {
  "Origin": {
    "hometown": "Ahmedabad, India",
    "current_base": "Frisco, Texas",
    "languages": ["English", "Hindi", "Gujarati"],
  },
  "Currently": "Building data + AI systems on Google Cloud",
  "Years of Experience": "4+",
  "Focus Areas": [
    "Cloud Engineering",
    "Data Engineering",
    "AI / Agentic Systems",
    "Advanced Analytics",
  ],
  "Education": [
    {
      "degree": "M.S. Computer Science",
      "school": "Arizona State University",
      "gpa": "3.73 / 4",
      "honor": "NAMU Scholarship",
    },
    {
      "degree": "B.Tech Computer Science Engineering",
      "school": "S.R.M. University, Chennai",
      "cgpa": "9.38 / 10",
    },
  ],
  "Tools I Reach For": [
    "BigQuery",
    "Apache Airflow",
    "dbt",
    "Vertex AI",
    "Google ADK",
    "Python",
    "SAP BusinessObjects",
  ],
  "Also Comfortable With": [
    "Flask · Node.js · React.js (MERN)",
    "ERwin · Star/Snowflake schemas",
    "Power BI · Tableau · Looker",
    "Agile (Scrum) · SDLC",
  ],
  "Currently Learning": [
    "Multi-agent orchestration patterns",
    "Streaming lakehouse architectures",
    "LLM evals & guardrails",
  ],
  "Publication": {
    "title": "DeSculpt: Indian Temple Sculpture Iconography",
    "summary": "Deep-learning framework for 9-class classification of Navagraha sculptures, 91% accuracy",
    "stack": ["ResNet50", "VGG16", "MobileNet", "Transfer Learning"],
  },
  "Hobbies": [
    "Football (the real one)",
    "Piano",
    "Travel",
    "Tinkering with side-projects",
  ],
  "Fun Facts": [
    "Ex Head of Finance at Youth India Foundation",
    "Trilingual",
    "Coffee > Tea, but barely",
  ],
  "Motto": "Hardware eventually fails. Software eventually works.",
};

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "BI Engineer",
    company: "ITDataBuild, Flower Mound, TX",
    description: `Engineered ETL/ELT pipelines using Python, PySpark, ADF, and Databricks loading SAP HANA data into Azure Synapse and Microsoft Fabric Lakehouse (Medallion) for Power BI. Built Power BI semantic models with advanced DAX, RLS, and Service publishing. Architected a multi-agent AI pipeline (Azure AI Studio + Azure OpenAI + Semantic Kernel) for natural-language DAX/T-SQL generation. Delivered Azure DevOps CI/CD across DEV/QA/PROD.`,
    technologies: ["Python", "PySpark", "ADF", "Databricks", "Power BI", "Azure Synapse", "Microsoft Fabric", "Azure OpenAI", "Semantic Kernel", "Azure DevOps"],
  },
  {
    year: "May 2025 - Dec 2025",
    role: "Data / AI Engineer",
    company: "Sabre, Flower Mound, TX",
    description: `Built an Azure Synapse Customer 360 (SAP + ServiceNow + Salesforce) using ADF, Databricks, and PySpark. Developed AES-Assist, a multi-agent AI system (Azure AI Studio + Semantic Kernel + Azure AI Agent Service) that auto-generates Power BI DAX and Synapse SQL via a Teams bot, cutting ad-hoc requests by ~40%. Shipped 8 Power BI dashboards, an Azure ML churn model, and dbt Medallion pipelines with Slim CI.`,
    technologies: ["ADF", "Databricks", "PySpark", "Azure Synapse", "Azure ML", "Power BI", "Azure OpenAI", "Semantic Kernel", "dbt"],
  },
  {
    year: "Sept 2022 - June 2023",
    role: "Data / AI Engineer",
    company: "Analytics IT",
    description: `Designed Airflow + BigQuery ETL pipelines for customer segmentation and built a Medallion lakehouse integrating HR, Salesforce, and ServiceNow data with 18+ KPIs in Power BI and Looker. Standardized transformations in dbt; shipped an NLP chatbot for marketing and a Vertex AI churn-prediction pipeline integrated with Salesforce CRM for personalized retention workflows.`,
    technologies: ["Airflow", "BigQuery", "dbt", "Vertex AI", "Power BI", "Looker", "Python"],
  },
  {
    year: "Nov 2021 - Nov 2022",
    role: "Head of Finance",
    company: "Youth India Foundation, Chennai, India",
    description: `Managed budgeting, expense tracking, and revenue planning for state and national events. Used Excel to analyze event profitability, visualize revenue trends, and prepare weekly financial reports for leadership. Collaborated with event and operations teams, using data insights to optimize resource allocation and reduce overall event costs.`,
    technologies: ["Excel", "Financial Reporting", "Data Analysis", "Team Leadership"],
  },
  {
    year: "Nov 2021 - Dec 2021",
    role: "Web Developer",
    company: "TwoWaits, Chennai, India",
    description: `Developed a secure email authentication module in Node.js integrated with a Flutter client for seamless user onboarding. Contributed to frontend improvements in the Flutter app, enhancing UI responsiveness and refining input validation during login and signup flows.`,
    technologies: ["Node.js", "Flutter", "REST APIs", "Authentication"],
  },
  {
    year: "May 2021 - Aug 2021",
    role: "Data Engineer",
    company: "Nividata Consultancy, Ahmedabad, India",
    description: `Led batch ETL pipelines in Python and Apache Airflow processing product and sales data for an e-commerce client, with AWS S3 as staging and ingestion from MySQL and MongoDB into Redshift. Built a Pandera schema validation layer, anomaly detection on weekly sales trends, and Power BI and Tableau dashboards tracking sales, conversion, and return ratios across regions.`,
    technologies: ["Python", "Airflow", "AWS S3", "Redshift", "Power BI", "Tableau", "Pandera"],
  },
  {
    year: "May 2020 - Dec 2020",
    role: "Data Analyst",
    company: "Bosky Buildcon",
    description: `Conducted cost-efficiency analysis across 12 active construction projects using SQL and Excel, identifying a 15% overhead savings opportunity through material reallocation. Built interactive Power BI and Tableau dashboards tracking burn rates, workforce allocation, and vendor performance. Automated daily site-data extraction in Python, reducing manual reporting workload by 40%.`,
    technologies: ["Python", "SQL", "Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
];

export const EDUCATION = [
  {
    year: "2023 - 2025",
    degree: "Master of Science in Computer Science",
    school: "Arizona State University, USA",
    details: "CGPA: 3.73/4 — Awarded NAMU Scholarship",
  },
  {
    year: "2019 - 2023",
    degree: "Bachelor of Technology in Computer Science Engineering",
    school: "S.R.M. University, Chennai, India",
    details: "CGPA: 9.38/10",
  },
];

export const PROJECTS = [
  {
    title: "StreamLens: Real Time Video Data Processing at Scale",
    image: project1,
    description:
      "Developed a distributed video processing system using Apache Kafka and MongoDB, integrating ResNet-50 for real-time analytics..",
    technologies: ["Kafka", "MongoDB", "Resnet50", "Flask"],
  },
  {
    title: "Fraudulent Merchant Prediction",
    image: project2,
    description:
      "Designed an XGBoost-based fraud detection model with a robust data pipeline to address class imbalance and optimize performance.",
    technologies: ["Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
  },
  {
    title: "Navagraha Iconography Classification Engine",
    image: project3,
    description:
      "Built a ResNet50-based model achieving 93.75% accuracy in classifying Navagraha god sculptures.",
    technologies: ["Resnet50", "Tensorflow/Keras", "Numpy", "Matplotlib"],
  },
  {
    title: "Movie Hub",
    image: project4,
    description:
      "Developed a MERN-based Movie Hub app with personalized watchlists, secure JWT authentication, and integrated OMDB API for detailed movie data retrieval.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
  },
];

export const CONTACT = {
  address: "2337 Gelding Ln, Frisco, TX 75036",
  phoneNo: "+1 (469) 901-3435 ",
  email: "aayushmehta0924@gmail.com",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/aayushmehta0924/",
  github: "https://github.com/AayushMehta0924",
  instagram: "https://www.instagram.com/",
  twitter: "https://x.com/",
};
