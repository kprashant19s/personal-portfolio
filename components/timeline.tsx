"use client";

import { Button, CustomFlowbiteTheme, Timeline } from "flowbite-react";
import {
  HiArrowNarrowRight,
  HiCalendar,
  HiCheckCircle,
  HiChevronDoubleRight,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const customTheme: CustomFlowbiteTheme["timeline"] = {
  root: {
    direction: {
      horizontal: "sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700",
    },
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6",
    },
    content: {
      root: {
        base: "",
        horizontal: "mt-3 sm:pr-8",
        vertical: "",
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white",
      },
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal:
            "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical:
            "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
        },
        icon: {
          base: "h-6 w-6 text-green-400 dark:text-cyan-300 ",
          wrapper:
            "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white",
        },
      },
      vertical: "",
    },
  },
};

const timelineData = [
  {
    date: "1st Sept 2024 - (2 Weeks)",
    title: "Data Analysis Fundamentals",
    description:
      "Explored fundamental concepts of data analysis, including statistical methods and data visualization techniques.",
    hasButton: true,
    subtopics: [
      { name: "Descriptive Statistics", completed: true },
      { name: "Inferential Statistics", completed: true },
      { name: "Data Cleaning Techniques", completed: true },
      { name: "Exploratory Data Analysis", completed: true },
      { name: "Basic Data Visualization", completed: true },
      { name: "Introduction to Python for Data Analysis", completed: true },
      { name: "Pandas Basics", completed: true },
      { name: "NumPy Fundamentals", completed: true },
      { name: "Data Collection Methods", completed: true },
      { name: "Basic SQL for Data Analysts", completed: true },
      { name: "Data Ethics and Privacy", completed: true },
      { name: "Introduction to Data Mining", completed: false },
      { name: "Basic Machine Learning Concepts", completed: false },
      { name: "Data Analysis Project Planning", completed: true },
      { name: "Data Storytelling Basics", completed: true },
    ],
    going: false,
    completed: true,
    projects: [
      {
        name: "Exploratory Data Analysis Project",
        link: "https://github.com/yourusername/eda-project",
      },
      {
        name: "Basic Data Visualization Dashboard",
        link: "https://github.com/yourusername/data-viz-dashboard",
      },
    ],
  },
  {
    date: "15th Sept 2024 - (3 Weeks)",
    title: "Advanced Data Analysis Techniques",
    description:
      "Delved into advanced data analysis methods, focusing on machine learning algorithms and predictive modeling.",
    hasButton: true,
    subtopics: [
      { name: "Advanced Statistical Analysis", completed: false },
      { name: "Machine Learning for Data Analysis", completed: false },
      { name: "Time Series Analysis", completed: false },
      { name: "Advanced Data Visualization", completed: false },
      { name: "Big Data Analytics", completed: false },
      {
        name: "Natural Language Processing for Data Analysis",
        completed: false,
      },
      { name: "Deep Learning Basics", completed: false },
      { name: "Feature Engineering Techniques", completed: false },
      { name: "Model Evaluation and Validation", completed: false },
      { name: "Data Pipelines and ETL Processes", completed: false },
      { name: "Advanced SQL and Database Management", completed: false },
      { name: "Data Analysis with R", completed: false },
      { name: "A/B Testing and Experimentation", completed: false },
      { name: "Predictive Modeling", completed: false },
      { name: "Data Analysis for Business Intelligence", completed: false },
    ],
    going: true,
    completed: false,
    projects: [
      {
        name: "Predictive Analytics Model",
        link: "https://github.com/yourusername/predictive-model",
      },
      {
        name: "Advanced Data Visualization Project",
        link: "https://github.com/yourusername/advanced-data-viz",
      },
    ],
  },
  {
    date: "6th Oct 2024 - (4 Weeks)",
    title: "Big Data Technologies",
    description:
      "Explored big data technologies and frameworks for handling and analyzing large-scale datasets.",
    hasButton: true,
    subtopics: [
      { name: "Hadoop Ecosystem", completed: false },
      { name: "Apache Spark", completed: false },
      { name: "Distributed Computing Concepts", completed: false },
      { name: "NoSQL Databases", completed: false },
      { name: "Data Warehousing", completed: false },
      { name: "Cloud Computing for Big Data", completed: false },
      { name: "Stream Processing", completed: false },
      { name: "Data Lake Architecture", completed: false },
      { name: "Big Data Visualization Tools", completed: false },
      { name: "Scalable Machine Learning", completed: false },
      { name: "Data Governance in Big Data", completed: false },
      { name: "Big Data Security and Privacy", completed: false },
      { name: "Real-time Analytics", completed: false },
      { name: "Graph Databases", completed: false },
      { name: "Big Data Use Cases and Applications", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "Big Data Processing Pipeline",
        link: "https://github.com/yourusername/big-data-pipeline",
      },
      {
        name: "Distributed Machine Learning Project",
        link: "https://github.com/yourusername/distributed-ml",
      },
    ],
  },
  {
    date: "3rd Nov 2024 - (3 Weeks)",
    title: "Data Visualization and Storytelling",
    description:
      "Focused on advanced data visualization techniques and effective data storytelling methods for presenting insights.",
    hasButton: true,
    subtopics: [
      { name: "Advanced Tableau Techniques", completed: false },
      { name: "D3.js for Custom Visualizations", completed: false },
      { name: "Interactive Dashboard Creation", completed: false },
      { name: "Data Storytelling Principles", completed: false },
      { name: "Visual Design for Data", completed: false },
      { name: "Infographic Design", completed: false },
      { name: "Geospatial Data Visualization", completed: false },
      { name: "Animated Data Visualizations", completed: false },
      { name: "Presenting Data to Non-Technical Audiences", completed: false },
      { name: "Color Theory in Data Visualization", completed: false },
      { name: "Narrative Structures for Data Stories", completed: false },
      { name: "Data Journalism Techniques", completed: false },
      { name: "Ethics in Data Visualization", completed: false },
      { name: "Virtual and Augmented Reality for Data Viz", completed: false },
      { name: "Accessibility in Data Visualization", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "Interactive Data Story",
        link: "https://github.com/yourusername/interactive-data-story",
      },
      {
        name: "Advanced Dashboard Project",
        link: "https://github.com/yourusername/advanced-dashboard",
      },
    ],
  },
  {
    date: "24th Nov 2024 - (4 Weeks)",
    title: "Advanced Machine Learning for Data Analysis",
    description:
      "Dove deep into advanced machine learning concepts and their application in data analysis, focusing on complex algorithms and model optimization.",
    hasButton: true,
    subtopics: [
      { name: "Ensemble Methods", completed: false },
      { name: "Deep Learning for Data Analysis", completed: false },
      { name: "Reinforcement Learning Basics", completed: false },
      { name: "Unsupervised Learning Techniques", completed: false },
      { name: "Natural Language Processing Advanced Topics", completed: false },
      { name: "Computer Vision for Data Analysis", completed: false },
      { name: "Time Series Forecasting", completed: false },
      { name: "Anomaly Detection", completed: false },
      { name: "Recommender Systems", completed: false },
      { name: "Model Interpretability and Explainable AI", completed: false },
      { name: "Hyperparameter Tuning", completed: false },
      { name: "AutoML Tools and Techniques", completed: false },
      { name: "Transfer Learning", completed: false },
      { name: "Ethical AI and Bias Mitigation", completed: false },
      { name: "MLOps Basics", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "Advanced ML Model for Business Insights",
        link: "https://github.com/yourusername/advanced-ml-insights",
      },
      {
        name: "NLP-based Data Analysis Tool",
        link: "https://github.com/yourusername/nlp-data-analysis",
      },
    ],
  },
  {
    date: "22nd Dec 2024 - (3 Weeks)",
    title: "Data Analysis in Business Context",
    description:
      "Applied data analysis techniques to real-world business problems, focusing on deriving actionable insights and supporting decision-making processes.",
    hasButton: true,
    subtopics: [
      { name: "Business Intelligence Fundamentals", completed: false },
      { name: "KPI Development and Tracking", completed: false },
      { name: "Financial Data Analysis", completed: false },
      { name: "Marketing Analytics", completed: false },
      { name: "Customer Segmentation Techniques", completed: false },
      { name: "Churn Prediction and Customer Retention", completed: false },
      { name: "Supply Chain Analytics", completed: false },
      { name: "HR Analytics", completed: false },
      { name: "Risk Analysis and Management", completed: false },
      { name: "Pricing Analytics", completed: false },
      { name: "Fraud Detection Techniques", completed: false },
      { name: "Social Media Analytics", completed: false },
      { name: "Product Analytics", completed: false },
      { name: "Competitive Intelligence Analysis", completed: false },
      { name: "Data-Driven Decision Making Frameworks", completed: false },
    ],
    going: false,
    completed: false,
    projects: [
      {
        name: "Customer Segmentation Analysis",
        link: "https://github.com/yourusername/customer-segmentation",
      },
      {
        name: "Predictive Sales Analytics Dashboard",
        link: "https://github.com/yourusername/sales-prediction-dashboard",
      },
    ],
  },
];

const LearningTimeline = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({
    0: true,
    1: true,
  });

  const displayedData = showAll ? timelineData : timelineData.slice(0, 4);

  const toggleSubtopics = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 pt-20 mx-auto w-[90%] space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 bg-black pb-10"
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        Data Analyst Learning Timeline
      </h1>
      <p className="text-center text-neutral-400 mb-12">
        From 1st Sept 2024 - Present
      </p>
      <Timeline theme={customTheme}>
        {displayedData.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point
              icon={item.completed ? HiCheckCircle : undefined}
              className={cn(item.completed ? "text-green-400" : "text-red-400")}
            />
            <Timeline.Content className="ml-8">
              <Timeline.Time className="text-white">{item.date}</Timeline.Time>
              <Timeline.Title
                className={cn(
                  "text-white flex items-center gap-2",
                  item.completed ? " text-neutral-200" : ""
                )}
              >
                {item.title}
                {item.going && (
                  <div className="bg-yellow-300/60 flex items-center gap-1 rounded-full border border-yellow-400 px-2 text-xs font-normal">
                    <span className="bg-yellow-200 rounded-full w-2 h-2"></span>
                    Working on it
                  </div>
                )}
                {item.completed && (
                  <div className="bg-green-300/60 flex items-center gap-1 rounded-full border border-green-400 px-2 text-xs font-normal">
                    <span className="bg-green-200 rounded-full w-2 h-2"></span>
                    Completed
                  </div>
                )}
              </Timeline.Title>
              <Timeline.Body
                className={cn(
                  "text-neutral-400",
                  item.completed ? " text-neutral-400" : ""
                )}
              >
                {item.description}
              </Timeline.Body>
              {item.projects.map((project) =>
                item.completed ? (
                  <Link
                    className={cn(
                      " p-2 rounded-md border pl-4 bg-green-500/50 text-white border-green-500 block mb-2 w-[350px]",
                      item.completed ? " " : ""
                    )}
                    href={project.link}
                    key={project.name}
                  >
                    {project.name}
                  </Link>
                ) : (
                  <div className="bg-neutral-300/40 p-2 rounded-md border pl-4 border-neutral-200/80 block mb-2 w-[350px]">
                    {project.name}
                  </div>
                )
              )}
              {item.hasButton && (
                <button
                  onClick={() => toggleSubtopics(index)}
                  className="flex items-center justify-center mt-4 bg-black text-sm text-white"
                >
                  {expandedItems[index] ? "Hide Subtopics" : "Show Subtopics"}
                  {expandedItems[index] ? (
                    <ChevronUp className="ml-2 h-3 w-3" />
                  ) : (
                    <ChevronDown className="ml-2 h-3 w-3" />
                  )}
                </button>
              )}
              {expandedItems[index] && (
                <ul className="mt-4 space-y-2 grid grid-cols-2 lg:grid-cols-3">
                  {item.subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="flex items-center space-x-2">
                      <Checkbox
                        id={`subtopic-${index}-${subIndex}`}
                        checked={subtopic.completed}
                        className="border-white"
                      />
                      <label
                        htmlFor={`subtopic-${index}-${subIndex}`}
                        className={cn(
                          "text-white text-sm",
                          subtopic.completed && "line-through"
                        )}
                      >
                        {subtopic.name}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
      {!showAll && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setShowAll(true)}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Show Complete Timeline
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default LearningTimeline;
