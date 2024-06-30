import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import kahanaLogo from "@/public/kahana_logo.ico"
import qbLogo from "@/public/quantitative_brokers_logo.ico"
import bdsrLogo from "@/public/bdsr_logo.ico"
import tvsLogo from "@/public/tvs_logo.ico"
import CognizantLogo from "@/public/Cognizant-Logo.png"
import Sundaramlogo from "@/public/Sundaram-logo.jpg"

import DQNImg from "@/public/QLearningvsDQN.png"
import GLCMImg from "@/public/Methodology_GLCM.jpeg"
import CricketImg from "@/public/MCST.png"
import HangmanImg from "@/public/Hangman.jpg"
import BikeImg from "@/public/BikeRecommendation.jpg"
import LoanImg from "@/public/LoanDefault.jpg"
// import Resume from "@/public/Resume.pdf"
import htmLogo from "@/public/skills/html.svg" 
import cppLogo from "@/public/skills/cpp.svg"
import cssLogo from "@/public/skills/css.svg"
import firebaseLogo from "@/public/skills/firebase.svg"
import gitLogo from "@/public/skills/git.svg"
import javaLogo from "@/public/skills/java.svg"
import javascriptLogo from "@/public/skills/javascript.svg"
import mongodbLogo from "@/public/skills/mongodb.svg"
import mysqlLogo from "@/public/skills/mysql.svg"
import nodejsLogo from "@/public/skills/nodejs.svg"
import pythonLogo from "@/public/skills/python.svg"
import reactLogo from "@/public/skills/react.svg"
import tailwindLogo from "@/public/skills/tailwindcss.svg"
import typescriptLogo from "@/public/skills/typescript.svg"
import jenkinsLogo from "@/public/skills/jenkins.svg"
import tensorflowLogo from "@/public/skills/tensorflow.svg"
import pytorchLogo from "@/public/skills/pytorch.svg"
import awsLogo from "@/public/skills/aws.svg"
import braincircuitLogo from "@/public/skills/brain-circuit.svg"
import linuxLogo from "@/public/skills/linux.svg"
import dlLogo from "@/public/skills/deep-learning.png"
import androidLogo from "@/public/skills/android.svg"
import arduinoLogo from "@/public/skills/arduino.svg"
import scikitlearnLogo from "@/public/skills/scikit-learn.svg"



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Engineer - Full Time",
    location: "Cognizant",
    company_icon: CognizantLogo,
    description1: "• Managed the ETL process for the migration of approximately 75,000 claims of Liberty Mutual Insurance",
    description2: "• Extracted data using MS SQL Server and DB Visualizer, ensuring data extraction, querying, and validation",
    icon: React.createElement(CgWorkAlt),
    date: "November 2021 - November 2022",
  },
  {
    title: "Data analyst intern",
    location: "Cognizant",
    company_icon: CognizantLogo,
    description1: "• Analyzed a dataset of 10,000 sales records enabling the generation of daily reports for a group of cosmetic stores",
    description2: "• Boosted sales revenue by $50,000 (10% growth) by data-driven analysis of market trends and customer behavior",
    icon: React.createElement(CgWorkAlt),
    date: "October 2021 - November 2022",
  },
  {
    title: "Supply chain analyst intern",
    location: "Sundaram Fasterners Limited",
    company_icon: Sundaramlogo,
    description1: "• Developed a discrete-event simulation using Arena, reducing remanufacturing and transportation costs by 75%",
    description2: "• Collaborated with international clients and published findings in a peer-reviewed journal",
    icon: React.createElement(CgWorkAlt),
    date: "October 2021 - November 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate Price Prediction Model for Bengaluru",
    description:
      "Developed a Machine Learning model for Bengaluru real estate that predicts property prices using Linear Regression. Cleaned, preprocessed 13,320 listings dataset, removing outliers, and handling missing data to ensure data quality. Leveraged Exploratory Data Analysis (EDA) statistics and visualizations to reveal patterns, trends and anomalies",
    tags: ["Python", "Machine Learning", "Computer Vision", "GLCM"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    githubLink: "https://github.com/mahadharsan/real_estate_price_predictor",
  },
  {
    title: "Text-Based Fake News Detection",
    description:
          "Generated a text-based binary classification model; distinguish real and fake news articles using 20,800 articles. Employed NLP techniques, including text preprocessing, TF-IDF vectorization, and logistic regression. Secured an impressive accuracy of 98.6% in training phase, 97.9% on the test data, underscoring model's resilience.",  
    tags: ["Python", "Machine Learning", "Classification"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    githubLink: "https://github.com/mahadharsan/fake_news_detector",
  },
  {
    title: "Optimizing Online Sports Retail Revenue using SQL",
    description:
      "Implemented advanced SQL queries to analyze product data for an online sport company, identifying pricing trends, discount strategies, and revenue drivers. Analyzed over 3,000 products and generated insights leading to a potential revenue increase of 15%. Recommended discount adjustments based on analysis, potentially saving the company $50,000 in annual revenue.",
    tags: ["SQL"],
    icons: [
      "logos:SQL",
      "lucide:brain-circuit"],
    githubLink: "https://github.com/mahadharsan/Optimizing-Online-sports-retail-revenue",
  },
  {
    title: "Electronics Sales Data Analysis Python Project",
    description:
      "Merged, cleaned 185,950 entries from 12 months of sales data using Pandas, revealing Dec as highest sales month. Conducted EDA, identifying sales trends, recommending targeted marketing strategies for 20% increase revenue.",
    tags: ["Python", "Pandas", "Matplotlib"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    githubLink: "https://github.com/mahadharsan/Electronics_Sales_Data_Analysis_Project",
  },
  {
    title: "European Supermarket Sales Dashboard: Analyzing Regional Performance and Market Trends",
    description:
      "Created a comprehensive Tableau dashboard tracking European supermarkets’ sales, highlighting regional KPIs and enabling informed decision-making.",    
    tags: ["Tableau","Data Analysis"],
    icons: [
      "logos:Tableau",
      "lucide:brain-circuit"
    ],
  },
  {
    title: "Predictive Diabetes Diagnosis Using Machine Learning",
    description: "Devised a diabetes prediction model leveraging ML techniques by utilizing a dataset of 768 individuals. Employed a Support Vector Machine (SVM) classifier with a linear kernel for binary classification task. Achieved predictive accuracy of 88.7% during training, 87.3% on the test dataset demonstrating model's capability.",
    tags: ["Python", "Machine Learning"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"],
    githubLink: "https://github.com/mahadharsan/diabetes_predictor",
  },
  {
    title: "Image Processing and Manipulation (IPAM)",
    description: "Created a user-friendly image processing package with two modules without aid of image manipulation libraries. Designed image processing algorithms, enabling cropping & rotation, 30% faster using NumPy & Matplotlib. Offered seamless flipping and a range of 10 artistic filters for creative enhancement.",
    tags: ["Python", "Pandas", "Numpy"],
    icons: [
      "logos:python"],
  },
] as const;

export const skillsData =  [
  {
    name: "Python",
    icon: pythonLogo,
    link: "https://python.com/",
  },
  {
    name: "MySQL",
    icon: mysqlLogo,
    link: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    icon: mongodbLogo,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    icon: gitLogo,
    link: "https://git-scm.com/",
  },
  {
    name: "Power BI",
    icon: firebaseLogo,
    link: "https://firebase.org/",
  },
  {
    name: "Tableau",
    icon: linuxLogo,
    link: ""
  },
  {
    name: "Pandas",
    icon: androidLogo,
    link: ""
  },
  {
  name: "Pytorch",
  icon: pytorchLogo,
  link: ""
  },
  {
  name: "Tensorflow",
  icon: tensorflowLogo,
  link: ""
  },
  {
    name: "Scikit Learn",
    icon: scikitlearnLogo
  },
  {
    name: "R",
    icon: arduinoLogo,
    link: ""
  },
  {
    name: "Informatica Powercenter",
    icon: javaLogo,
  },
  {
    name: "MS SQL Server",
    icon: javaLogo,
  },
] as const;

export const achievementsData = [
  {
    year: "2020",
    description: "Supply chain routing in a diary industry using heterogeneous fleet system: simulation-based approach"
  },
  {
    year: "2021",
    description: "Application of multi grade fuzzy approach to compute the circularity index of manufacturing organizations"
  },
  {
    year: "2021",
    description: "Application of dmaic to reduce the rejection rate of starter motor shaft assembly in the automobile industry: a case study"
  },
  {
    year: "2021",
    description: "A QFD Approach for Selection of Design for Logistics Strategies"
  },
  {
    year: "2021",
    description: "Prioritization of barriers in industrial symbiosis implementation in automotive industry-Using ISM and MICMAC Analysis"
  },
  {
    year: "2022",
    description: "Resilience strategies to recover from the cascading ripple effect in a copper supply chain through project management"
  },
  {
    year: "2024",
    description: "Environment and economic analysis of reverse supply chain scenarios for remanufacturing using discrete-event simulation approach"
  }
 ] as const;

export const about = {
  name: 'Mahadharsan Ravichandran',
  role: 'Data Scientist/ Data analyst',
  description: 'Hello, I’m Mahahdharsan Ravichandran, a data enthusiast currently pursuing a Master of Science degree at the Northeastern University at Boston.',
  resume: "https://drive.google.com/file/d/1554mmko23A9cpo5wcsh13tocOifiL0mh/view?usp=sharing",
  social: {
    linkedin: 'https://www.linkedin.com/in/mahadharsan-ravichandran',
    github: 'https://github.com/mahadharsan'
  },
} as const;