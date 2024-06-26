import homeIcon from "../assets/home.svg";
import homeIcon2 from "../assets/home-2.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Home() {
  return (
    <main>
      <div className="pt-14 md:pt-0 h-screen flex flex-col md:flex-row justify-evenly items-center px-5">
        <div className="md:w-2/3 flex flex-col font-bold gap-2">
          <span className="text-6xl md:text-8xl">
            Hi There! <span className="wave">👋</span>
          </span>
          <span className="uppercase text-3xl md:text-5xl">
            I&apos;m <span className="text-deep-blue">Varun Gaikwad</span>
          </span>
          <span className="text-3xl md:text-5xl pt-5 uppercase text-deep-blue ">
            Fullstack Web Developer
          </span>
        </div>
        <img className="md:w-1/3 size-80" src={homeIcon} alt="home" />
      </div>
      <div className="h-screen flex flex-col space-y-16">
        <div className="flex-1 flex flex-col md:flex-row justify-evenly items-center px-10">
          <div className="md:w-3/4 flex flex-col font-semibold gap-2 text-xl space-y-2">
            <span className="text-center uppercase text-4xl">
              Let me <em className="text-deep-blue">introduce</em> myself.
            </span>
            <span>I just love to build things that make a difference. 🤖</span>
            <span>
              I have a strong hold on modern{" "}
              <em className="text-deep-blue">JavaScript</em>.
            </span>
            <span>
              My field of interest is Fullstack Web Development and building
              responsive web applications using{" "}
              <em className="text-deep-blue">ReactJS</em>,{" "}
              <em className="text-deep-blue">NodeJS</em>,{" "}
              <em className="text-deep-blue">Tailwind CSS</em>.
            </span>
            <span>
              Experienced in backend development with{" "}
              <em className="text-deep-blue">Express.js</em> and{" "}
              <em className="text-deep-blue">MongoDB</em>.
            </span>
            <span>
              Passionate about continuous learning and technology trends.
            </span>
          </div>
          <img className="md:w-1/4 size-72" src={homeIcon2} alt="home" />
        </div>
        <div className="p-4 flex flex-col items-center gap-2 text-center">
          <span className="uppercase text-4xl font-bold">find me on</span>
          <span className="uppercase text-xl font-semibold">
            Feel free to <em className="text-deep-blue">connect</em> with me
          </span>
          <div className="flex gap-10">
            <a target="_blank" href="https://github.com/varungaikwad">
              <FaGithub className="size-10" />
            </a>
            <a target="_blank" href="https://www.instagram.com/preapexis/">
              <FaInstagram className="size-10" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/varun-gaikwad/"
            >
              <FaLinkedin className="size-10" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
