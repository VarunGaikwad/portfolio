import { IoLogoJavascript } from "react-icons/io";
import me from "../assets/me.png";
import SkillIcon from "../components/SkillIcon";
import {
  SiDart,
  SiFlutter,
  SiGithub,
  SiJira,
  SiMysql,
  SiNotion,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaAngular, FaFigma, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import GitHubContributions from "../components/GitHubContributions";

export default function About() {
  const skillClass = "text-7xl",
    skills = [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className={skillClass} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className={skillClass} />,
      },
      {
        name: "NodeJS",
        icon: <DiNodejs className={skillClass} />,
      },
      {
        name: "SQL",
        icon: <SiMysql className={skillClass} />,
      },
      {
        name: "ReactJS",
        icon: <FaReact className={skillClass} />,
      },
      {
        name: "Angular",
        icon: <FaAngular className={skillClass} />,
      },
      {
        name: "Flutter",
        icon: <SiFlutter className={skillClass} />,
      },
      {
        name: "Rust",
        icon: <SiRust className={skillClass} />,
      },
      {
        name: "Dart",
        icon: <SiDart className={skillClass} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className={skillClass} />,
      },
    ],
    tools = [
      {
        name: "VSCode",
        icon: <SiVisualstudiocode className={skillClass} />,
      },
      {
        name: "GitHub",
        icon: <SiGithub className={skillClass} />,
      },
      {
        name: "Figma",
        icon: <FaFigma className={skillClass} />,
      },
      {
        name: "Jira",
        icon: <SiJira className={skillClass} />,
      },
      {
        name: "Notion",
        icon: <SiNotion className={skillClass} />,
      },
    ];

  return (
    <div>
      <div className="flex flex-col md:flex-row pt-28 items-center md:h-screen gap-12 px-4">
        <div className="md:flex-1 flex flex-col text-xl md:text-xl font-semibold gap-4 items-center">
          <span className="text-5xl">Know Who I&apos;m</span>
          <span>
            Hi Everyone, I am{" "}
            <span className="text-deep-blue">Varun Gaikwad</span>. I have
            completed{" "}
            <em className="text-deep-blue">
              Bachelor of Engineering in Computer Engineering
            </em>
          </span>
          <span>
            Apart from coding, I love:
            <ul className="pt-4">
              <li>
                Playing Chess{" "}
                <span role="img" aria-label="Chess">
                  ♟️
                </span>
              </li>
              <li>
                Playing Video Games{" "}
                <span role="img" aria-label="Video Games">
                  🎮
                </span>
              </li>
              <li>
                Travelling{" "}
                <span role="img" aria-label="Travelling">
                  ✈️
                </span>
              </li>
              <li>
                Studying Geography{" "}
                <span role="img" aria-label="Geography">
                  🌎
                </span>
              </li>
            </ul>
          </span>
          <span className="text-center">
            <q className="text-deep-blue">
              It&apos;s not that I&apos;m smart, it&apos;s just that I stay with
              problem longer
            </q>
          </span>
        </div>
        <img className="size-56 md:size-96" src={me} />
      </div>
      <div className="flex flex-col py-12">
        <span className="text-4xl font-semibold text-center">
          Professional <span className="text-deep-blue">Skillset</span>
        </span>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {skills.map((skill, idx) => (
            <SkillIcon key={idx}>{skill.icon}</SkillIcon>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-12">
        <span className="text-4xl font-semibold text-center">
          <span className="text-deep-blue">Tools </span> I use
        </span>
        <div className="flex flex-wrap justify-center gap-10 mt-4">
          {tools.map((skill, idx) => (
            <SkillIcon key={idx}>{skill.icon}</SkillIcon>
          ))}
        </div>
      </div>
      <div>
        <GitHubContributions username="VarunGaikwad" />
      </div>
    </div>
  );
}
