import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


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
    role: "Data Architect",
    company: "ITDataBuild, Flower Mound, TX",
    description: `Engineered end-to-end SAP HANA → BigQuery migration pipelines via Python Airflow DAGs with row-count, schema-parity, and null-distribution validation. Re-architected the legacy migration framework to cut Cloud Composer runtime and BigQuery slot usage, and converted 6 manual Python jobs into scheduled DAGs with retry, alerting, and SLA monitoring. Also administering SAP BusinessObjects: report bursting, cross-environment promotion management (DEV/QA/PROD), and platform patching/maintenance.`,
    technologies: ["Python", "Airflow", "BigQuery", "SAP HANA", "SAP BO", "GCP"],
  },
  {
    year: "May 2025 - Dec 2025",
    role: "Cloud Data/AI Engineer",
    company: "Sabre, Dallas, TX",
    description: `Built a GCP Customer 360 (SAP + ServiceNow + Salesforce) and Ask-AES, a Vertex AI + Google ADK multi-agent chatbot over BigQuery with inline chart rendering and Microsoft Teams integration. Standardized 15+ KPIs, shipped Looker dashboards, migrated Airflow SQL to dbt with Slim CI, and conducted two internal seminars on Looker Studio and Conversational Analytics.`,
    technologies: ["Vertex AI", "Google ADK", "BigQuery", "dbt", "Airflow", "Looker"],
  },
  {
    year: "Sept 2022 - June 2023",
    role: "Cloud Data/AI Engineer",
    company: "Analytics IT",
    description: `Designed automated ETL pipelines on Apache Airflow + BigQuery for customer segmentation, and built a lakehouse integrating HR, Salesforce, and ServiceNow data with 18+ business KPIs surfaced in Looker. Shipped a Dialogflow NLP chatbot for marketing teams and a Vertex AI churn-prediction pipeline integrated with Salesforce CRM for retention workflows.`,
    technologies: ["Airflow", "BigQuery", "Vertex AI", "Dialogflow", "dbt", "Looker"],
  },
  {
    year: "May 2021 - June 2022",
    role: "Data Engineer",
    company: "Nividata Consultancy",
    description: `Led batch ETL pipelines in Python and Apache Airflow processing product and sales data for an e-commerce client, with AWS S3 as the staging layer and ingestion from MySQL and MongoDB into Redshift. Built a Pandera-based schema validation layer, anomaly detection on weekly sales trends, and Tableau dashboards covering sales, conversion, and return ratios across regions.`,
    technologies: ["Python", "Airflow", "AWS S3", "Redshift", "Tableau", "Pandera"],
  },
  {
    year: "May 2020 - Dec 2020",
    role: "Data Analyst",
    company: "Bosky Buildcon",
    description: `Conducted cost-efficiency analysis across 12 active construction projects using SQL and Excel, surfacing a 15% overhead-savings opportunity through material reallocation. Built Matplotlib/Seaborn reports and Tableau dashboards tracking project burn rates, workforce allocation, and vendor performance, and automated daily site-data extraction in Python (40% reduction in manual reporting).`,
    technologies: ["Python", "SQL", "Pandas", "Tableau", "Matplotlib"],
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
    year: "2018 - 2022",
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
