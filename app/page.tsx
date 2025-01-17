"use client";
import Image from "next/image";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import LearningTimeline from "@/components/timeline";
import { Skills } from "@/components/about/skills";
import Ripple from "@/components/magicui/ripple";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExploreButton } from "@/components/project/explore-button";

const Hero = () => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center items-center w-screen h-fit pt-72 overflow-hidden relative">
      <div className="w-full absolute top-8 z-[100]">
        <Navbar />
      </div>

      <Ripple className="top-0" />
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Content />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="px-6 py-20 mx-auto max-w-7xl lg:px-8 flex items-center justify-center flex-col bg-black">
      <ExploreButton title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 items-center">
        <div className="relative w-[90%] md:w-[60%] mx-auto h-[400px] mt-16 overflow-hidden rounded-2xl">
          <Image
            src="/personal.jpeg"
            alt="Prashant"
            layout="fill"
            objectFit="cover"
            className="rounded-lg grayscale scale-[1.3]"
          />
        </div>
        <div className="text-neutral-400 space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>My name is Prashant, and I live in India.</li>
            <li>
              Currently pursuing a Bachelor's in Engineering Physics from Delhi
              Technological University.
            </li>
            <li>I have 6 months of learning experience in data analysis.</li>
            <li>Completed 1 internship in the field of data analysis.</li>
            <li>Skilled in analyzing and interpreting complex datasets.</li>
            <li>I'm enthusiastic about potential collaborations.</li>
            <li>I love to drink Chai!</li>
          </ul>
          <p className="mt-4">
            I invite you to explore my projects and skills below. I would love
            the opportunity to work with you!
          </p>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    name: "Data Visualization Dashboard",
    description: "Interactive data insights",
    githubLink: "https://github.com/yourusername/data-viz-dashboard",
    demoLink: "https://data-viz-dashboard-demo.com",
    tags: ["python", "dash", "plotly", "pandas"],
    size: "large",
  },
  {
    id: 2,
    name: "Predictive Analytics Model",
    description: "Sales forecasting system",
    githubLink: "https://github.com/yourusername/predictive-analytics",
    demoLink: "https://predictive-analytics-demo.com",
    tags: ["python", "scikit-learn", "numpy"],
    size: "medium",
  },
  {
    id: 3,
    name: "Data Cleaning Pipeline",
    description: "Automated data preprocessing",
    githubLink: "https://github.com/yourusername/data-cleaning-pipeline",
    demoLink: "https://data-cleaning-pipeline-demo.com",
    tags: ["python", "pandas", "numpy"],
    size: "small",
  },
  {
    id: 4,
    name: "Statistical Analysis Tool",
    description: "Advanced statistical computations",
    githubLink: "https://github.com/yourusername/statistical-analysis-tool",
    demoLink: "https://statistical-analysis-tool-demo.com",
    tags: ["python", "scipy", "statsmodels"],
    size: "medium",
  },
  {
    id: 5,
    name: "Time Series Forecasting",
    description: "Predicting future trends",
    githubLink: "https://github.com/yourusername/time-series-forecasting",
    demoLink: "https://time-series-forecasting-demo.com",
    tags: ["python", "prophet", "pandas"],
    size: "small",
  },
  {
    id: 6,
    name: "Data ETL Process",
    description: "Efficient data pipeline",
    githubLink: "https://github.com/yourusername/data-etl-process",
    demoLink: "https://data-etl-process-demo.com",
    tags: ["python", "apache-airflow", "sql"],
    size: "medium",
  },
];

const BentoGrid = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) =>
          selectedTags.some((tag) => project.tags.includes(tag))
        )
      : projects;

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8" id="projects">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">
        Projects
      </h1>

      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {allTags.map((tag) => (
          <Button
            key={tag}
            onClick={() => toggleTag(tag)}
            variant={selectedTags.includes(tag) ? "outline" : "default"}
            className="text-sm"
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProjects.map((project) => (
          <motion.div
            key={project.id}
            className={`group relative overflow-hidden border hover:cursor-pointer border-neutral-700 rounded-lg shadow-lg transition-transform duration-100 ease-linear hover:scale-105 ${
              project.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : project.size === "medium"
                ? "md:col-span-2"
                : ""
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <div
              className={`w-full bg-neutral-900 ${
                project.size === "large" ? "h-[400px]" : "h-[200px]"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-semibold mb-1">{project.name}</h2>
              <p className="text-sm text-neutral-400 mb-2">
                {project.description}
              </p>
              <div className="flex space-x-4 mb-2">
                <Link
                  href={project.githubLink}
                  className="text-blue-400 hover:text-blue-300 flex items-center"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </Link>
                <Link
                  href={project.demoLink}
                  className="text-green-400 hover:text-green-300 flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-800 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="absolute top-4 right-4 w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
      {!showAllProjects && filteredProjects.length > 6 && (
        <div className="mt-8 flex justify-center">
          <Button onClick={() => setShowAllProjects(true)}>
            See All Projects
          </Button>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden bg-black">
      <Hero />
      <About />
      <div className="py-20">
        <BentoGrid />
      </div>
      <div
        className=" w-full overflow-x-hidden relative text-center py-8 pt-24 bg-black"
        id="skills"
      >
        <h1 className="z-10 text-5xl text-white cursor-default">My Skills</h1>
        <Ripple />
        <Skills />
      </div>
      <LearningTimeline />
    </div>
  );
}
