import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";
import zomatoPipeline from "../assets/images/projects/zomato-pipeline.svg";
import youtubePipeline from "../assets/images/projects/youtube-pipeline.svg";


export const HERO_CONTENT = '"Hardware eventually fails. Software eventually works"'

export const ABOUT_DATA = {
  "Origin": {
    "hometown": "Ahmedabad, India",
    "current_base": "Frisco, Texas",
    "languages": ["English", "Hindi", "Gujarati", "Spanish (learning)"],
  },
  "Currently": "Data/AI Engineer at Bayer, building pipelines and AI agents on Google Cloud, and learning supply chain on the side",
  "Years of Experience": "3+",
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
      "gpa": "3.73 / 4.0",
      "honor": "NAMU Scholarship",
    },
    {
      "degree": "B.S. Computer Science",
      "school": "S.R.M. University, Chennai",
      "gpa": "3.75 / 4.0",
    },
  ],
  "Tools I Reach For": [
    "Python",
    "SQL",
    "BigQuery",
    "Cloud Composer",
    "Apache Airflow",
    "dbt",
    "Snowflake",
    "Amazon S3",
    "Vertex AI",
    "Google ADK",
    "GitHub Actions",
  ],
  "Also Comfortable With": [
    "AWS (S3 · Glue · Lambda · Step Functions · Athena)",
    "Snowflake · Dimensional Modeling · Medallion Architecture",
    "Power BI · Tableau · Looker · QuickSight",
    "Docker · Git/GitLab · CI/CD",
  ],
  "Currently Learning": [
    "Multi-agent orchestration patterns",
    "Streaming lakehouse architectures",
    "LLM evals & guardrails",
    "Spanish",
  ],
  "Publication": {
    "title": "DeSculpt: Indian Temple Sculpture Iconography",
    "summary": "Deep-learning framework for 9-class classification of Navagraha sculptures, 93.75% accuracy",
    "stack": ["ResNet50", "VGG16", "MobileNet", "Transfer Learning"],
  },
  "Hobbies": [
    "Football (the real one)",
    "Piano: covers and originals as @2symphonians",
    "Scoring and composing music",
    "Travel",
    "Side-projects that were supposed to take one weekend",
  ],
  "Fun Facts": [
    "Crowned Student of the Year in 2016",
    "Music director for a 45-minute school drama",
    "Trilingual and chasing a fourth: currently learning Spanish",
    "Solves a Rubik's cube in 55 seconds (personal best, and yes, I timed it)",
    "Types at 82 WPM, so my bugs get written faster too",
  ],
  "Motto": "Hardware eventually fails. Software eventually works.",
};

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "Data / AI Engineer",
    company: "Bayer, Creve Coeur, MO",
    highlights: [
      "Proposed, designed, and presented a target-state architecture for Bayer Crop Science's Seedbin supply-planning pipeline, replacing a fragmented 3-platform legacy stack (SAP HANA DW, Azure Data Factory, custom Python/cron) with a unified GCP-native pipeline (Cloud Composer + BigQuery) thereby eliminating Azure Data Factory licensing costs entirely.",
      "Built a self-service ETL framework via a YAML-driven Airflow DAG factory on Cloud Composer, powering 101+ production BigQuery ↔ AWS S3 Inbound/Outbound pipelines from a codebase, new data sources onboard through config alone, with zero code changes.",
      "Architected a 3-stage CI/CD pipeline (GitHub Actions) with branch protection and mandatory peer review across PR validation, Dev, and Prod stages, cutting deployment time ~97% (15 minutes to under 30 seconds) for a team of 5 developers.",
      "Designed a POC Sentinel, a multi-agent AI system (Google ADK, Vertex AI/Gemini, RAG Engine, MCP) to autonomously monitor BigQuery/Cloud Composer pipelines, correlating structured control-table errors with unstructured Cloud Logging signals to diagnose failures and draft human-reviewed fix proposals as GitHub PRs.",
      "Developed a repeatable Python-based field/table-mapping methodology, validated against a 70,000+ row SAP-to-BigQuery translation table with automated type/format consistency checks; adopted as the team standard for subsequent SAP HANA-to-BigQuery view conversions.",
    ],
    technologies: ["Cloud Composer", "BigQuery", "Airflow", "AWS S3", "GitHub Actions", "Google ADK", "Vertex AI", "RAG", "MCP", "Python", "SAP HANA"],
  },
  {
    year: "May 2025 - Dec 2025",
    role: "Data / AI Engineer",
    company: "Sabre Corporation, Southlake, TX",
    highlights: [
      "Architected a GCP-based Customer 360 data model integrating SAP, ServiceNow, and Salesforce, consolidating enterprise data across 3 source systems into a unified BigQuery layer.",
      "Delivered an end-to-end Salesforce-to-BigQuery ETL migration featuring Top-N analysis, 30/90-day trend models, and drill-down Looker dashboards, eliminating an estimated 15 hours per week of manual SQL querying.",
      "Built a production text-to-SQL assistant on top of Customer 360 BigQuery tables, enabling non-technical stakeholders to retrieve KPIs and run ad-hoc analyses through natural language.",
      "Built Ask-AES, a conversational multi-agent analytics chatbot using Vertex AI and Google Agent Development Kit (ADK), plus a BigQuery analytics agent, RAG agent, and ServiceNow automation agent, reducing ad-hoc reporting turnaround from hours to seconds.",
    ],
    technologies: ["BigQuery", "SAP", "ServiceNow", "Salesforce", "Looker", "Vertex AI", "Google ADK", "RAG", "Text-to-SQL"],
  },
  {
    year: "Jan 2023 - Apr 2023",
    role: "Business Intelligence Platform Intern",
    company: "UIUC",
    highlights: [
      "Administered SAP BusinessObjects (CMC security, LCM content migration) and Denodo VDP across Dev/QA environments.",
      "Built role-based access control (RBAC) via VQL and resolved complex LDAP/AD authentication issues.",
    ],
    technologies: ["SAP BusinessObjects", "Denodo VDP", "VQL", "RBAC", "LDAP/AD"],
  },
  {
    year: "Sept 2022 - Dec 2022",
    role: "Data Analyst",
    company: "Bosky Buildcon",
    highlights: [
      "Conducted cost-efficiency analysis across 12 construction projects using SQL, identifying a 15% overhead savings opportunity.",
      "Built Power BI/Tableau dashboards with automated Python reporting that cut manual operational workload by 40%.",
    ],
    technologies: ["SQL", "Power BI", "Tableau", "Python"],
  },
  {
    year: "Nov 2021 - Nov 2022",
    role: "Head of Finance Department",
    company: "Youth India Foundation, Chennai, India",
    highlights: [
      "Directed data-driven resource allocation and financial planning for 5 national events, reducing overall costs by 15%.",
      "Spearheaded regional intern recruitment and structured onboarding to optimize cross-functional operations.",
    ],
    technologies: ["Financial Planning", "Resource Allocation", "Recruitment", "Onboarding"],
  },
  {
    year: "Nov 2021 - Dec 2021",
    role: "Web Developer",
    company: "TwoWaits, Chennai, India",
    highlights: [
      "Developed a secure email authentication module in Node.js integrated with a Flutter client for seamless user onboarding.",
      "Contributed to frontend improvements in the Flutter app, enhancing UI responsiveness and refining input validation during login and signup flows.",
    ],
    technologies: ["Node.js", "Flutter", "REST APIs", "Authentication"],
  },
];

export const EDUCATION = [
  {
    year: "Aug 2023 - May 2025",
    degree: "Master of Science in Computer Science",
    school: "Arizona State University, Tempe, AZ",
    details: "GPA: 3.73/4.0 — Awarded NAMU Scholarship",
  },
  {
    year: "Jul 2019 - May 2023",
    degree: "Bachelor of Science in Computer Science",
    school: "S.R.M. University, Chennai, India",
    details: "GPA: 3.75/4.0",
  },
];

export const PROJECTS = [
  {
    title: "Zomato AI Data Pipeline",
    image: zomatoPipeline,
    description:
      "Built an end-to-end S3 → Snowflake (raw) → dbt (staging → marts) → Airflow production pipeline processing 10M+ orders. Designed an OpenAI-powered Enrichment, RAG and text-to-SQL analytics layer served via a Streamlit and SnowSight interface.",
    technologies: ["S3", "Snowflake", "dbt", "Airflow", "OpenAI", "RAG", "Streamlit"],
  },
  {
    title: "YouTube Trending Data Pipeline",
    image: youtubePipeline,
    description:
      "Architected a serverless AWS ETL pipeline utilizing Lambda, Glue, Step Functions, IAM, EventBridge, and Athena. Implemented a strict bronze-silver-gold medallion architecture featuring automated data-quality gating.",
    technologies: ["Lambda", "Glue", "Step Functions", "IAM", "EventBridge", "Athena"],
  },
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
