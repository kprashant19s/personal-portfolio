import React from "react";
import { SkillBox } from "./shimmer";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaTable,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTableau,
  SiPowerbi,
  SiMicrosoftexcel,
  SiRstudio,
  SiApachespark,
  SiApachekafka,
  SiGooglecloud,
  SiAmazonaws,
  SiMicrosoftazure,
} from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { DiMysql } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SkillsProps = {};

const skillsData = {
  "Data Analysis": [
    { Icon: FaPython, name: "Python" },
    { Icon: SiPandas, name: "Pandas" },
    { Icon: SiNumpy, name: "NumPy" },
    { Icon: SiJupyter, name: "Jupyter Notebook" },
    { Icon: SiRstudio, name: "R" },
    { Icon: SiMicrosoftexcel, name: "Excel" },
    { Icon: AiOutlineConsoleSql, name: "SQL" },
    { Icon: SiScikitlearn, name: "Scikit-learn" },
  ],
  "Data Visualization": [
    { Icon: SiTableau, name: "Tableau" },
    { Icon: SiPowerbi, name: "Power BI" },
    { Icon: FaChartBar, name: "Matplotlib" },
    { Icon: TbBrandPython, name: "Seaborn" },
    { Icon: FaProjectDiagram, name: "Plotly" },
  ],
  "Databases & Big Data": [
    { Icon: DiMysql, name: "MySQL" },
    { Icon: FaDatabase, name: "PostgreSQL" },
    { Icon: SiApachespark, name: "Apache Spark" },
    { Icon: SiApachekafka, name: "Apache Kafka" },
    { Icon: FaTable, name: "Hadoop" },
  ],
  "Cloud Platforms": [
    { Icon: SiGooglecloud, name: "Google Cloud Platform" },
    { Icon: SiAmazonaws, name: "Amazon Web Services" },
    { Icon: SiMicrosoftazure, name: "Microsoft Azure" },
  ],
  "Version Control": [{ Icon: BsGit, name: "Git" }],
};

export const Skills = ({}: SkillsProps) => {
  return (
    <div className="w-full flex justify-center pb-20 relative">
      <div className="w-[95%] sm:w-[80%] my-12">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="p-2 flex flex-col justify-start items-center mt-14"
          >
            <h1 className="text-xl text-white capitalize">{category}</h1>

            <div className="flex pt-4 gap-2 sm:gap-4 flex-wrap justify-center">
              {skills.map((skill, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <SkillBox Icon={skill.Icon} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
